'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { RiHeart3Line, RiEyeLine } from 'react-icons/ri';
import type { Product } from '@/types';
import { optimizeCloudinaryUrl } from '@/lib/utils';
import WhatsAppButton from './WhatsAppButton';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  // Obtener la imagen principal
  const primaryImage = product.images?.find((img) => img.is_primary) || product.images?.[0];
  const imageUrl = primaryImage
    ? optimizeCloudinaryUrl(primaryImage.url, { width: 600, quality: 85 })
    : '/placeholder-furniture.jpg';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
    >
      {/* Imagen del producto */}
      <Link href={`/productos/${product.slug}`} className="block relative h-64 overflow-hidden bg-gray-100">
        <Image
          src={imageUrl}
          alt={primaryImage?.alt_text || product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority={priority}
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.is_featured && (
            <span className="bg-warm-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              Destacado
            </span>
          )}
          <span className="bg-primary-900/90 text-white px-3 py-1 rounded-full text-xs font-medium capitalize">
            {product.category}
          </span>
        </div>

        {/* Overlay con acciones */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 right-4 flex gap-2">
            <Link
              href={`/productos/${product.slug}`}
              className="bg-white/90 hover:bg-white text-primary-900 p-2 rounded-full transition-all transform hover:scale-110"
            >
              <RiEyeLine className="text-xl" />
            </Link>
            <button className="bg-white/90 hover:bg-white text-primary-900 p-2 rounded-full transition-all transform hover:scale-110">
              <RiHeart3Line className="text-xl" />
            </button>
          </div>
        </div>
      </Link>

      {/* Contenido */}
      <div className="p-6">
        <Link href={`/productos/${product.slug}`}>
          <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-primary-700 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <p className="text-secondary-800/70 mb-4 text-sm leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Características destacadas */}
        {product.features && product.features.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-1">
            {product.features.slice(0, 3).map((feature, index) => (
              <span
                key={index}
                className="text-xs bg-warm-100 text-secondary-800 px-2 py-1 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        )}

        {/* Botón de WhatsApp */}
        <WhatsAppButton
          productName={product.name}
          className="w-full text-sm py-2.5"
        />
      </div>
    </motion.div>
  );
}
