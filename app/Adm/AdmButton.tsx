"use client";

export const AdmButton = () => {
    return (
        <button onClick={()=>{
            if (typeof window !== "undefined") {
                if(localStorage.getItem("auth")) {
                    window.location.href = '/Adm';
                }else {
                    alert("Você não está logado");
                }
            }
        
        }}>Página do Adm</button>
    );
}