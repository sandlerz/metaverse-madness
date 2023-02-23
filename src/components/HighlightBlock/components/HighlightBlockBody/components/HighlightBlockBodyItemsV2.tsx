import { useHighlightBlock } from '../../../HighlightBlock'

export const HighlightBlockBodyItemsV2 = () => {
  const {
    data: { items },
  } = useHighlightBlock()

  return (
    <div className="grid grid-cols-2 gap-7">
      {items?.items?.map(({ title, icon }, index) => (
        <div key={index + title} className="flex flex-col">
          {icon && (
            <span className="min-w-[70px] max-w-[70px] h-[70px] grid place-content-center bg-gray2 rounded-2xl mb-3">
              <img src={icon.url} />
            </span>
          )}
          <div>
            {title && <h4 className="font-bold text-2xl mb-1">{title}</h4>}
            <p className="text-gray flex items-center">{title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
