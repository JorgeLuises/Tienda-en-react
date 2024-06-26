//Herramienta que ayuda al navegador a solo renderizar un componente de react y no todos los componentes existentes dentro de las peticiones
import { Link } from "react-router-dom";

export default function HomePage () {
    return (
        <div className="flex justify-center  flex-col items-center w-full min-h-dvh gap-8">
            <h1 className="text-4xl font-bold text-center">Welcome to DummyJson Store</h1>
            <div className="flex flex-col p-4 gap-4 max-w-sm w-full items-center">
                <Link to="/login" className="hover:border-2 hover:border-cyan-700 hover:rounded text-xl font-bold w-full text-center p-2">Login</Link>
                <Link to="/productos" className="hover:border-2 hover:border-cyan-700 hover:rounded text-xl font-bold w-full text-center p-2">Productos</Link>
                <Link to="/productos/:id" className="hover:border-2 hover:border-cyan-700 hover:rounded text-xl font-bold w-full text-center p-2">Producto</Link>
            </div>
        </div>
    );
}