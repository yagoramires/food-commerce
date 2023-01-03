import Card from './Card'
import FoodTitle from './FoodTitle'
import Head from './Head'

const Pizzas = () => {
  const data = [
    {
      id: 1,
      type: 'pizza',
      name: 'Cattuperoni',
      description:
        'Massa Tradicional, Molho de Tomate, Queijo mussarela, Pepperoni, Catupiry® e Orégano.',
      price: 64.9,
      image: 'https://forneriaoriginal.com/wp-content/uploads/2020/04/27_catuperoni2.jpg',
    },
    {
      id: 2,
      type: 'pizza',
      name: 'Portuguesa',
      description:
        'Massa Tradicional, Molho de Tomate, Queijo mussarela, Ovo, Tomate, Cebola, Azeitona, Presunto.',
      price: 43.5,
      image:
        'https://www.receitasnestle.com.br/sites/default/files/srh_recipes/103eca6a504379a0df6f55155b8d607d.jpg',
    },
    {
      id: 3,
      type: 'pizza',
      name: '4 Queijos',
      description:
        'Massa Tradicional, Molho de Tomate, Mussarela, Gorgonzola, Parmesão, Catupiry®.',
      price: 55,
      image:
        'https://www.receitasnestle.com.br/sites/default/files/srh_recipes/d036cd01122da62bf581784f52d99b3a.jpg',
    },
    {
      id: 4,
      type: 'pizza',
      name: 'Da casa',
      description:
        'Molho de Tomate, Queijo Mussarela, Calabreza, Azeitona Preta, Milho, Palmito, Catupiry® e Orégano.',
      price: 17.5,
      image: 'https://forneriaoriginal.com/wp-content/uploads/2016/10/a-moda-1.png',
    },
    {
      id: 5,
      type: 'pizza',
      name: 'Camarão com Alho Poró',
      description:
        'Molho de Tomate, Mussarela, Cream Cheese Philadelphia, Camarões, Alho Poró e Orégano.',
      price: 16,
      image: 'https://forneriaoriginal.com/wp-content/uploads/2021/01/camarao-alho-poro1.png',
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

export default Pizzas
