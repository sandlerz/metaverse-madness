import { useGalleryCardContext } from './GalleryCard'

export const GalleryIcon = () => {
  const {
    card: {
      icon: { url },
    },
    imgRGB,
  } = useGalleryCardContext()

  return (
    <span
      className="galleryIcon opacity-0 mb-2 grid place-content-center max-w-[60px] h-[60px] rounded-full"
      style={{
        backgroundColor: `rgb(${Object.values(imgRGB)})`,
      }}
    >
      <img src={url} className="" alt="" />
    </span>
  )
}
