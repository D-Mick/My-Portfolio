/**
 * GitHub Pages serves this site from /<repo>, so local image paths need that prefix.
 * Next.js applies `basePath` to scripts and styles, but not to `next/image` sources.
 */
export default function imageLoader({ src }: { src: string; width: number; quality?: number }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (src.startsWith("/") && base) return `${base}${src}`;
  return src;
}
