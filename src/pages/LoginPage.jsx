import { toast } from "sonner";
import { login } from "../api";
import { useForm } from "react-hook-form";
import clsx from "clsx";
//Librería para hacer la navegación entre paginas del sitio web
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage () {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const {
        handleSubmit,
        register,
        formState: {errors},
        setError
    } = useForm();

    async function onSubmit(data) {
        try {
                const token = await login(data.username, data.password);

                if(token) {
                    window.localStorage.setItem('token', token);//Almacenar el token en el localStorage
                    toast.success('Bienvenido');
                    navigate("/productos");
                } else {
                    toast.error('Usuario o contraseña incorrectos')
                    setError("root.credentials", {type: "manual", message: 'Usuario o contraseña invalido'}) //Marcar error del formulario
                }

        } catch(error) {
            toast.error("Error al iniciar sesión");
            console.error("[login error]", error);
        }
    }

    function handleShowHidePassword () {
        setShowPassword(!showPassword);
    }

    return (
        <main className="flex justify-center  flex-col items-center w-full min-h-dvh gap-4">
            <h1 className="text-4xl font-bold text-center">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={clsx("border border-white/50 rounded p-4 flex flex-col gap-4 max-w-sm w-full", {"border-red-500": errors.root?.credentials})}>
                <input type="text" {...register('username', {
                    required: {value: true, message: 'Nombre del usuario requerido'}
                })} className="border border-white/50 text-black rounded p-2"/>
                <input type={showPassword ? "text" : "password"} {...register('password', {
                    required: {value: true, message: 'contraseña requerida'}
                })} className="border border-white/50 text-black rounded p-2"/>

                <span className="text-xs text-white/50 cursor-pointer hover:text-white" onClick={handleShowHidePassword}>
                    {showPassword ? "🙈 Ocultar" : "🐵 Mostrar"} password
                </span>

                <button className="text-black bg-green-600 p-3 font-semibold">INGRESAR</button>

                {errors.root?.credentials && (<p className="text-red-500 text-center">Credenciales invalidas</p>)}
            </form>
        </main>
    )
}