import { useHighlightBlock } from '../../../HighlightBlock'

interface Props {
  className?: string
}

export const HighlightBlockBodyTitle = ({ className }: Props) => {
  const {
    data: { title },
  } = useHighlightBlock()

  return <h3 className={`text-left mb-8 ${className}`}>{title}</h3>
}
