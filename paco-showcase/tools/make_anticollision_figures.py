"""Generate anti-collision evidence figures for the paco-showcase site.

All data is read directly from the logged Phase 6.10 runs:
  outputs/camera/phase6_10/<run>/           real run (CSV + summary + nominal)
  outputs/camera/simulations_Phase6/<run>/  paired simulation for the same scenario
"""
import csv
import base64
import json
import math
import os
import sys

import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
from matplotlib.backends.backend_agg import FigureCanvasAgg
from matplotlib.figure import Figure
from matplotlib.patches import Circle

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
OUT = os.path.join(ROOT, "paco-showcase/assets/figures")
if ROOT not in sys.path:
    sys.path.insert(0, ROOT)

from trajopt.simulation.scenario_dashboard import (  # noqa: E402
    _phase6_10_comparison_plot_data_url,
)

# Site palette (from styles.css)
INK = "#101828"
INK_SOFT = "#4b5565"
BLUE = "#526ff5"
ORANGE = "#f08245"
GREEN = "#37a574"
RED = "#d0524f"
PAPER = "#faf9f6"
LINE = "#d7d9de"

plt.rcParams.update({
    "font.family": "DejaVu Sans",
    "font.size": 11,
    "axes.edgecolor": LINE,
    "axes.labelcolor": INK_SOFT,
    "text.color": INK,
    "xtick.color": INK_SOFT,
    "ytick.color": INK_SOFT,
    "axes.titlecolor": INK,
    "figure.facecolor": "white",
    "axes.facecolor": "white",
})


def load(run_dir, sim_dir, h):
    base = os.path.join(ROOT, "outputs/camera/phase6_10", run_dir, f"dashboard_phase6_10_{h}")
    sim = json.load(open(os.path.join(
        ROOT, "outputs/camera/simulations_Phase6", sim_dir,
        f"dashboard_phase6_10_{h}_simulation.json")))
    summary = json.load(open(base + "_real_summary.json"))
    nominal = json.load(open(base + "_real_nominal.json"))
    rows = list(csv.DictReader(open(base + "_real.csv")))
    return sim, summary, nominal, rows


def real_path(rows):
    xs, ys, ts, clr = [], [], [], []
    for r in rows:
        if r.get("robot_x_m") and r.get("robot_y_m"):
            try:
                xs.append(float(r["robot_x_m"]))
                ys.append(float(r["robot_y_m"]))
                ts.append(float(r["elapsed_s"]))
            except ValueError:
                continue
            v = r.get("min_mobile_clearance_m")
            try:
                clr.append(float(v) if v not in (None, "") else math.nan)
            except ValueError:
                clr.append(math.nan)
    return xs, ys, ts, clr


def mobile_tracks(rows):
    """Reconstruct each observed mobile agent's measured path from the log."""
    tracks = {}
    for r in rows:
        raw = r.get("mobile_observations_json")
        if not raw:
            continue
        try:
            obs = json.loads(raw)
        except (json.JSONDecodeError, TypeError):
            continue
        for o in obs:
            mid = o.get("marker_id")
            c = o.get("center_m")
            if mid is None or not c:
                continue
            tracks.setdefault(mid, []).append((c[0], c[1]))
    return tracks



def encounter_moment(rows):
    """Index/state of the instant where the rover is closest to a moving agent."""
    best = None
    for r in rows:
        try:
            x = float(r["robot_x_m"]); y = float(r["robot_y_m"])
            c = float(r["min_mobile_clearance_m"]); t = float(r["elapsed_s"])
        except (TypeError, ValueError, KeyError):
            continue
        obs = []
        raw = r.get("mobile_observations_json")
        if raw:
            try:
                obs = [o for o in json.loads(raw) if o.get("center_m")]
            except (json.JSONDecodeError, TypeError):
                obs = []
        if best is None or c < best["clearance"]:
            best = {"x": x, "y": y, "t": t, "clearance": c, "agents": obs}
    return best


