import Image from "next/image";
import { cloudinaryUrl, isCloudinaryConfigured } from "@/lib/cloudinary";
import { cn } from "@/lib/utils";

interface AvatarProps {
  name: string;
  cloudinaryId?: string;
  src?: string;
  size?: number;
  className?: string;
}

export default function Avatar({
  name,
  cloudinaryId,
  src,
  size = 80,
  className,
}: AvatarProps) {
  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("");

  if (src) {
    return (
      <div
        className={cn(
          "overflow-hidden rounded-full border border-panel-border",
          className
        )}
        style={{ width: size, height: size }}
      >
        <Image
          src={src}
          alt={name}
          width={size * 2}
          height={size * 2}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  if (cloudinaryId && isCloudinaryConfigured()) {
    return (
      <div
        className={cn(
          "overflow-hidden rounded-full border border-panel-border",
          className
        )}
        style={{ width: size, height: size }}
      >
        <Image
          src={cloudinaryUrl(cloudinaryId, {
            width: size * 2,
            height: size * 2,
            crop: "thumb",
          })}
          alt={name}
          width={size * 2}
          height={size * 2}
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full border border-panel-border bg-base font-display font-700 text-lexical-orange",
        className
      )}
      style={{
        width: size,
        height: size,
        fontSize: size * 0.32,
      }}
    >
      {initials}
    </div>
  );
}
