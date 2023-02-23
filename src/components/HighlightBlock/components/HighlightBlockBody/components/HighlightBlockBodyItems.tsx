import { useHighlightBlock } from '../../../HighlightBlock'

export const HighlightBlockBodyItems = () => {
  const {
    data: { items },
  } = useHighlightBlock()

  return (
    <div className="flex flex-col gap-4">
      {items?.items?.map(({ title = '' }, index) => (
        <div key={index + title} className="flex  gap-7">
          <span className=" min-w-[70px] h-[70px] grid place-content-center bg-gray2 rounded-2xl">
            {index + 1}
          </span>
          <p className="text-gray flex items-center">{title}</p>
        </div>
      ))}
    </div>
  )
}
