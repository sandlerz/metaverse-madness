import { useHighlightBlock } from '../../../HighlightBlock'

export const HighlightBlockBodyItemsV2 = () => {
  const {
    data: { items },
  } = useHighlightBlock()

  return (
    <div className="grid grid-cols-2 gap-7">
      {items?.map(({ text, title, icon }, index) => (
        <div key={index + text} className="flex flex-col">
          <span className="min-w-[70px] max-w-[70px] h-[70px] grid place-content-center bg-gray2 rounded-2xl mb-3">
            <img src={icon} />
          </span>
          <div>
            {title && <h4 className="font-bold text-2xl mb-1">{title}</h4>}
            <p className="text-gray flex items-center">{text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
