import { IoMdArrowBack } from 'react-icons/io'
import GoBackBtn from '../Components/GoBackBtn'
import CountryBlock from '../Components/CountryBlock'

export default function CountryPage() {
  return (
    <div className="flex flex-col gap-6">
      <GoBackBtn label="Back" icon={<IoMdArrowBack />} />
      <CountryBlock />
    </div>
  )
}
