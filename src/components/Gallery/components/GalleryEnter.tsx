import { useGalleryCardContext } from './GalleryCard'

export const GalleryEnter = () => {
  const {
    card: { enter },
  } = useGalleryCardContext()

  return <span className="text-xs text-center opacity-0">{enter}</span>
}