def draw_arena(ax, sim, nominal, rows, summary, title):
    scen = nominal["scenario"]
    xs, ys, _, _ = real_path(rows)

    # Fixed obstacles + their influence radius
    for i, ob in enumerate(scen.get("obstacles", [])):
        cx, cy = ob["center_x_m"], ob["center_y_m"]
        rad = ob.get("radius_m", 0.1)
        infl = ob.get("influence_radius_m")
        if infl:
            ax.add_patch(Circle((cx, cy), infl, fill=False, ls=(0, (3, 3)),
                                ec=RED, lw=1.0, alpha=0.45, zorder=1))
        ax.add_patch(Circle((cx, cy), rad, facecolor=RED, alpha=0.30,
                            ec=RED, lw=1.2, zorder=2,
                            label="Fixed obstacle" if i == 0 else None))

    # Measured path of each moving agent
    tracks = mobile_tracks(rows)
    for j, (mid, pts) in enumerate(sorted(tracks.items())):
        mx = [p[0] for p in pts]
        my = [p[1] for p in pts]
        ax.plot(mx, my, color=GREEN, lw=2.0, ls="-.", alpha=0.85, zorder=3,
                label="Moving agent (measured)" if j == 0 else None)
        ax.add_patch(Circle((mx[0], my[0]), 0.13, facecolor=GREEN, alpha=0.18,
                            ec=GREEN, lw=1.0, zorder=2))
        ax.plot(mx[-1], my[-1], marker="X", color=GREEN, ms=9, zorder=6,
                label="Agent at closest approach" if j == 0 else None)

    # Nominal (offline plan)
    nom = sim.get("nominal_points_m") or []
    if nom:
        ax.plot([p[0] for p in nom], [p[1] for p in nom], color=INK_SOFT, lw=1.6,
                ls=(0, (4, 3)), alpha=0.75, zorder=4,
                label="Nominal plan (offline)")

    # Simulated trajectory (digital twin)
    pts = sim.get("points_m") or []
    if pts:
        ax.plot([p[0] for p in pts], [p[1] for p in pts], color=BLUE, lw=2.6,
                alpha=0.9, zorder=5, label="Simulated (digital twin)")

    # Measured trajectory
    ax.plot(xs, ys, color=ORANGE, lw=2.8, zorder=6,
            label="Measured (real rover)")

    # The encounter: where the rover was when it came closest to an agent
    enc = encounter_moment(rows)
    if enc:
        for o in enc["agents"]:
            cx, cy = o["center_m"]
            ax.add_patch(Circle((cx, cy), o.get("radius_m", 0.13), facecolor=GREEN,
                                alpha=0.55, ec=GREEN, lw=1.6, zorder=7))
        near = min(enc["agents"],
                   key=lambda o: math.dist((enc["x"], enc["y"]), o["center_m"])) if enc["agents"] else None
        if near:
            nx, ny = near["center_m"]
            ax.plot([enc["x"], nx], [enc["y"], ny], color=INK, lw=1.4, ls=":", zorder=8)
            ax.annotate(f"closest approach\n{enc['clearance']*100:.1f} cm",
                        xy=((enc["x"]+nx)/2, (enc["y"]+ny)/2),
                        xytext=(0.60, 0.93), textcoords="axes fraction",
                        fontsize=9.5, fontweight="bold", color=INK, ha="left", va="top",
                        arrowprops=dict(arrowstyle="->", color=INK_SOFT, lw=1.2,
                                        connectionstyle="arc3,rad=0.15"),
                        bbox=dict(boxstyle="round,pad=0.35", fc="white", ec=LINE, alpha=0.95))
        ax.plot(enc["x"], enc["y"], "o", color=ORANGE, ms=11, mec="white", mew=1.6, zorder=9)

    # Start / goal
    sx, sy = scen["start_m"]
    gx, gy = scen["goal_m"]
    ax.plot(sx, sy, "o", color=INK, ms=9, zorder=8, label="Start")
    ax.plot(gx, gy, "*", color=ORANGE, ms=17, zorder=8, mec=INK, mew=0.6,
            label="Goal")

    # Shade the corridor between the plan and what the rover actually did
    if nom and xs:
        import numpy as np
        npts = np.array(nom)
        rpts = np.array(list(zip(xs, ys)))
        idx = [int(np.argmin(np.hypot(npts[:, 0] - px, npts[:, 1] - py))) for px, py in rpts]
        ax.fill(np.concatenate([rpts[:, 0], npts[idx][::-1, 0]]),
                np.concatenate([rpts[:, 1], npts[idx][::-1, 1]]),
                color=ORANGE, alpha=0.13, lw=0, zorder=3)

    # Zoom to the action rather than always showing the whole 2 x 2 m arena
    allx = list(xs) + [p[0] for p in (nom or [])] + [sx0 for sx0, _ in
                       [(o["center_x_m"], o["center_y_m"]) for o in scen.get("obstacles", [])]]
    ally = list(ys) + [p[1] for p in (nom or [])] + [sy0 for _, sy0 in
                       [(o["center_x_m"], o["center_y_m"]) for o in scen.get("obstacles", [])]]
    for _mid, _pts in mobile_tracks(rows).items():
        allx += [q[0] for q in _pts]; ally += [q[1] for q in _pts]
    pad = 0.22
    cx0, cx1 = min(allx) - pad, max(allx) + pad
    cy0, cy1 = min(ally) - pad, max(ally) + pad
    span = max(cx1 - cx0, cy1 - cy0)
    mx0, my0 = (cx0 + cx1) / 2, (cy0 + cy1) / 2
    ax.set_xlim(mx0 - span / 2, mx0 + span / 2)
    ax.set_ylim(my0 - span / 2, my0 + span / 2)
    ax.set_aspect("equal")
    ax.set_xlabel("x [m]")
    ax.set_ylabel("y [m]")
    ax.grid(True, color=LINE, lw=0.6, alpha=0.7)
    ax.set_title(title, fontsize=12.5, fontweight="bold", pad=12)


