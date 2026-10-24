import Image, { type ImageProps } from "next/image";

/**
 * next/image with a blurred preview for local photos: they fade in from a soft
 * blur instead of popping in. Remote (Unsplash) photos have no preview.
 */
export default function Photo({ alt, ...props }: ImageProps) {
  return <Image alt={alt} placeholder={typeof props.src === "string" ? "empty" : "blur"} {...props} />;
}
