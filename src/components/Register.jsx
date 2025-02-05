import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "../form.css";

const Register = () => {
    // États pour stocker les valeurs des champs du formulaire
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Gestion de la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Nom:", nom);
        console.log("Prénom:", prenom);
        console.log("Email:", email);
        console.log("Mot de passe:", password);
        // Ici, vous pouvez ajouter la logique d'inscription (ex: appel API)
        navigate("/lancer-partie");
    };

    return (
        <div className="form">
            <div className="register-container">
                <h1 className="register-title">Créer un compte</h1>
                <form className="register-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Nom"
                        value={nom}
                        onChange={(e) => setNom(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Prénom"
                        value={prenom}
                        onChange={(e) => setPrenom(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="register-button">S'inscrire</button>
                </form>
                <a href="javascript;" className="login-link">Déjà un compte ? Connectez-vous</a>
            </div>
        </div>
    );
};

export default Register;