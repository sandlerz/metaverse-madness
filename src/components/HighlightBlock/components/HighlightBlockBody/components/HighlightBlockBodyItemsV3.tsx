import { useHighlightBlock } from '../../../HighlightBlock'

export const HighlightBlockBodyItemsV3 = () => {
  const {
    data: { items },
  } = useHighlightBlock()

  return (
    <div className="mt-10">
      {items?.items?.map(({ title, image, icon }, index) => (
        <div
          key={index + title}
          className="flex flex-col md:flex-row items-center mb-8 gap-3 md:gap-10 text-center md:text-left"
        >
          {image && (
            <span className="rounded-2xl md:w-[20%]">
              <img src={image.url} />
            </span>
          )}
          <div className="md:w-[60%]">
            {title && <h4 className="font-bold text-2xl mb-1">{title}</h4>}
            {title && <p className="text-gray items-center w-full">{title}</p>}
          </div>
          {icon && (
            <span className="w-2/12 md:w-[20%] grid place-content-center">
              <img src={icon.url} alt="" className="cursor-pointer" />
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
