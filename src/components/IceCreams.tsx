import Card from './Card'
import FoodTitle from './FoodTitle'
import Head from './Head'
import { useEffect, useState } from 'react'
import { getIceCreams } from '../services/api'

const IceCreams = () => {
  const [iceCreams, setIceCreams] = useState([])

  useEffect(() => {
    ;(async () => {
      const iceCreamsRequest = await getIceCreams()
      setIceCreams(iceCreamsRequest.data)
    })()
  }, [])

  return (
    <div className='flex flex-col gap-8 pt-4 sm:pb-16'>
      <Head title='Sorvetes' description='Escolha seu hambúrguer e se surpreenda.' />
      <FoodTitle name='Sorvetes' />
      <Card data={iceCreams} />
    </div>
  )
}

export default IceCreams
