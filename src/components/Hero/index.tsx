import { EyeBrow } from '../EyeBrow'
import { Image } from '../../interfaces/interfaces'
import { useState } from 'react'

interface Props {
  heroText: string
  heroImage: Image
}

export const Hero = ({ heroText, heroImage }: Props): JSX.Element => {
  const [img, setImg] = useState(false)
  return (
    <div>
      <div className="flex gap-2 justify-center">
        <EyeBrow eyeBrow={heroText} />
        <h1 className="text-[8vw] font-bold leading-none">
          METAVERSE <br /> MADNESS
        </h1>
      </div>
      <img
        className="rounded-tl-[120px] rounded-b-[30px] relative -top-28 -z-10 -mb-16 transition-all duration-1000"
        src={heroImage.url}
        height={heroImage.height}
        style={{ opacity: img ? '1' : '0' }}
        onLoad={() => {
          setImg(true)
        }}
      />
    </div>
  )
}
