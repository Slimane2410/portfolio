import json, glob, os, re, statistics as st
import matplotlib; matplotlib.use("Agg")
import matplotlib.pyplot as plt

ROOT="/Users/slimaneaouanouk/Desktop/PJT_Paco/Code/trajectory-optimization-drone"
OUT=os.path.join(ROOT,"paco-showcase/assets/figures")
INK="#101828"; INK_SOFT="#4b5565"; BLUE="#526ff5"; ORANGE="#f08245"; LINE="#d7d9de"; GREEN="#37a574"
plt.rcParams.update({"font.family":"DejaVu Sans","font.size":11,"axes.edgecolor":LINE,
 "axes.labelcolor":INK_SOFT,"text.color":INK,"xtick.color":INK_SOFT,"ytick.color":INK_SOFT,
 "figure.facecolor":"white","axes.facecolor":"white"})

sims={}
for f in glob.glob(os.path.join(ROOT,"outputs/camera/simulations_Phase6/*/**_simulation.json")):
    m=re.search(r'dashboard_phase6_10_([0-9a-f]+)_simulation\.json', os.path.basename(f))
    if m: sims[m.group(1)]=json.load(open(f))

pts=[]
for f in sorted(glob.glob(os.path.join(ROOT,"outputs/camera/phase6_10/20260730_*/**_real_summary.json"))):
    run=os.path.basename(os.path.dirname(f)); real=json.load(open(f))
    if not real.get("observed_mobile_ids") or real.get("stop_reason")!="goal_reached": continue
    h=re.search(r'_([0-9a-f]+)$',run).group(1)
    sm=sims.get(h,{}).get("metrics",{})
    if sm.get("final_goal_distance_m") is None: continue
    pts.append((sm["final_goal_distance_m"]*100, real["final_goal_distance_m"]*100,
                len(real["observed_mobile_ids"])))

fig,ax=plt.subplots(figsize=(9.6,7.2))
lim=26
ax.plot([0,lim],[0,lim],ls="--",color=INK_SOFT,lw=1.3,alpha=0.7,label="Perfect agreement")
for d in (2,):
    ax.fill_between([0,lim],[-d,lim-d],[d,lim+d],color=BLUE,alpha=0.10,
                    label=f"±{d} cm band" if d==2 else None)
one=[(s,r) for s,r,n in pts if n==1]; two=[(s,r) for s,r,n in pts if n>=2]
ax.scatter([s for s,_ in one],[r for _,r in one],s=110,color=BLUE,alpha=0.85,
           edgecolor="white",lw=1.2,zorder=5,label=f"1 moving agent (n={len(one)})")
ax.scatter([s for s,_ in two],[r for _,r in two],s=130,color=GREEN,alpha=0.85,
           edgecolor="white",lw=1.2,marker="D",zorder=5,label=f"2 moving agents (n={len(two)})")
ax.set_xlim(0,lim); ax.set_ylim(0,lim); ax.set_aspect("equal")
ax.set_xlabel("Simulated final distance to goal [cm]")
ax.set_ylabel("Measured final distance to goal [cm]")
ax.grid(True,color=LINE,lw=0.6,alpha=0.7)
ax.legend(loc="upper left",frameon=True,facecolor="white",edgecolor=LINE,fontsize=10)
d=[abs(s-r) for s,r,_ in pts]
ax.set_title("Digital twin vs reality — where the rover actually stopped",
             fontsize=13,fontweight="bold",pad=14)
fig.suptitle(f"{len(pts)} paired runs, 30 July 2026 · median agreement {st.median(d):.2f} cm · "
             f"{sum(1 for x in d if x<=2)}/{len(pts)} within 2 cm",
             y=0.935,fontsize=10.5,color=INK_SOFT)
fig.tight_layout(rect=[0,0,1,0.92])
fig.savefig(os.path.join(OUT,"anticollision_twin_vs_real.png"),dpi=150,bbox_inches="tight",facecolor="white")
print("wrote anticollision_twin_vs_real.png")
print(f"  n={len(pts)} median={st.median(d):.2f}cm mean={st.mean(d):.2f}cm within2={sum(1 for x in d if x<=2)}")
