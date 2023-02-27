import { useRef } from 'react'
import { getAverageRGB } from '../../../utils/getAverageRGB'
import { useGalleryCardContext } from './GalleryCard'

export const GalleryImage = () => {
  const imgEl = useRef(null)

  const {
    card: {
      image: { url },
    },
    setImgRGB,
  } = useGalleryCardContext()

  return (
    <img
      ref={imgEl}
      className="absolute h-full object-cover object-center -z-10 left-0 md:left-[2%] top-0 rounded-2xl w-full md:w-[98%] transition-all duration-500 ease-linear"
      src={url}
      crossOrigin="anonymous" // in order cavas can work with others domain
      onLoad={event => {
        setImgRGB(getAverageRGB(event.target as HTMLImageElement))
      }}
    />
  )
}
