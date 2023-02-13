import { useHighlightBlock } from '../HighlightBlock'

export const HighlightBlockImage = () => {
  const {
    data: { img },
  } = useHighlightBlock()

  return (
    <span className="flex-1">
      <img src={img} className="object-contain rounded-xl" />
    </span>
  )
}
