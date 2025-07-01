import psycopg2
from dotenv import load_dotenv
import requests
import random
import os

load_dotenv()
def connect_db():
     return psycopg2.connect(
        host=os.getenv("DB_HOST"),
        dbname=os.getenv("DB_NAME"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        port=os.getenv("DB_PORT")
    )
def creer_table_si_absente():
    con = connect_db()
    cur = con.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS pays (
            id SERIAL PRIMARY KEY,
            nom TEXT UNIQUE NOT NULL,
            capitale TEXT,
            drapeau TEXT,
            sous_region TEXT,
            population BIGINT
        )
    """)
    con.commit()
    cur.close()
    con.close()
    
def pays_aléatoire(n=10):
    url = "https://restcountries.com/v3.1/all?fields=name,capital,subregion,population,flags"
    print("URL utilisée :", url)
    try:
        headers = {
            "User-Agent": "Mozilla/5.0",
            "Accept": "application/json"  # <- ajouté ici
        }
        rsp = requests.get(url, headers=headers, timeout=10)
        print("Status code API :", rsp.status_code)

        if rsp.status_code == 200:
            data = rsp.json()
            random.shuffle(data)
            return data[:n]
        else:
            print("Erreur API")
            return []
    except requests.exceptions.RequestException as e:
        print("Erreur de connexion API :", e)
        return []

    
def Ajouter_pays(pays_data):
    con = connect_db()
    cur = con.cursor()
    for pays in pays_data:
        try:
            nom = pays['name']['common']
            capitale = pays.get('capital', [''])[0]
            sous_region = pays.get('subregion', '')
            population = pays.get('population', 0)
            drapeau = pays['flags']['png']

            cur.execute("""
                INSERT INTO pays (nom, capitale, drapeau, sous_region, population)
                VALUES (%s, %s, %s, %s, %s)
                ON CONFLICT (nom) DO NOTHING
            """, (nom, capitale, drapeau, sous_region, population))

            print(f"{nom} enregistré avec succès.")
        except Exception as e:
            print(f"Erreur avec le pays {pays.get('name', {}).get('common', '???')} : {e}")
            con.rollback()
    con.commit()
    cur.close()
    con.close()
    
def affichage_pays():
    con = connect_db()
    cur = con.cursor()
    cur.execute("SELECT * FROM pays")
    for row in cur.fetchall():
        print(f"ID: {row[0]}, Nom: {row[1]}, Capitale: {row[2]}, Drapeau: {row[3]}, Sous-région: {row[4]}, Population: {row[5]}")
    cur.close()
    con.close()

# --- Exécution ---
# --- Exécution ---
creer_table_si_absente()

pays_liste = pays_aléatoire(10)
if pays_liste:
    Ajouter_pays(pays_liste)
    print("\n--- Liste des pays enregistrés ---")
    affichage_pays()
else:
    print("Aucun pays n’a été récupéré.")