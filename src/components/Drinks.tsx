import { getDrinks } from '../services/api'
import Card from './Card'
import FoodTitle from './FoodTitle'
import Head from './Head'
import { useEffect, useState } from 'react'

const Drinks = () => {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    ;(async () => {
      const drinkRequest = await getDrinks()

      setDrinks(drinkRequest.data)
    })()
  }, [])

  return (
    <div className='flex flex-col gap-8 pt-4 sm:pb-16'>
      <Head title='Bebidas' description='Escolha uma bebida para acompanhar o seu lanche.' />
      <FoodTitle name='Bebidas' />
      <Card data={drinks} />
    </div>
  )
}

export default Drinks
