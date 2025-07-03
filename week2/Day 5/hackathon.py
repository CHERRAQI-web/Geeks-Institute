# from flask import Flask, request, jsonify
# import json
# import os
# from datetime import date

# app = Flask(__name__)
# FICHIER = "habitudes.json"

# # Charger les données depuis le fichier
# def charger_donnees():
#     if os.path.exists(FICHIER):
#         with open(FICHIER, "r", encoding="utf-8") as f:
#             return json.load(f)
#     return {}

# # Sauvegarder les données
# def sauvegarder_donnees(data):
#     with open(FICHIER, "w", encoding="utf-8") as f:
#         json.dump(data, f, ensure_ascii=False, indent=4)

# # ➤ Voir toutes les habitudes
# @app.route("/habitudes", methods=["GET"])
# def get_habitudes():
#     data = charger_donnees()
#     return jsonify(data)

# # ➤ Ajouter une nouvelle habitude
# @app.route("/habitudes", methods=["POST"])
# def ajouter_habitude():
#     data = charger_donnees()
#     habitude = request.json.get("habitude")

#     if not habitude:
#         return jsonify({"erreur": "Nom de l'habitude manquant"}), 400

#     if habitude not in data:
#         data[habitude] = []
#         sauvegarder_donnees(data)
#         return jsonify({"message": "Habitude ajoutée"}), 201
#     else:
#         return jsonify({"message": "Cette habitude existe déjà"}), 200

# # ➤ Marquer une habitude comme faite aujourd’hui
# @app.route("/habitudes/<habitude>/faite", methods=["POST"])
# def marquer_faite(habitude):
#     data = charger_donnees()
#     aujourd_hui = str(date.today())

#     if habitude in data:
#         if aujourd_hui not in data[habitude]:
#             data[habitude].append(aujourd_hui)
#             sauvegarder_donnees(data)
#             return jsonify({"message": f"L'habitude '{habitude}' est enregistrée pour aujourd'hui."})
#         else:
#             return jsonify({"message": "Déjà enregistrée aujourd'hui."})
#     else:
#         return jsonify({"erreur": "Habitude non trouvée"}), 404

# if __name__ == "__main__":
#     app.run(debug=True)
