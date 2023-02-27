import arrow from '../../assets/arrow.png'
import { EyeBrow } from '../EyeBrow'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

interface Props {
  eyeBrow: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  paragraph: any
  className?: string
}

export const Paragraph = ({ eyeBrow, paragraph, className }: Props) => {
  return (
    <div className={`text-center ${className}`}>
      <EyeBrow eyeBrow={eyeBrow} />
      <div className="text-gray text-lg md:text-3xl leading-[180%] mb-5">
        {documentToReactComponents(paragraph)}
      </div>
      <img src={arrow} className="mx-auto" alt="" />
    </div>
  )
}
