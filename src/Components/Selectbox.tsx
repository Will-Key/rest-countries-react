type PROPS = {
  initialOption: string
  options: string[]
  onChange?: React.ChangeEventHandler<HTMLSelectElement> | undefined
}

export default function Selectbox(props: PROPS) {
  return (
    <select
      className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
      onChange={props.onChange}>
      <option value="All">{props.initialOption}</option>
      {props.options?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}
