export class LoginController {
    login(username: string, password: string): boolean {
        if (username === "adm" && password === "senha") {
            localStorage.setItem("auth", JSON.stringify({ username }));
            return true;
        }
        return false;
    }

    logout() {
        localStorage.removeItem("auth");
    }

    isAuthenticated(): boolean {
        return localStorage.getItem("auth") !== null;
    }
}