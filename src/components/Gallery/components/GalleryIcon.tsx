import { useGalleryCardContext } from './GalleryCard'

export const GalleryIcon = () => {
  const {
    data: { icon },
    imgRGB: { r, g, b },
  } = useGalleryCardContext()

  return (
    <span
      className="galleryIcon opacity-0 mb-2 grid place-content-center max-w-[60px] h-[60px] rounded-full"
      style={{
        backgroundColor: `rgb(${r},${g},${b})`,
      }}
    >
      <img src={icon} className="" alt="" />
    </span>
  )
}
