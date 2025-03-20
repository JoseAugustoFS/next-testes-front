"use client";

import React, { useState } from "react";

export const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Usuário" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
            <button onClick={()=>{console.log(username);console.log(password)}} >Entrar</button>
        </div>
    );
};