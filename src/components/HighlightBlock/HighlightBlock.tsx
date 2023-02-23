import { createContext, useContext } from 'react'
import { Image } from '../../interfaces/interfaces'

interface Items {
  items: {
    title: string
    icon?: Image
    image?: Image
  }[]
}

interface HighlightBlockData {
  image?: Image
  eyeBrow: string
  title: string
  items?: Items
}

interface HighlightBlockContextValues {
  data: HighlightBlockData
}

interface Props {
  children: React.ReactNode | React.ReactNode[]
  data: HighlightBlockData
  className?: string
}

const HighlightBlockContext = createContext({} as HighlightBlockContextValues)
export const useHighlightBlock = () => useContext(HighlightBlockContext)

export const HighlightBlock = ({ children, data, className }: Props) => {
  return (
    <HighlightBlockContext.Provider value={{ data }}>
      <div className={`flex gap-16 ${className}`}>{children}</div>
    </HighlightBlockContext.Provider>
  )
}
