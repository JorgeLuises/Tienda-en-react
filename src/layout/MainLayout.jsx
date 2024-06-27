import {Link, Outlet} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const links = [
    {to: '/', label: "Home", authRequired: false},
    {to: '/productos', label: 'Productos', authRequired: true},
    {to: '/login', label: 'Login', authRequired: false}
];

export default function MainLayout () {
    const isAuth = !!localStorage.getItem ("token");//Hacer nota de esto

    const navigate = useNavigate();

    function handleLogout () {
        localStorage.removeItem("token");
        navigate("/");
    }

    return (
        <main className="h-full min-h-dvh">
            <nav className="bg-white/50 flex flex-row justify-around text-lg p-1 font-semibold">
                {
                    links.map((link) => {
                        if (link.authRequired && !isAuth) return null;

                        if(isAuth && link.to === '/login') return null;//Hacer nota de esto
                        
                        return (
                        <Link key={`link-${link.to}`} to={link.to}
                        className="hover:bg-black/50 w-full h-full text-center p-2 cursor-pointer">
                        {link.label}
                        </Link>)
                    })
                }
                {isAuth && (
                    <button className="hover:bg-black/50 w-full h-full text-center p-2 cursor-pointer"
                    onClick={handleLogout}>Salir</button>
                )}
            </nav>
            <Outlet />
        </main>
    )
}