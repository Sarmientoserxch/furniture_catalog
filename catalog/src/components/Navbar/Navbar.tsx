import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {RiSofaFill} from "react-icons/ri";
import {navBarMenu} from "../../service/dataLinks.ts";
import {CiSearch} from "react-icons/ci";
import {MdMenu} from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";

type NavItem = {
    id: number;
    title: string;
    link: string;
};

const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    return (
        <>
            <nav className="bg-primary-950 shadow-xl border-b-4 border-primary-900 px-10">
                {/*logo de la imagen*/}
                <div className="container  flex justify-between items-center py-6">
                    <Link to="/" className="text-2xl flex items-center gap-3 font-serif font-bold">
                        <RiSofaFill className="text-primary-900 text-6xl drop-shadow-sm text-warm-600"/>
                        <div className="flex flex-col text-3xl text-warm-600 leading-tight">
                            <span className=" font-medium">Muebles</span>
                            <span className="font-medium -mt-1">Sarmiento Sanchez</span>
                        </div>
                    </Link>
                    {/*opciones de navegación*/}
                    <div className="hidden md:block ">
                        <ul className="flex items-center gap-8">
                            {
                                navBarMenu.map((item: NavItem) => {
                                    const handleClick = (e: React.MouseEvent) => {
                                        if (item.link === "/#contacto") {
                                            e.preventDefault();
                                            // Si estamos en home, hacer scroll
                                            if (window.location.pathname === "/") {
                                                document.getElementById("contacto")?.scrollIntoView({ 
                                                    behavior: "smooth" 
                                                });
                                            } else {
                                                // Si no estamos en home, navegar y luego hacer scroll
                                                navigate("/");
                                                setTimeout(() => {
                                                    document.getElementById("contacto")?.scrollIntoView({ 
                                                        behavior: "smooth" 
                                                    });
                                                }, 100);
                                            }
                                        }
                                    };

                                    return (<li key={item.id}>
                                        <Link 
                                            className="inline-block text-lg py-2 px-4 text-warm-600 hover:text-warm-400 hover:bg-primary-500 font-semibold transition-all duration-300 capitalize rounded-lg border-b-2 border-transparent hover:border-primary-700"
                                            to={item.link}
                                            onClick={handleClick}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>)
                                })
                            }
                        </ul>
                    </div>

                    {/*Iconos para la búsqueda navegación */}
                    <div className="flex items-center gap-4">
                        <button
                            className="text-warm-600 hover:bg-primary-800 hover:text-white rounded-full p-3 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                            <CiSearch className="text-2xl"/>
                        </button>
                    </div>

                    {/*Parte del movile*/}
                    <div className="md:hidden" onClick={() => {
                        setOpen(!open);
                    }}>
                        <MdMenu
                            className="text-4xl text-primary-800 cursor-pointer hover:text-secondary-800 transition-all duration-300 transform hover:scale-110"/>
                    </div>
                </div>
            </nav>

            {/*mobile nav*/}
            <ResponsiveMenu open={open}/>
        </>
    )
};

export default Navbar;