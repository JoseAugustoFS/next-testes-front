import React from "react";
import { LoginController } from "../Login/LoginController";

type LogoutButtonProps = {
    controller: LoginController;
};

export const LogoutButton: React.FC<LogoutButtonProps> = ({ controller }) => {
    return <button onClick={() => {
        if (typeof window !== "undefined") {
            if(localStorage.getItem("auth")) {
                controller.logout();
            } else {
                alert("Você não está logado");
            }
        }
        }
    }>Sair</button>;
};