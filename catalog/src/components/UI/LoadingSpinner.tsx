interface LoadingSpinnerProps {
    message?: string;
}

const LoadingSpinner = ({ message = "Cargando productos..." }: LoadingSpinnerProps) => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#641B2E] mx-auto mb-4"></div>
                <p className="text-[#641B2E] text-lg">{message}</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;