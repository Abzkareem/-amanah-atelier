type FrameProps = {
  caption: string;
  className?: string;
  /** Once real photography exists, pass a src and this component can render next/image instead. */
  src?: string;
};

export default function Frame({ caption, className = "", src }: FrameProps) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={caption} className={`object-cover ${className}`} />;
  }

  return (
    <div className={`frame ${className}`}>
      <span className="absolute left-4 bottom-3.5 text-[0.66rem] tracking-[0.08em] text-warm-white/55">
        {caption}
      </span>
    </div>
  );
}
