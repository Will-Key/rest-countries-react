type PROPS = {
  placeholder: string
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export default function Input(props: PROPS) {
  return (
    <input
      className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
      type="text"
      name="search"
      placeholder={props.placeholder}
      onChange={props.onChange}
      value={props.value}
    />
  )
}
