import { useHighlightBlock } from '../../../HighlightBlock'

export const HighlightBlockBodyItemsV3 = () => {
  const {
    data: { items },
  } = useHighlightBlock()

  return (
    <div className="mt-10">
      {items?.items?.map(({ title, image, icon }, index) => (
        <div key={index + title} className="flex items-center mb-8 gap-10">
          {image && (
            <span className="rounded-2xl w-[20%]">
              <img src={image.url} />
            </span>
          )}
          <div className="w-[60%]">
            {title && <h4 className="font-bold text-2xl mb-1">{title}</h4>}
            {title && <p className="text-gray flex items-center">{title}</p>}
          </div>
          {icon && (
            <span className="w-[20%] grid place-content-center">
              <img src={icon.url} alt="" className="cursor-pointer" />
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
