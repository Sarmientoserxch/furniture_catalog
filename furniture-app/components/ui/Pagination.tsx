'use client';

import Link from 'next/link';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
}

export default function Pagination({ currentPage, totalPages, basePath }: PaginationProps) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const showPages = 5; // Número de páginas a mostrar

    if (totalPages <= showPages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav className="flex items-center justify-center gap-2 mt-12" aria-label="Paginación">
      {/* Botón anterior */}
      {currentPage > 1 ? (
        <Link
          href={`${basePath}?page=${currentPage - 1}`}
          className="flex items-center gap-1 px-4 py-2 bg-white border-2 border-primary-900 text-primary-900 rounded-lg font-semibold hover:bg-primary-900 hover:text-white transition-colors"
        >
          <RiArrowLeftSLine className="text-xl" />
          <span className="hidden sm:inline">Anterior</span>
        </Link>
      ) : (
        <button
          disabled
          className="flex items-center gap-1 px-4 py-2 bg-gray-200 text-gray-400 rounded-lg font-semibold cursor-not-allowed"
        >
          <RiArrowLeftSLine className="text-xl" />
          <span className="hidden sm:inline">Anterior</span>
        </button>
      )}

      {/* Números de página */}
      <div className="hidden sm:flex items-center gap-2">
        {pageNumbers.map((page, index) => {
          if (page === '...') {
            return (
              <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-400">
                ...
              </span>
            );
          }

          const pageNum = page as number;
          const isActive = pageNum === currentPage;

          return (
            <Link
              key={pageNum}
              href={`${basePath}?page=${pageNum}`}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                isActive
                  ? 'bg-primary-900 text-white shadow-lg'
                  : 'bg-white border-2 border-primary-200 text-primary-900 hover:border-primary-900 hover:bg-primary-50'
              }`}
            >
              {pageNum}
            </Link>
          );
        })}
      </div>

      {/* Indicador móvil */}
      <div className="sm:hidden px-4 py-2 bg-white border-2 border-primary-200 rounded-lg font-semibold text-primary-900">
        {currentPage} / {totalPages}
      </div>

      {/* Botón siguiente */}
      {currentPage < totalPages ? (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="flex items-center gap-1 px-4 py-2 bg-white border-2 border-primary-900 text-primary-900 rounded-lg font-semibold hover:bg-primary-900 hover:text-white transition-colors"
        >
          <span className="hidden sm:inline">Siguiente</span>
          <RiArrowRightSLine className="text-xl" />
        </Link>
      ) : (
        <button
          disabled
          className="flex items-center gap-1 px-4 py-2 bg-gray-200 text-gray-400 rounded-lg font-semibold cursor-not-allowed"
        >
          <span className="hidden sm:inline">Siguiente</span>
          <RiArrowRightSLine className="text-xl" />
        </button>
      )}
    </nav>
  );
}
