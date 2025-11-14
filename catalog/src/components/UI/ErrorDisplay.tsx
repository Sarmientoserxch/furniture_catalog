interface ErrorDisplayProps {
    error: string;
    onRetry?: () => void;
}

const ErrorDisplay = ({ error, onRetry }: ErrorDisplayProps) => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <div className="text-red-500 mb-4">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.996-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                </div>
                <p className="text-red-600 text-lg mb-4">Error: {error}</p>
                {onRetry && (
                    <button 
                        onClick={onRetry} 
                        className="bg-[#641B2E] text-white px-6 py-2 rounded-lg hover:bg-[#8A2D3B] transition-colors"
                    >
                        Reintentar
                    </button>
                )}
            </div>
        </div>
    );
};

export default ErrorDisplay;