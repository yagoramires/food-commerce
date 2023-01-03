interface FoodTitleProps {
  name: string
}
const FoodTitle = ({ name }: FoodTitleProps) => {
  return <h1 className='w-full text-4xl font-bold sm:text-3xl sm:text-center'>{name}</h1>
}

export default FoodTitle
