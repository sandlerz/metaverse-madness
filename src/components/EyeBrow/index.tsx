interface Props {
  eyeBrow: string
  className?: string
}

export const EyeBrow = ({ eyeBrow, className }: Props) => {
  return (
    <span
      className={`text-gray before:content-['I'] before:mr-1 opacity-60 block ${className}`}
    >
      {eyeBrow}
    </span>
  )
}
