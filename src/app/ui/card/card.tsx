const Card = ({ children, fullSize }: CardProps) => {
  return (
    <div
      className={`box-border flex rounded-lg bg-white p-4 ${
        fullSize ? 'min-h-full w-full' : ''
      }`}
    >
      {children}
    </div>
  )
}

export interface CardProps {
  children?: React.ReactNode
  fullSize?: boolean
}

export default Card
