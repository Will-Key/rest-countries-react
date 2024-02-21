type PROPS = {
  src?: string
  alt?: string
}

export default function CountryBlockImage({ src, alt }: PROPS) {
  return (
    <div className="border h-80 max-h-80 border-slate-100">
      <img
        src={src}
        alt={alt}
        className="object-fit w-full h-full max-w-full opacity-100 transform-none"
      />
    </div>
  )
}
