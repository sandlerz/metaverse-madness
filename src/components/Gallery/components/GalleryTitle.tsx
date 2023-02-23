import { useGalleryCardContext } from './GalleryCard'

export const GalleryTitle = () => {
  const {
    card: { title },
  } = useGalleryCardContext()

  return (
    <>
      <h3 className="title font-bold text-2xl opacity-0">{title}</h3>
      <h3 className="titleRotate font-bold text-3xl absolute inset-0 whitespace-nowrap flex justify-center items-center rotate-[270deg]">
        {title}
      </h3>
    </>
  )
}
