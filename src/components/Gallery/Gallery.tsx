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
  setColorHover?: Dispatch<SetStateAction<RGBType>>
  initialColorHover?: RGBType
  className?: string
  setImageHover?: Dispatch<SetStateAction<{ onHover: boolean; img: string }>>
}

interface GalleryContextValue {
  setColorHover?: Dispatch<SetStateAction<RGBType>>
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
    <div className={`text-center mt-40 ${className}`}>
      <EyeBrow eyeBrow={eyeBrow} className="mb-6" />
      <h2 className="text-6xl font-bold w-[75%] mx-auto mb-4">{title}</h2>
      <div className="flex h-96">
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
