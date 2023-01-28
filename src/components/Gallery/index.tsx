import { EyeBrow } from '../EyeBrow'

type Card = {
  title: string
  enter: string
  img: string
}

interface Props {
  eyeBrow: string
  title: string
  cards: Card[]
}

export const Gallery = ({ cards, eyeBrow, title }: Props) => {
  return (
    <div className="text-center mt-40 page-width">
      <EyeBrow eyeBrow={eyeBrow} className="mb-6" />
      <h2 className="text-6xl font-bold w-[75%] mx-auto mb-4">{title}</h2>
      <div className="flex gap-2">
        {cards.map(({ title, img }, index) => (
          <div key={index} className="rounded-2xl overflow-hidden relative">
            <span className="absolute bottom-0 left-2">{title}</span>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}
