/**
 * Helper function untuk mengoptimalkan URL gambar Cloudinary
 * Menggunakan format WebP dengan fallback otomatis ke format asli jika browser tidak support
 * 
 * @param {string} url - URL gambar dari Cloudinary
 * @param {Object} options - Opsi tambahan
 * @param {number} options.width - Lebar gambar (opsional)
 * @param {number} options.height - Tinggi gambar (opsional)
 * @param {number} options.quality - Kualitas kompresi 1-100 (default: 80)
 * @returns {string} - URL gambar yang sudah dioptimasi
 */
export const optimizeCloudinaryImage = (url, options = {}) => {
  if (!url || !url.includes('cloudinary')) {
    return url;
  }

  const { width = null, height = null, quality = 80 } = options;

  // Split URL menjadi parts
  const parts = url.split('/image/upload/');
  if (parts.length !== 2) return url;

  const [baseUrl, imagePath] = parts;
  
  // Build transformation parameters
  let transformations = [];
  
  // Format WebP dengan fallback otomatis
  transformations.push('f_auto');
  
  // Kualitas kompresi
  transformations.push(`q_${quality}`);
  
  // Dimensi jika ada
  if (width && height) {
    transformations.push(`w_${width},h_${height},c_fill`);
  } else if (width) {
    transformations.push(`w_${width},c_scale`);
  } else if (height) {
    transformations.push(`h_${height},c_scale`);
  }

  // Reconstruct URL
  const transformationString = transformations.join('/');
  return `${baseUrl}/image/upload/${transformationString}/${imagePath}`;
};

/**
 * Batch convert multiple image URLs
 * @param {Array<string>} urls - Array dari URL gambar
 * @param {Object} options - Opsi tambahan (sama seperti optimizeCloudinaryImage)
 * @returns {Array<string>} - Array URL yang sudah dioptimasi
 */
export const optimizeMultipleImages = (urls, options = {}) => {
  return urls.map(url => optimizeCloudinaryImage(url, options));
};

export default optimizeCloudinaryImage;