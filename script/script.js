//Desenvolva sua lógica aqui utlizando o método de array filter e verifique o resultado no console do seu navegador.

//1) Crie uma função para filtrar os hotéis que estão localizados no Brasil
function filterCountry(array) {
  let hoteis = array;
  let justBrasil = hoteis.filter((element) => {
    return element.country == "Brasil"
  })
  // for(let i = 0; i < hoteis.length; i++){
  //   let todosHoteis = hoteis[i]
  //   let paisesHosteis = todosHoteis.country;
  //   if(paisesHosteis == 'Brasil'){
  //   hoteisBrazil.push(todosHoteis)
  //   }
  // }
  return justBrasil;
}
console.log(filterCountry(data));
// 2) Crie uma função para filtrar os hotéis que possuem o preço igual ou maior que R$200,00.
function filterPrice(array) {
  let hoteis = array;
  let TwoHundredToMore = hoteis.filter((element) => {
    return element.price >= 200;
  })
  return TwoHundredToMore;
}
console.log(filterPrice(data));

//3) Crie uma função para filtrar os hotéis que estão abertos nesse momento (isOpen)
function filterIsOpen(array) {
  let hoteis = array;
  let hoteisAbertos = hoteis.filter((element) => {
    return element.isOpen == true
  })
  return hoteisAbertos;
}
console.log(filterIsOpen(data));

//DESAFIO
//4) Crie uma função que filtre apenas o hotel com o nome “Copacabana Palace”. Após isso, crie outra função para verificar as datas disponíveis para agendamento nesse hotel (isAvaliable).
function filterHotelName(array) {
  let hoteis = array;
  let hoteisCorrespondentes = hoteis.filter((element) => {
    return element.name == "Copacabana Palace"
  })
  return hoteisCorrespondentes;
}

function filterToBook() {
  const hotel = filterHotelName(data);
  let datasHotel = hotel[0].toBook.filter((element) => {
    return element.isAvaliable == true

    // const afins = element.toBook
    //   let avaliable = afins.filter((element) => {
    //     return element.isAvaliable == true
    // })
  });
  return datasHotel
}
console.log(filterToBook());
