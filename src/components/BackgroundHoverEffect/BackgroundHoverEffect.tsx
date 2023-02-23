interface Props {
  onHover: boolean
  img: string
}

export const BackgroundHoverEffect = ({ onHover, img }: Props) => {
  return (
    <div
      className={`fixed top-0 left-0 -z-50 block w-full h-full blur-sm bg-no-repeat bg-center bg-cover transition-all duration-1000 ${
        onHover ? 'opacity-20' : 'opacity-0'
      }`}
      style={{
        backgroundImage: img ? `url(${img})` : '',
      }}
    />
  )
}
