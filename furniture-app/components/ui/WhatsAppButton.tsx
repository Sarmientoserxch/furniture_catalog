'use client';

import { RiWhatsappFill } from 'react-icons/ri';
import { generateWhatsAppUrl } from '@/lib/utils';

interface WhatsAppButtonProps {
  productName?: string;
  phone?: string;
  className?: string;
  variant?: 'floating' | 'inline';
}

export default function WhatsAppButton({
  productName,
  phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '573144766493',
  className = '',
  variant = 'inline',
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const message = productName
      ? `Hola, estoy interesado en el mueble "${productName}". ¿Podrías darme más información?`
      : 'Hola, me gustaría obtener más información sobre sus muebles.';

    const url = generateWhatsAppUrl(phone, message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (variant === 'floating') {
    return (
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 z-40 animate-bounce"
        aria-label="Contactar por WhatsApp"
      >
        <RiWhatsappFill className="text-3xl" />
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg ${className}`}
    >
      <RiWhatsappFill className="text-xl" />
      Consultar por WhatsApp
    </button>
  );
}
