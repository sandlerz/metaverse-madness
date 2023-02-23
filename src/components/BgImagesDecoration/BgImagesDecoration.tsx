interface Props {
  bgImgs: {
    url: string
    top?: number
    right?: number
    left?: number
    bottom?: number
  }[]
}

export const BgImagesDecoration = ({ bgImgs }: Props) => {
  return (
    <>
      {bgImgs.map(({ url, top, right, left, bottom }) => (
        <img
          src={url}
          key={url + top}
          className="absolute -z-50"
          style={{
            top,
            right,
            left,
            bottom,
          }}
        />
      ))}
    </>
  )
}
