import InnerHTML from 'dangerously-set-html-content'
import arrow from '../../assets/arrow.png'
import { EyeBrow } from '../EyeBrow'

interface Props {
  eyeBrow: string
  paragraph: string
}

export const Paragraph = ({ eyeBrow, paragraph }: Props) => {
  return (
    <div className="page-width text-center">
      <EyeBrow eyeBrow={eyeBrow} />
      <InnerHTML
        html={paragraph}
        className="text-gray text-3xl leading-[180%] mb-5"
      />
      <img src={arrow} className="mx-auto" alt="" />
    </div>
  )
}
