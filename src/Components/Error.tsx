type PROPS = {
  error: { message: string }
}

export function Error({ error }: PROPS) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-black text-2xl font-bold">
        Uh Oh, something went wrong!
      </h2>
      <br />
      <p className="text-black text-lg">{error.message}</p>
    </div>
  )
}
