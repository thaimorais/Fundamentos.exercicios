const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const entregador = order.order.delivery.deliveryPerson
  const cliente = order.name
  const numeroTelefone = order.phoneNumber
  const endereco = order.address.street
  const numeroEndereco = order.address.number
  const numeroApartamento = order.address.apartment
  
  console.log(`Olá ${entregador}, entrega para: ${cliente}, ${numeroTelefone}, 
  R. ${endereco}, Nº: ${numeroEndereco}, AP: ${numeroApartamento}`)
}

customerInfo(order);

order.name = 'Luiz Silva';
order.payment.total = 50;

console.log(order)

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const sabor = Object.keys(order.order.pizza);
  const cliente = order.name
  const saborRefrigerante = order.order.drinks.coke.type
  const valorPedido = order.payment.total

  console.log(`Olá ${cliente}, o total do seu pedido de ${sabor[0]}, ${sabor[1]} e ${saborRefrigerante} é R$${valorPedido},00`)

}

orderModifier(order);