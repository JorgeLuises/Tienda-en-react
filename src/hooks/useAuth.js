import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function useAuth() {
    const navigate = useNavigate();//Hacer nota del useEffect con esta variable
    const [token, setToken] = useState('');

    useEffect(() => {
        const tkn = localStorage.getItem("token");

        setToken(tkn);

        if(!tkn) {
            toast.error("Debes inicar sesión de nuevo");
            navigate("/login");
        }
    }, [navigate]);

    return token;
}