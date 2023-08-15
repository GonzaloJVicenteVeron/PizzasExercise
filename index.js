const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

// Get form and container from HTML

const formulario = document.getElementById ('search-form');
const resultados = document.getElementById ('result-container');

// Create search's function 

formulario.addEventListener ('submit', function (event){

  event.preventDefault ();

  //Get the value written on the imput

  const pizzaId = parseInt (document.getElementById ('pizza-id').value);

  //Search the pizza by ID
  
  const encontrarPizza = pizzas.find (pizza => pizza.id === pizzaId);

  //Clean up result's container 

  resultados.innerHTML = '' ;

  //Function

  if (isNaN (pizzaId)) {
    resultados.innerHTML = '<p id="error-message">Por favor, ingrese un número válido.</p>';}
    else if (encontrarPizza){
      //Show up pizza found
      const pizzaCard = document.createElement ('div');
      pizzaCard.classList.add ('pizza-card');
      pizzaCard.innerHTML = `
      <h2> ${encontrarPizza.nombre} </h2>
      <img src= "${encontrarPizza.imagen}" alt= ${encontrarPizza.name}>
      <p> Precio: ${encontrarPizza.precio} </p>
      `;
      resultados.appendChild (pizzaCard)  
    
    // Save pizza found on LocalStorage
    localStorage.setItem('lastPizza', JSON.stringify(encontrarPizza));
    
  } else {

    // Show up error message 
  
    resultados.innerHTML = '<p id = "error-message"> No se encontró una pizza con el ID que ingresaste. Por favor, ingrese otro ID. </p>';
  
}
});

// Load the last pizza searched and rendered from the localStorage when loading the page

document.addEventListener('DOMContentLoaded', function() {
  
  const lastPizza = JSON.parse(localStorage.getItem('lastPizza'));
  
  if (lastPizza) {
    
    const pizzaCard = document.createElement('div');
    
    pizzaCard.classList.add('pizza-card');
  
    pizzaCard.innerHTML = `
      
      <h2>${lastPizza.nombre}</h2>
      <img src="${lastPizza.imagen}" alt="${lastPizza.nombre}">
      <p>Precio: ${lastPizza.precio}</p>
    `;
    
    resultados.appendChild(pizzaCard);
  }
});
