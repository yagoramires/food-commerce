import Head from './Head'
import FoodTitle from './FoodTitle'
import Card from './Card'

const Burgers = () => {
  const data = [
    {
      id: 1,
      type: 'burger',
      name: 'X-Tudo',
      description: 'Pão com Gergelim, Hambúrguer, Queijo, Alface, Tomate, Ovo, Molho',
      price: 14.99,
      image: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-x-tudo.jpg',
    },
    {
      id: 2,
      type: 'burger',
      name: 'X-Bacon',
      description: 'Pão Brioche, Hambúrguer, Queijo Cheddar, Bacon, Alface, Tomate',
      price: 13.5,
      image: 'https://embutidosbonatti.ind.br/temp/xxx-57-1920x1080m1.jpg',
    },
    {
      id: 3,
      type: 'burger',
      name: 'X-Australia',
      description: 'Pão Australiano, Hambúrguer, Queijo Cheddar, Bacon, Molho Barbecue',
      price: 19.5,
      image: 'https://vocegastro.com.br/app/uploads/2021/11/x-bacon.jpg',
    },
    {
      id: 4,
      type: 'burger',
      name: 'X-God',
      description:
        'Pão Artesanal, Hambúrguer, Alface, Tomate, Picles, Cebola Roxa, Maionese da casa',
      price: 17.5,
      image:
        'https://www.minervafoods.com/wp-content/uploads/2016/06/como_fazer_hamburguer_caseiro.jpg',
    },
    {
      id: 5,
      type: 'burger',
      name: 'X-Que',
      description:
        'Pão Brioche, 2 Hambúrgueres, Alface, Queijo Cheddar, Queijo Bola, Picles, Maionese da casa',
      price: 16,
      image:
        'https://conteudo.imguol.com.br/45/2018/07/17/mao-santa-burguer-1531851949973_v2_4x3.jpg',
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

export default Burgers
