import { useHighlightBlock } from '../../../HighlightBlock'

interface Props {
  className?: string
}

export const HighlightBlockBodyTitle = ({ className }: Props) => {
  const {
    data: { title },
  } = useHighlightBlock()

  return (
    <h3 className={`text-3xl md:text-6xl md:text-left mb-8 ${className}`}>
      {title}
    </h3>
  )
}
