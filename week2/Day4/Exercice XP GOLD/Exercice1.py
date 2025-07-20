import psycopg2
from dotenv import load_dotenv
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

def lire(nom,mdp):
    con=connect_db()
    cur=con.cursor()
    cur.execute("select * from utilisateurs where nom =%s and mot_de_passe=%s",(nom,mdp))
    utilisateur=cur.fetchone()
    cur.close()
    con.close()
    return utilisateur is not None

def inscrit(nom,mdp):
    con=connect_db()
    cur=con.cursor()
    try:
        cur.execute("insert into utilisateurs (nom,mot_de_passe)values(%s,%s)",(nom,mdp))
        con.commit()
        print(f"utilisateur{nom} est inscrit avec succès")
    except psycopg2.errors.UniqueViolation:
        print("ce nom est deja exist")   
        con.rollback()
    finally:
        cur.close()
        con.close()


#test:
inscrit("aziza", "123")
lire("aziza", "123")
# dic={"aziza":"123","meryem":"567","Louis":"098"}
# logged_in=None
# while True:
#     saisie=input("saisie exit ou login :")
#     if saisie=='exit':
#         break
#     elif saisie=='login':
#         nom=input("saisie votre nom :")
#         mdp=input("saisie votre mot de passe :")
#         if nom in dic and dic[nom]==mdp :
#             print("vous êtes maintenant connecté")
#             logged_in=nom
#             break
#         else:
#             print("Utilisateur inconnu ou mot de passe incorrect.")
#             reponse = input("Souhaitez-vous vous inscrire ? (oui/non) : ").lower()
#             if reponse=='oui':
#                 while True:
#                     n_name=input("saisie votre nom: ")
#                     if n_name in dic:
#                         print("le nom saisie est deja exist ")
                        
#                     elif n_name not in dic:
#                         motd=input("saisie votre mot de passe : ")
#                         dic[n_name] = motd
#                         print("Inscription réussie ! Vous pouvez maintenant vous connecter.")
#                         logged_in = n_name
#                         break
#                 break    
#             else:
#                print("Retour au menu principal...\n")
#     else:
#         print("Commande inconnue. Tapez 'login' ou 'exit'.")
    
# if logged_in:
#     print(f"\nUtilisateur actuellement connecté : {logged_in}")