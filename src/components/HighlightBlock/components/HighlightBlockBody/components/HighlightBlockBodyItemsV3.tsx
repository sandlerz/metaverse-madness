import { useHighlightBlock } from '../../../HighlightBlock'

export const HighlightBlockBodyItemsV3 = () => {
  const {
    data: { items },
  } = useHighlightBlock()

  return (
    <div>
      {items?.map(({ text, title, img, icon }, index) => (
        <div key={index + text} className="flex items-center mb-8 gap-10">
          {img && (
            <span className="rounded-2xl w-[20%]">
              <img src={img} />
            </span>
          )}
          <div className="w-[60%]">
            {title && <h4 className="font-bold text-2xl mb-1">{title}</h4>}
            {text && <p className="text-gray flex items-center">{text}</p>}
          </div>
          {icon && (
            <span className="w-[20%] grid place-content-center">
              <img src={icon} alt="" className="cursor-pointer" />
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
