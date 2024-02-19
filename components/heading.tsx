interface HeadingProps {
  title: string
}

const Heading = ({title}: HeadingProps) => (
  <div className="items-stretch flex justify-between gap-0">
    <div className="text-lime-400 text-3xl font-medium whitespace-nowrap">
      #
    </div>
    <div className="text-white text-3xl font-medium whitespace-nowrap">
      {title}
    </div>
  </div>
)

export { Heading }