import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
} from 'react'
import { RGBType } from '../../interfaces/interfaces'
import { EyeBrow } from '../EyeBrow'

interface Props {
  eyeBrow: string
  title: string
  children: React.ReactNode | React.ReactNode[]
  setColorHover?: Dispatch<SetStateAction<RGBType | undefined>>
  initialColorHover?: RGBType
  className?: string
  setImageHover?: Dispatch<SetStateAction<{ onHover: boolean; img: string }>>
}

interface GalleryContextValue {
  setColorHover?: Dispatch<SetStateAction<RGBType | undefined>>
  initialColorHover?: RGBType
  setImageHover?: Dispatch<SetStateAction<{ onHover: boolean; img: string }>>
}

const GalleryContext = createContext({} as GalleryContextValue)
export const useGallery = () => useContext(GalleryContext)

export const Gallery = ({
  eyeBrow,
  title,
  children,
  setColorHover,
  initialColorHover,
  className,
  setImageHover,
}: Props) => {
  return (
    <div className={`text-center ${className || ''}`}>
      <EyeBrow eyeBrow={eyeBrow} />
      <h2 className="text-3xl md:text-6xl font-bold w-4/5 md:w-3/4 mx-auto mb-8">
        {title}
      </h2>
      <div className="flex flex-col md:flex-row h-[800px] md:h-96 gap-1 md:gap-0 ">
        <GalleryContext.Provider
          value={{
            setColorHover,
            initialColorHover,
            setImageHover,
          }}
        >
          {children}
        </GalleryContext.Provider>
      </div>
    </div>
  )
}
