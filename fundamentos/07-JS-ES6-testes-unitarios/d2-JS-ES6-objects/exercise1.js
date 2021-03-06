const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = Object.values(order)[3].delivery.deliveryPerson;
  const clientName = Object.values(order)[0];
  const cellphone = Object.values(order)[1];
  const adress = Object.values(order)[2];
  return console.log(`Olá ${deliveryPerson}, entrega para: ${clientName}, Telefone: ${cellphone}, R. ${adress.street}, N°: ${adress.number}, AP: ${adress.apartment}`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  const clientName = Object.values(order)[0];
  const pizzas = order.order.pizza;
  const sabores = Object.keys(pizzas);
  const drinks = order.order.drinks.coke;
  const orderedDrink = Object.values(drinks);
  const payment = Object.values(order)[4];
  return console.log(`Olá ${clientName}, o total do seu pedido de: ${sabores[0]}, ${sabores[1]} e ${orderedDrink[0]}, é R$ ${Object.values(payment)[0]},00.`)
}

orderModifier(order);