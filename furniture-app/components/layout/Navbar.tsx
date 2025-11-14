'use client';

import Link from 'next/link';
import { useState } from 'react';
import { RiSofaFill, RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
  { id: 1, title: 'Inicio', link: '/' },
  { id: 2, title: 'Salas', link: '/categoria/sala' },
  { id: 3, title: 'Comedores', link: '/categoria/comedor' },
  { id: 4, title: 'Alcobas', link: '/categoria/alcoba' },
  { id: 5, title: 'Decoración', link: '/categoria/decoracion' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-primary-950 shadow-xl border-b-4 border-primary-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center py-4 sm:py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <RiSofaFill className="text-5xl sm:text-6xl text-warm-600 drop-shadow-lg transition-transform group-hover:scale-110" />
            <div className="flex flex-col text-2xl sm:text-3xl text-warm-600 leading-tight">
              <span className="font-medium">Muebles</span>
              <span className="font-medium -mt-1">Sarmiento Sanchez</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 lg:gap-8">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link}
                    className="inline-block text-base lg:text-lg py-2 px-4 text-warm-600 hover:text-warm-400 hover:bg-primary-800 font-semibold transition-all duration-300 capitalize rounded-lg border-b-2 border-transparent hover:border-warm-600"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-4xl text-warm-600 hover:text-warm-400 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary-900 border-t border-primary-800"
          >
            <ul className="container mx-auto px-4 py-4 space-y-2">
              {menuItems.map((item) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: item.id * 0.1 }}
                >
                  <Link
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 px-4 text-warm-600 hover:bg-primary-800 rounded-lg font-semibold transition-all"
                  >
                    {item.title}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
