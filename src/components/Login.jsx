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
        <div className="form">
            <div className="login-container">
                <h1 className="login-title">Connexion</h1>
                <form onSubmit={handleSubmit} className="login-form">
                    <input type="email" placeholder="Entrez votre email" required value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Entrez votre mot de passe" required value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit" className="login-button">Se connecter</button>
                </form>
                <a href="#" className="forgot-password">Mot de passe oublié ?</a>
            </div>
        </div>
    );
}

export default Login;