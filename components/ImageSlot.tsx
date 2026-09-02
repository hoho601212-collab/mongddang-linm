type ImageSlotProps = {
  filename: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
};

export function ImageSlot({ filename, alt, className = '', children }: ImageSlotProps) {
  return (
    <div className={`image-slot ${className}`.trim()}>
      <div className="image-slot-fallback" aria-hidden="true">
        {children ?? <span>{filename}</span>}
      </div>
      <object
        className="image-slot-object"
        data={`/images/${filename}`}
        type="image/webp"
        aria-label={alt}
      >
        <span className="sr-only">{alt}</span>
      </object>
    </div>
  );
}
