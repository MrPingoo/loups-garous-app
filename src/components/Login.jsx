import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../form.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login avec :", { email, password });
        navigate("/lancer-partie");
    };

    return (
        <div className="login-container">
            <h1 className="login-title">Loup-Garou</h1>
            <p className="login-subtitle">Connectez-vous pour accéder à votre compte</p>
            <form onSubmit={handleSubmit} className="login-form">
                <label htmlFor="email" className="email-label">Email</label>
                <input 
                    type="email" 
                    placeholder="Entrez votre email" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={(e) => e.target.placeholder = ""}
                    onBlur={(e) => e.target.placeholder = "Entrez votre email"}
                />
                <label htmlFor="password" className="password-label">Mot de passe</label>
                <input 
                    type="password" 
                    placeholder="Entrez votre mot de passe" 
                    required 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={(e) => e.target.placeholder = ""}
                    onBlur={(e) => e.target.placeholder = "Entrez votre mot de passe"}
                />
                <a href="#" className="forgot-password">Mot de passe oublié ?</a>
                <button type="submit" className="login-button">Connexion</button>
                <a href="#" className="new-account">Vous n'avez pas de compte ?</a>
            </form>
        </div>
    );
}

export default Login;