def build(run_dir, sim_dir, h, outfile, title):
    sim, summary, nominal, rows = load(run_dir, sim_dir, h)
    fig, ax = plt.subplots(figsize=(8.15, 8.0))
    draw_arena(ax, sim, nominal, rows, summary, title)

    handles, labels = ax.get_legend_handles_labels()
    ax.legend(handles, labels, loc="upper center", bbox_to_anchor=(0.5, -0.14),
              ncol=3, frameon=False, fontsize=9.2)

    fig.subplots_adjust(left=0.12, right=0.97, top=0.92, bottom=0.25)
    path = os.path.join(OUT, outfile)
    fig.savefig(path, dpi=150, facecolor="white")
    plt.close(fig)

    print(f"wrote {outfile}")
    print(f"   goal {summary['final_goal_distance_m']*100:.1f} cm | "
          f"min mobile {summary['min_mobile_clearance_m']*100:.1f} cm | "
          f"min static {summary['min_static_clearance_m']*100:.1f} cm | "
          f"sim goal {sim['metrics']['final_goal_distance_m']*100:.1f} cm")


def build_dashboard_comparison(run_dir, sim_dir, h, outfile):
    """Export the exact comparison renderer used by the Phase 6.10 dashboard."""
    sim, _summary, _nominal, rows = load(run_dir, sim_dir, h)
    xs, ys, _times, _clearances = real_path(rows)
    comparison = {
        "experiment_id": f"dashboard_phase6_10_{h}",
        "nominal_points": sim.get("nominal_points_m") or [],
        "simulation_points": sim.get("points_m") or [],
        "real_points": list(zip(xs, ys)),
        "simulation_mobile_paths": sim.get("mobile_paths_m") or {},
        "real_mobile_paths": mobile_tracks(rows),
        "scenario": sim["scenario"],
    }

    # The dashboard plot uses Matplotlib's native defaults.
    matplotlib.rcdefaults()
    data_url = _phase6_10_comparison_plot_data_url(
        comparison,
        distance_unit="cm",
    )
    encoded = data_url.split(",", 1)[1]
    path = os.path.join(OUT, outfile)
    with open(path, "wb") as handle:
        handle.write(base64.b64decode(encoded))
    print(f"wrote {outfile} with the native Phase 6.10 dashboard renderer")


