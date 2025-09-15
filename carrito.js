    const cantidadElementoManzanas = document.getElementById('cantidad_manzanas');
    const cantidadManzanas = localStorage.getItem('manzanas') || 0;
    const totalElemento = document.getElementById('total_precio');

    const  cantidadBananas = localStorage.getItem('bananas') || 0;
    const cantidadElementoBananas = document.getElementById('cantidad_bananas');

    const cantidadDuraznos = localStorage.getItem('duraznos') || 0;
    const cantidadElementosDuraznos = document.getElementById ('cantidad_durazno')




     
      let Total = localStorage.getItem('Total') || 0;
      
      totalElemento.textContent = `Total: $${Total}`;

      cantidadElementoManzanas.textContent = `Tienes ${cantidadManzanas} manzanas en el carrito.`; 
      cantidadElementoBananas.textContent = `Tienes ${cantidadBananas} bananas en el carrito.`;
      cantidadElementosDuraznos.textContent = `Tiene ${cantidadDuraznos} duraznos en el carrito.`

/*----------------------------*/



const vaciarBtn = document.getElementById('vaciar_carrito');

vaciarBtn.addEventListener('click', () => {
  localStorage.clear();
  alert("Se a vaciado el carrito");
  location.reload(); 
});


/*----------------------------*/

const ConfirmarCompra = document.getElementById('confirmarCompra')

ConfirmarCompra.addEventListener('click', () => 
  {
    alert("Su pago fue realizado correctamente");
  });







