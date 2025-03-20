"use client";

import { LoginController } from "./LoginController";
import { LoginForm } from "./LoginForm";

export default function LoginPage() {
    const controller = new LoginController();
    return (
            <LoginForm controller={controller} />
    );
}