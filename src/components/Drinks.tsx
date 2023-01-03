import Card from './Card'
import FoodTitle from './FoodTitle'
import Head from './Head'

const Drinks = () => {
  const data = [
    {
      id: 1,
      type: 'drink',
      name: 'Coca-Cola',
      price: 7.99,
      image:
        'https://carrefourbr.vtexassets.com/arquivos/ids/18904046/coca-cola-310ml-1.jpg?v=637590218201970000',
    },
    {
      id: 2,
      type: 'drink',
      name: 'Guaraná Antártica',
      price: 7.99,
      image:
        'https://giassi.vtexassets.com/arquivos/ids/507250/Refrigerante-Guarana-Antarctica-Lata-310ml.png?v=637994816574830000',
    },
    {
      id: 3,
      type: 'drink',
      name: 'Matte Leão',
      price: 6.99,
      image:
        'https://andinacocacola.vtexassets.com/arquivos/ids/155490/7891098040671_01.jpg?v=637722480149630000',
    },
    {
      id: 4,
      type: 'drink',
      name: 'Fanta Uva',
      price: 8.5,
      image:
        'http://d2r9epyceweg5n.cloudfront.net/stores/001/043/122/products/fanta-uva-3501-012134716f394f6f1a15698487625514-640-0.png',
    },
    {
      id: 5,
      type: 'drink',
      name: 'Água',
      price: 4.5,
      image:
        'https://www.imigrantesbebidas.com.br/bebida/images/products/full/2893-agua-mineral-crystal-sem-gas-500ml.jpg',
    },
  ]
  return (
    <div className='flex flex-col gap-8 pt-4 sm:pb-16'>
      <Head title='Hambúrgueres' description='Escolha seu hambúrguer e se surpreenda.' />
      <FoodTitle name='Hambúrgueres' />
      <Card data={data} />
    </div>
  )
}

export default Drinks
