'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseLine, RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import type { ProductImage } from '@/types';
import { optimizeCloudinaryUrl } from '@/lib/utils';

interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sortedImages = [...images].sort((a, b) => a.order - b.order);
  const selectedImage = sortedImages[selectedIndex];

  const handlePrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? sortedImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === sortedImages.length - 1 ? 0 : prev + 1));
  };

  if (!sortedImages.length) {
    return (
      <div className="w-full h-96 bg-gray-200 rounded-2xl flex items-center justify-center">
        <p className="text-gray-500">No hay imágenes disponibles</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Imagen principal */}
      <div
        className="relative h-96 md:h-[500px] bg-gray-100 rounded-2xl overflow-hidden cursor-pointer group"
        onClick={() => setIsModalOpen(true)}
      >
        <Image
          src={optimizeCloudinaryUrl(selectedImage.url, { width: 1200, quality: 90 })}
          alt={selectedImage.alt_text || productName}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          priority
        />

        {/* Indicador de zoom */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <div className="bg-white/90 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <p className="text-sm font-semibold text-primary-900">Click para ampliar</p>
          </div>
        </div>

        {/* Navegación */}
        {sortedImages.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary-900 p-2 rounded-full transition-all transform hover:scale-110 opacity-0 group-hover:opacity-100"
            >
              <RiArrowLeftSLine className="text-2xl" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary-900 p-2 rounded-full transition-all transform hover:scale-110 opacity-0 group-hover:opacity-100"
            >
              <RiArrowRightSLine className="text-2xl" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {sortedImages.length > 1 && (
        <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
          {sortedImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedIndex(index)}
              className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all ${
                index === selectedIndex
                  ? 'border-primary-900 shadow-lg scale-105'
                  : 'border-gray-200 hover:border-primary-700'
              }`}
            >
              <Image
                src={optimizeCloudinaryUrl(image.url, { width: 200, quality: 70 })}
                alt={image.alt_text || `${productName} - imagen ${index + 1}`}
                fill
                sizes="150px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Modal de imagen completa */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-all z-10"
            >
              <RiCloseLine className="text-3xl" />
            </button>

            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl max-h-[90vh] w-full h-full"
            >
              <Image
                src={optimizeCloudinaryUrl(selectedImage.url, { width: 1920, quality: 95 })}
                alt={selectedImage.alt_text || productName}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>

            {/* Navegación en modal */}
            {sortedImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevious();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all"
                >
                  <RiArrowLeftSLine className="text-3xl" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all"
                >
                  <RiArrowRightSLine className="text-3xl" />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
