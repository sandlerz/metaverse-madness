interface Props {
  children: React.ReactNode | React.ReactNode[]
}

export const HighlightBlockBody = ({ children }: Props) => {
  return <div className="flex-1">{children}</div>
}
