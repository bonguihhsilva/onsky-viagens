// Static export has no image optimizer; serve files as-is, prefixed with basePath.
export default function imageLoader({ src }: { src: string; width: number; quality?: number }) {
  return src.startsWith("/") ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}` : src;
}
