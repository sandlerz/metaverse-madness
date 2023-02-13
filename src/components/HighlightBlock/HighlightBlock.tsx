import { createContext, useContext } from 'react'

interface Items {
  title?: string
  text: string
  icon?: string
  img?: string
}

interface HighlightBlockData {
  img?: string
  eyeBrow: string
  title?: string
  items?: Items[]
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
