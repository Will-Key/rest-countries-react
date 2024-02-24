export default function Loading() {
  return (
    <div className="flex flex-row justify-center">
      <span className="font-bold text-2xl">
        Chargement
        <span className="animate-ping duration-100 delay-200">.</span>
        <span className="animate-ping duration-150 delay-300">.</span>
        <span className="animate-ping duration-200 delay-500">.</span>
      </span>
    </div>
  )
}
