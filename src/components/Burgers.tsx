import Head from './Head'
import FoodTitle from './FoodTitle'
import Card from './Card'
import { useEffect, useState } from 'react'
import { getBurgers } from '../services/api'

const Burgers = () => {
  const [burgers, setBurgers] = useState([])

  useEffect(() => {
    ;(async () => {
      const burgerRequest = await getBurgers()
      setBurgers(burgerRequest.data)
    })()
  }, [])

  return (
    <div className='flex flex-col gap-8 pt-4 sm:pb-16'>
      <Head title='Hambúrgueres' description='Escolha seu hambúrguer e se surpreenda.' />
      <FoodTitle name='Hambúrgueres' />
      <Card data={burgers} />
    </div>
  )
}

export default Burgers
