from pulp import LpProblem, LpMinimize, LpVariable, lpSum
from datetime import datetime
from zoneinfo import ZoneInfo

# Beispielwerte
strompreise_dict = {
    "1734332400": 0.0002522, "1734336000": 0.0002571, "1734339600": 0.0002565,
    "1734343200": 0.0002621, "1734346800": 0.0002681, "1734350400": 0.000264,
    "1734354000": 0.000264, "1734357600": 0.000264, "1734361200": 0.0002548,
    "1734364800": 0.00026379999999999996, "1734368400": 0.0002524, "1734372000": 0.0002511,
    "1734375600": 0.0002399, "1734379200": 0.0002196, "1734382800": 0.0002196,
    "1734386400": 0.0001865
}

earliest_start = 1734336000  # Example value, set to None if not needed
latest_stop = 1734372000  # Example value, set to None if not needed


sorted_strompreise = sorted(strompreise_dict.items())
timestamps = [timestamp for timestamp, _ in sorted_strompreise]
strompreise = [price for _, price in sorted_strompreise]

# Filter the timestamps and prices based on the provided time window
if earliest_start is not None:
    timestamps, strompreise = zip(*[(t, p) for t, p in zip(timestamps, strompreise) if int(t) >= earliest_start])
if latest_stop is not None:
    timestamps, strompreise = zip(*[(t, p) for t, p in zip(timestamps, strompreise) if int(t) <= latest_stop])


# Beispielwerte
ziel_ladestand = 20  # kWh
aktuell_ladestand = 5  # kWh
ladegeschwindigkeit = 5  # kW pro Stunde
stunden = len(strompreise)

# Problem definieren
problem = LpProblem("Ladezeit_Optimierung", LpMinimize)

# Variablen erstellen (ob in Stunde i geladen wird)
x = [LpVariable(f"x{i}", lowBound=0, upBound=1) for i in range(stunden)]

# Zielfunktion
problem += lpSum([strompreise[i] * x[i] for i in range(stunden)])

# Nebenbedingung: Ziel-Ladestand erreichen
benötigte_ladung = ziel_ladestand - aktuell_ladestand
print("Benötigte Ladung:", benötigte_ladung)
problem += lpSum([x[i] * ladegeschwindigkeit for i in range(stunden)]) >= benötigte_ladung

# Problem lösen
problem.solve()

tz = ZoneInfo("Europe/Berlin")
# Ergebnisse ausgeben
ladezeiten = [x[i].varValue for i in range(stunden)]
result = {
    datetime.fromtimestamp(int(timestamps[i]), tz=tz).strftime('%Y-%m-%d %H:%M:%S'): {
        'Laden': ladezeiten[i],
        'Preis': strompreise[i]
    }
    for i in range(stunden)
}
print("Optimale Ladezeiten:", result)
