import d from '../../assets/d.png'
import hero from '../../assets/hero.png'
import cercle from '../../assets/cercle.png'
import { EyeBrow } from '../EyeBrow'

interface Props {
  heroText: string
}

export const Hero = ({ heroText }: Props): JSX.Element => {
  return (
    <div className="w-full mt-44 ">
      <div className="flex gap-2 px-32 max-w-[1440px] mx-auto">
        <EyeBrow eyeBrow={heroText} className="mr-20" />
        <h1 className="text-[144px] font-bold leading-[7.3rem]">
          <span className="block mb-11">METAVERSE</span>
          <span className="flex items-center gap-1 justify-between">
            MA
            <img src={d} className="inline-block translate-x-1 translate-y-1" />
            NESS
          </span>
        </h1>
      </div>
      <div className="overflow-hidden h-[680px] translate-y-[-40px] -z-10 relative">
        <div className="relative grid place-items-center">
          <img
            className="rounded-tl-[120px] rounded-b-[30px] translate-x-[110px] h-full object-cover"
            src={hero}
          />
          <img className="absolute top-[60%] right-[10%]" src={cercle} alt="" />
        </div>
      </div>
    </div>
  )
}
