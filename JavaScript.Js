// --- Script à ajouter pour la connexion universelle ---

// 1. On initialise la connexion avec la base de données (Firebase)
const firebaseConfig = {
    databaseURL: "https://ton-projet.firebaseio.com"
};

// 2. FONCTION POUR ENREGISTRER (Mise à jour pour tout le monde)
function saveGlobalConfig() {
    const newURL = document.getElementById('webhookInput').value;
    
    // Au lieu de localStorage, on envoie au serveur
    firebase.database().ref('config/').set({
        webhookURL: newURL,
        lastUpdate: Date.now()
    }).then(() => {
        alert("✅ MISE À JOUR UNIVERSELLE RÉUSSIE ! Tous les utilisateurs utilisent maintenant ce bot.");
    });
}

// 3. FONCTION DE RÉCEPTION (Tout le monde reçoit la mise à jour)
firebase.database().ref('config/webhookURL').on('value', (snapshot) => {
    currentWebhook = snapshot.val();
    console.log("Mise à jour reçue du serveur : " + currentWebhook);
});
