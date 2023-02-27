import { Image } from '../../interfaces/interfaces'
import styles from './styles.module.css'

interface props {
  data: {
    name: string
    position: string
    text: string
    image: Image
  }
}

export const FounderBlock = ({ data }: props) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 lg:h-[610px]">
        <div
          className={`flex-1 border rounded-xl border-[#6A6A6A] p-7 flex justify-end flex-col ${styles.bgGradient}`}
        >
          <h3 className="text-left mb-3">{data.name}</h3>
          <span className="mb-5">{data.position}</span>
          <p className="text-xl leading-[50px] w-11/12">{data.text}</p>
        </div>
        <span className="flex-2">
          <img
            className="object-cover h-full w-full rounded-xl"
            src={data.image.url}
            alt=""
          />
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center">
        <h3 className="text-left text-3xl md:text-6xl">Enter the Metaverse</h3>
        <button className="bg-[#25618b] rounded-3xl px-8 h-16">
          ENTER METAVERSE
        </button>
      </div>
    </>
  )
}
