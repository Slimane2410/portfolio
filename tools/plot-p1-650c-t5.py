from pathlib import Path

import matplotlib
import matplotlib.pyplot as plt
import pandas as pd

matplotlib.use("Agg")


CSV_PATH = Path("/Users/slimaneaouanouk/Desktop/MATA_01_04/Comportement_cycliquesujet copy.csv")
SERIES_NAME = "P1_650C_T5"
OUTPUT_PATH = Path("/Users/slimaneaouanouk/Desktop/Portfolio/Website/Slim portfolio-main/p1_650c_t5_contrainte_deformation.png")


def load_series(csv_path: Path, series_name: str) -> pd.DataFrame:
    raw = pd.read_csv(csv_path, header=None)

    series_positions = raw.iloc[0].fillna("").astype(str).str.strip()
    matches = series_positions[series_positions == series_name]
    if matches.empty:
        raise ValueError(f"Serie introuvable: {series_name}")

    start_col = matches.index[0]
    block = raw.iloc[2:, start_col : start_col + 3].copy()
    block.columns = (
        raw.iloc[2, start_col : start_col + 3].fillna("").astype(str).str.strip().tolist()
    )
    block = block.iloc[1:].reset_index(drop=True)

    block = block.apply(pd.to_numeric, errors="coerce")

    block = block.dropna(subset=["Contrainte (MPa)", "Deformation (mm/mm)"])
    return block


def main() -> None:
    data = load_series(CSV_PATH, SERIES_NAME)

    plt.figure(figsize=(8, 6))
    plt.plot(
        data["Deformation (mm/mm)"],
        data["Contrainte (MPa)"],
        color="#0b5fff",
        linewidth=1.4,
    )
    plt.title("P1_650C_T5 - Contrainte en fonction de la deformation")
    plt.xlabel("Deformation (mm/mm)")
    plt.ylabel("Contrainte (MPa)")
    plt.grid(True, alpha=0.3)
    plt.tight_layout()
    plt.savefig(OUTPUT_PATH, dpi=200)
    print(f"Graphe enregistre dans: {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
