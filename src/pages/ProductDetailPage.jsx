import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProduct } from "../api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function PorductDetailPage() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            toast.error('Debes iniciar sesión para poder ver el producto')
            navigate("/login");
            return;
        }

        getProduct(id)
        .then((prod) => {
            setProduct(prod);
        })
        .catch((error) => {
            toast.error('Producto inexistente');
            console.error("[getProduct error]" , error)
        });
    }, [id]);

    return (
        <main className="p-4 w-full text-center min-h-dvh">
            <h1 className="font-bold text-4xl mb-4">{product.title} </h1>
            <div key= {`prod-${product.id}`} className="flex flex-col justify-center items-center bg-white/10 gap-2">
                <img src={product.thumbnail} alt={product.title} className="h-[40%] w-[30%]"/>
                <p className="text-lg font-bold text-white">Descripción: <span className="text-sm font-medium text-slate-50">{product.description}</span></p>
                <div className="flex gap-8">
                    <p className="text-xl font-bold text-white">Precio: <span className="text-lg font-medium text-slate-50">{product.price}</span></p>
                    <p className="text-xl font-bold text-white">Piezas disponibles: <span className="text-lg font-medium text-slate-50">{product.stock}</span></p>
                </div>
                <div className="flex gap-8 p-4">
                    <button className="bg-slate-100 text-black rounded-lg p-3 font-medium hover:bg-cyan-700 hover:text-white">Comprar ahora</button>
                    <button className="bg-slate-100 text-black rounded-lg p-3 font-medium hover:bg-cyan-700 hover:text-white">Agregar al carrito</button>           
                </div>
            </div>
        </main>
    )
}