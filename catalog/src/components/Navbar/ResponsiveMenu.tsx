import {motion,AnimatePresence} from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import {navBarMenu} from "../../service/dataLinks.ts";

type NavItem = {
    id: number;
    title: string;
    link: string;
};

type ResponsiveMenuProps = {
    open: boolean;
};

function ResponsiveMenu({open}: ResponsiveMenuProps) {
    const navigate = useNavigate();
    return <AnimatePresence>
        {
            open &&
            <motion.div
                initial={{opacity: 0, y:-100}}
                animate={{opacity: 1, y:0}}
                transition={{duration: 0.3}}
            exit={{opacity: 0, y: -100}}
            className="absolute top-20 left-0 w-full h-screen z-20"
                    >
            <div className="text-xl font-semibold bg-gradient-to-br from-red-800 to-red-900 text-white py-12 m-6 rounded-3xl shadow-2xl backdrop-blur-sm">
                <ul className="flex flex-col justify-center items-center gap-8">
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

                            return (
                                <li key={item.id} className="w-full text-center">
                                    <Link 
                                        className="block py-3 px-8 hover:text-orange-300 hover:bg-red-700 transition-all duration-300 capitalize rounded-xl border border-transparent hover:border-orange-300 transform hover:scale-105"
                                        to={item.link}
                                        onClick={handleClick}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            </motion.div>
        }
    </AnimatePresence>
}

export default ResponsiveMenu;