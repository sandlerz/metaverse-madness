import { useHighlightBlock } from '../HighlightBlock'

export const HighlightBlockImage = () => {
  const {
    data: { image },
  } = useHighlightBlock()

  return (
    <>
      {image && (
        <span className="flex-1">
          <img src={image.url} className="object-contain rounded-xl" />
        </span>
      )}
    </>
  )
}
