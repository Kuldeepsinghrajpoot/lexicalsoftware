import Image from "next/image";
import { cloudinaryUrl, isCloudinaryConfigured } from "@/lib/cloudinary";
import { cn } from "@/lib/utils";

interface RemoteImageProps {
  publicId: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fallbackLabel?: string;
}

// Renders an image from Cloudinary if NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is
// configured and a publicId is provided. Otherwise renders a styled
// placeholder block (matching the rest of the site's empty states) so
// layouts don't break before real images are uploaded.
export default function RemoteImage({
  publicId,
  alt,
  width = 800,
  height = 600,
  className,
  fallbackLabel,
}: RemoteImageProps) {
  if (!publicId || !isCloudinaryConfigured()) {
    return (
      <div
        className={cn(
          "flex h-full w-full items-center justify-center bg-base",
          className
        )}
      >
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-dim">
          {fallbackLabel || "Image placeholder"}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={cloudinaryUrl(publicId, { width, height, crop: "fill" })}
      alt={alt}
      width={width}
      height={height}
      className={cn("h-full w-full object-cover", className)}
    />
  );
}
