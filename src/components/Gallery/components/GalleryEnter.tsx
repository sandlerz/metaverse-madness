import { useGalleryCardContext } from './GalleryCard'

export const GalleryEnter = () => {
  const {
    data: { enter },
  } = useGalleryCardContext()

  return <span className="text-xs text-center opacity-0">{enter}</span>
}
