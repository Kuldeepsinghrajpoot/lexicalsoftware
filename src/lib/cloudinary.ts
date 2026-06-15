// Helper for building Cloudinary delivery URLs.
//
// Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME in your environment (see
// .env.example) to your Cloudinary cloud name. Once set, store images in
// your Cloudinary media library and reference them by their public ID
// (e.g. "projects/lexical-dashboard") in src/data/*.ts.
//
// cloudinaryUrl("projects/lexical-dashboard") returns a full delivery URL
// with sensible defaults (auto format + quality). Pass transformation
// options to customize size/cropping.

interface CloudinaryOptions {
  width?: number;
  height?: number;
  crop?: "fill" | "fit" | "scale" | "thumb";
}

export function cloudinaryUrl(
  publicId: string,
  options: CloudinaryOptions = {}
): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  if (!cloudName) {
    // No Cloudinary configured yet \u2014 callers should fall back to a local
    // placeholder image or styled empty state.
    return "";
  }

  const transformations = ["f_auto", "q_auto"];
  if (options.width) transformations.push(`w_${options.width}`);
  if (options.height) transformations.push(`h_${options.height}`);
  if (options.crop) transformations.push(`c_${options.crop}`);

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transformations.join(
    ","
  )}/${publicId}`;
}

// True once Cloudinary is configured, so components can decide whether to
// render an <Image> or a placeholder block.
export function isCloudinaryConfigured(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME);
}
