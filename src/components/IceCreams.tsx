import Card from './Card'
import FoodTitle from './FoodTitle'
import Head from './Head'

const IceCreams = () => {
  const data = [
    {
      id: 1,
      type: 'ice-cream',
      name: 'Sorvete de Creme',
      price: 14.99,
      image:
        'https://static.wixstatic.com/media/261d21_580099330fa54c39bb3bd475cab49949~mv2.jpg/v1/fill/w_1798,h_1080,al_c,q_85/261d21_580099330fa54c39bb3bd475cab49949~mv2.jpg',
    },
    {
      id: 2,
      type: 'ice-cream',
      name: 'Sorvete de Morango',
      price: 14.99,
      image:
        'https://www.receitasedicasdochef.com.br/wp-content/uploads/2021/01/Sorvete-de-Morango-Caseiro-Delicioso.jpg',
    },
    {
      id: 3,
      type: 'ice-cream',
      name: 'Sorvete de Chocolate',
      price: 14.99,
      image:
        'https://www.receitasedicasdochef.com.br/wp-content/uploads/2022/01/Sorvete-de-Chocolate-Caseiro.webp',
    },
    {
      id: 4,
      type: 'ice-cream',
      name: 'Brownie com Sorvete',
      description:
        'Sorvete de creme com Brownie feito com Chocolate Belga e Calda de Chocolate Belga',
      price: 24.99,
      image:
        'https://www.oetker.com.br/Recipe/Recipes/oetker.com.br/br-pt/baking/image-thumb__70799__RecipeDetail/brownie-com-sorvete.jpg',
    },
    {
      id: 5,
      type: 'ice-cream',
      name: 'Açai',
      description: 'Açai, Banana, Leite Ninho, Amendoim',
      price: 17,
      image: 'https://www.assai.com.br/sites/default/files/shutterstock_2076982999.jpg',
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

export default IceCreams
