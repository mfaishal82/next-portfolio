'use client';

import Image from 'next/image';
import { optimizeCloudinaryImage } from '@/utils/imageOptimizer';
import { useState } from 'react';

/**
 * OptimizedImage Component
 * 
 * Wrapper component yang menggabungkan Next.js Image component dengan Cloudinary optimization.
 * Automatically handles:
 * - WebP format conversion dengan fallback
 * - Image optimization
 * - Responsive sizing
 * - Loading states
 * - Placeholder blur
 * 
 * @param {Object} props
 * @param {string} props.src - Cloudinary image URL
 * @param {string} props.alt - Alt text untuk accessibility
 * @param {number} props.width - Image width (required untuk Next.js Image)
 * @param {number} props.height - Image height (required untuk Next.js Image)
 * @param {string} props.className - Tailwind classes
 * @param {boolean} props.priority - Disable lazy loading (untuk above-the-fold images)
 * @param {string} props.objectFit - CSS object-fit value (contain, cover, fill, etc)
 * @param {string} props.objectPosition - CSS object-position value
 * @param {number} props.quality - Image quality 1-100 (default: 80)
 * @param {string} props.sizes - Responsive image sizes
 * @param {boolean} props.showPlaceholder - Show blur placeholder (default: true)
 * @param {Function} props.onLoad - Callback saat image selesai load
 * @param {Function} props.onError - Callback saat image error
 * 
 * @example
 * // Basic usage
 * <OptimizedImage
 *   src="https://res.cloudinary.com/..."
 *   alt="My image"
 *   width={800}
 *   height={600}
 * />
 * 
 * @example
 * // With priority (hero image)
 * <OptimizedImage
 *   src="https://res.cloudinary.com/..."
 *   alt="Hero"
 *   width={1200}
 *   height={800}
 *   priority
 *   quality={85}
 * />
 */
export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  objectFit = 'cover',
  objectPosition = 'center',
  quality = 80,
  sizes,
  showPlaceholder = true,
  onLoad,
  onError,
  ...rest
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Optimize the image URL
  const optimizedSrc = optimizeCloudinaryImage(src, { quality });

  const handleLoadingComplete = (result) => {
    setIsLoading(false);
    if (onLoad) onLoad(result);
  };

  const handleError = (err) => {
    setError(true);
    setIsLoading(false);
    if (onError) onError(err);
  };

  // Fallback jika tidak ada width/height
  if (!width || !height) {
    console.warn(
      'OptimizedImage: width dan height diperlukan. Menggunakan default 800x600.'
    );
    return (
      <OptimizedImage
        src={src}
        alt={alt}
        width={800}
        height={600}
        className={className}
        priority={priority}
        quality={quality}
        {...rest}
      />
    );
  }

  // Error fallback
  if (error) {
    return (
      <div
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ aspectRatio: `${width}/${height}` }}
      >
        <span className="text-gray-500 text-sm">Failed to load image</span>
      </div>
    );
  }

  return (
    <div className="relative" style={{ aspectRatio: `${width}/${height}` }}>
      <Image
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        sizes={sizes}
        className={`${className} ${
          isLoading ? 'blur-md' : 'blur-0'
        } transition-all duration-300`}
        onLoadingComplete={handleLoadingComplete}
        onError={handleError}
        placeholder={showPlaceholder ? 'empty' : 'blur'}
        style={{
          objectFit,
          objectPosition,
        }}
        {...rest}
      />

      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded" />
      )}
    </div>
  );
}

/**
 * ResponsiveOptimizedImage Component
 * 
 * Advanced component untuk responsive images dengan srcSet otomatis
 */
export function ResponsiveOptimizedImage({
  src,
  alt,
  breakpoints = { mobile: 400, tablet: 800, desktop: 1200 },
  height = 600,
  className = '',
  priority = false,
  quality = 80,
  ...rest
}) {
  const defaultSizes =
    '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';

  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={breakpoints.desktop}
      height={height}
      sizes={defaultSizes}
      className={className}
      priority={priority}
      quality={quality}
      {...rest}
    />
  );
}

/**
 * ProjectImageGallery Component
 * 
 * Component khusus untuk menampilkan gallery images dari project
 */
export function ProjectImageGallery({
  images = [],
  projectTitle = 'Project',
  width = 800,
  height = 600,
  className = '',
}) {
  if (!images || images.length === 0) {
    return (
      <div className="bg-gray-200 rounded-lg p-4 text-center">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 gap-4 ${className}`}>
      {images.map((img, idx) => (
        <OptimizedImage
          key={idx}
          src={img}
          alt={`${projectTitle} screenshot ${idx + 1}`}
          width={width}
          height={height}
          quality={80}
          className="rounded-lg shadow-lg w-full h-auto"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 70vw"
        />
      ))}
    </div>
  );
}