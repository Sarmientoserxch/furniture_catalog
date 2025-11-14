export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-warm-200 border-t-primary-900 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-primary-700 rounded-full animate-spin-slow"></div>
      </div>
    </div>
  );
}

// Agregar animación custom en globals.css si es necesario
