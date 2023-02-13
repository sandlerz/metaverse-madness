import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react'
import { useGallery } from '../Gallery'
import { RGBType } from '../../../interfaces/interfaces'

type Card = {
  title: string
  enter: string
  img: string
  icon: string
}

interface Props {
  children: React.ReactNode | React.ReactNode[]
  card: Card
}

interface GalleryCardContextValue {
  data: Card
  imgRGB: RGBType
  setImgRGB: Dispatch<SetStateAction<RGBType>>
}

const GalleryCardContext = createContext({} as GalleryCardContextValue)
export const useGalleryCardContext = () => useContext(GalleryCardContext)

export const GalleryCard = ({ children, card }: Props) => {
  const [imgRGB, setImgRGB] = useState<{ r: number; g: number; b: number }>({
    r: 0,
    g: 0,
    b: 0,
  })
  const { setColorHover, initialColorHover, setImageHover } = useGallery()

  return (
    <GalleryCardContext.Provider
      value={{
        data: card,
        imgRGB,
        setImgRGB,
      }}
    >
      <div
        className="galleryCard rounded-2xl overflow-hidden relative cursor-pointer flex-1 hover:flex-2 transition-all ease-out duration-[400ms] flex flex-col justify-end px-2 hover:p-12"
        onMouseEnter={() => {
          setColorHover && setColorHover(imgRGB)
          setImageHover &&
            setImageHover({
              onHover: true,
              img: card.img,
            })
        }}
        onMouseLeave={() => {
          setColorHover && initialColorHover && setColorHover(initialColorHover)
          setImageHover &&
            setImageHover({
              onHover: false,
              img: card.img,
            })
        }}
      >
        {children}
      </div>
    </GalleryCardContext.Provider>
  )
}
