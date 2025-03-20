import React from "react";
import LoginPage from "./Login/LoginPage";
import { AdmButton } from "./Adm/AdmButton";

export const metadata = {
  title: "Testes Automatizados",
};

export default function Page() {
  return (
    <div>
      <LoginPage/>
      <AdmButton/>
    </div>
  );
}
