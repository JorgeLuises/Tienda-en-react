//Herramienta que ayuda al navegador a solo renderizar un componente de react y no todos los componentes existentes dentro de las peticiones
import { Link } from "react-router-dom";
import PageSection from "../components/PageSecction";

export default function HomePage () {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center">Welcome to DummyJson Store</h1>
                <PageSection>
                    <h2>Vendemos de todo</h2>
                </PageSection>
                <PageSection>
                    <div className="w-full grid grid-cols-2 gap-2">
                        <img src="https://tse1.mm.bing.net/th?id=OIP.3vu_8KkZSeZfY2LaXgYYcgHaHa&pid=Api&P=0&h=180" alt="" />
                        <p>hola soy texto</p>
                    </div>
                </PageSection>
            </div>
    );
}