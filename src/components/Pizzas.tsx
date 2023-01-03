import { getPizzas } from '../services/api'
import Card from './Card'
import FoodTitle from './FoodTitle'
import Head from './Head'
import { useEffect, useState } from 'react'

const Pizzas = () => {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    ;(async () => {
      const pizzaRequest = await getPizzas()

      setPizzas(pizzaRequest.data)
    })()
  }, [])

  return (
    <div className='flex flex-col gap-8 pt-4 sm:pb-16'>
      <Head title='Pizzas' description='Escolha seu hambúrguer e se surpreenda.' />
      <FoodTitle name='Pizzas' />
      <Card data={pizzas} />
    </div>
  )
}

export default Pizzas
