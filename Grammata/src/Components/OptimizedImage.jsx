import React, { useState } from 'react';

const OptimizedImage = ({ 
    src, 
    alt, 
    className = "", 
    placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3C/svg%3E",
    ...props 
}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const handleLoad = () => {
        setIsLoading(false);
    };

    const handleError = () => {
        setIsLoading(false);
        setHasError(true);
    };

    return (
        <div className={`relative ${className}`}>
            {/* Placeholder/Error State */}
            {(isLoading || hasError) && (
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                        <div className="text-4xl mb-2">📄</div>
                        <p className="text-gray-600 text-sm">{alt}</p>
                    </div>
                </div>
            )}
            
            {/* Actual Image */}
            <img
                src={hasError ? placeholder : src}
                alt={alt}
                className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                loading="lazy"
                onLoad={handleLoad}
                onError={handleError}
                {...props}
            />
        </div>
    );
};

export default OptimizedImage; 