def build_mobile_clearance(run_dir, sim_dir, h, outfile):
    """Plot the logged edge-to-edge clearance to the closest mobile rover."""
    _sim, summary, _nominal, rows = load(run_dir, sim_dir, h)
    samples = []
    for row in rows:
        if row.get("event") != "phase6_10_command":
            continue
        try:
            elapsed_s = float(row["elapsed_s"])
            clearance_cm = float(row["min_mobile_clearance_m"]) * 100.0
        except (KeyError, TypeError, ValueError):
            continue
        samples.append((elapsed_s, clearance_cm))
    if not samples:
        raise RuntimeError(f"No mobile-clearance samples found for {h}")

    samples.sort(key=lambda sample: sample[0])
    times = np.asarray([sample[0] for sample in samples])
    clearances = np.asarray([sample[1] for sample in samples])
    minimum_index = int(np.argmin(clearances))
    minimum_time = float(times[minimum_index])
    minimum_clearance = float(clearances[minimum_index])

    matplotlib.rcdefaults()
    figure = Figure(figsize=(9.4, 7.0), layout="constrained")
    FigureCanvasAgg(figure)
    axis = figure.add_subplot(1, 1, 1)
    axis.plot(
        times,
        clearances,
        color="#e8590c",
        linewidth=2.2,
        label="Marge mobile mesurée",
    )
    axis.axhline(
        0.0,
        color="#dc2626",
        linestyle="--",
        linewidth=1.6,
        label="Seuil de contact",
    )
    axis.scatter(
        [minimum_time],
        [minimum_clearance],
        color="#dc2626",
        s=42,
        zorder=4,
    )
    axis.annotate(
        f"minimum : {minimum_clearance:.1f} cm",
        xy=(minimum_time, minimum_clearance),
        xytext=(0.58, 0.18),
        textcoords="axes fraction",
        arrowprops={"arrowstyle": "->", "color": "#475467", "linewidth": 1.2},
        bbox={
            "boxstyle": "round,pad=0.35",
            "facecolor": "white",
            "edgecolor": "#d0d5dd",
        },
        fontsize=10,
        fontweight="bold",
    )
    axis.set(
        xlabel="temps [s]",
        ylabel="marge de sécurité mobile [cm]",
        title=(
            "Phase 6.10 - marge de sécurité mobile - "
            f"dashboard_phase6_10_{h}"
        ),
    )
    axis.grid(True, color="#d0d5dd")
    axis.legend(loc="best")
    axis.margins(x=0.02)

    path = os.path.join(OUT, outfile)
    figure.savefig(path, format="png", dpi=140)
    print(
        f"wrote {outfile} from {len(samples)} logged samples "
        f"(minimum {summary['min_mobile_clearance_m'] * 100.0:.1f} cm)"
    )


if __name__ == "__main__":
    os.makedirs(OUT, exist_ok=True)

    build("20260729_161351_dashboard_phase6_10_dc63e50a60",
          "20260729_161341_phase6_10_dashboard_phase6_10_dc63e50a60",
          "dc63e50a60",
          "anticollision_single_agent.png",
          "Arena view — one moving agent crossing the path")

    build("20260731_185745_dashboard_phase6_10_d5418229b1",
          "20260731_185745_phase6_10_dashboard_phase6_10_d5418229b1",
          "d5418229b1",
          "anticollision_dual_agent.png",
          "Arena view — two simultaneous moving agents")

    latest_run = "20260731_190044_dashboard_phase6_10_cbd2abb020"
    latest_sim = "20260731_190044_phase6_10_dashboard_phase6_10_cbd2abb020"
    latest_hash = "cbd2abb020"
    build_dashboard_comparison(
        latest_run,
        latest_sim,
        latest_hash,
        "phase6_10_cbd2abb020_comparison.png",
    )
    build_mobile_clearance(
        latest_run,
        latest_sim,
        latest_hash,
        "phase6_10_cbd2abb020_mobile_clearance.png",
    )
