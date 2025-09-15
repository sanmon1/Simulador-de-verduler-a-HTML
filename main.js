    let manzanas = 0;
    let bananas = 0;
    let duraznos = 0;
    let Total = 0;

    const PrecioManzana = 150;
    const PrecioBanana = 300;
    const PrecioDurazno = 350;
   
    


    const inputManzana = document.getElementById('cantidad_manzana');
    const botonManzana = document.getElementById('comprar-manzana');


    const inputBanana = document.getElementById('cantidad_banana')
    const botonBanana = document.getElementById('comprar-banana')

    const inputDurazno = document.getElementById('cantidad_durazno')
    const botonDurazno = document.getElementById('comprar-durazno')

   const boton = document.getElementById("ModoPantalla");



  



    /* Logica manzanas*/

      if (localStorage.getItem('manzanas'))
      
      {
        manzanas = parseInt(localStorage.getItem('manzanas'));
      }

      if (localStorage.getItem('Total'))
      {
        Total = parseInt(localStorage.getItem('Total'))
      }

      botonManzana.addEventListener('click', () => {
        const cantidad = parseInt(inputManzana.value);

        if (cantidad > 0) {
      manzanas += cantidad;

   
      const monto = cantidad * PrecioManzana;
      Total += monto;

   
    localStorage.setItem('manzanas', manzanas);
    localStorage.setItem('Total', Total);

   

    alert(`Agregaste ${cantidad} manzanas ($${monto}).`);
    inputManzana.value = 0;
    
  }
   else {
    alert("Debes ingresar una cantidad mayor a 0.");
  }

      });


      /* Logica bananas*/


      if (localStorage.getItem('bananas'))
      
      {
        bananas = parseInt(localStorage.getItem('bananas'));
      }

      if (localStorage.getItem('Total'))
      {
        Total = parseInt(localStorage.getItem('Total'))
      }

      botonBanana.addEventListener('click', () => {
        const cantidad = parseInt(inputBanana.value);

        if (cantidad > 0) {
      bananas += cantidad;

    
      const monto = cantidad * PrecioBanana;
      Total += monto;

   
    localStorage.setItem('bananas', bananas);
    localStorage.setItem('Total', Total);

   

    alert(`Agregaste ${cantidad} bananas ($${monto}).`);
    inputManzana.value = 0;

    console.log("tengo" + bananas + "bananas")
    
  }
   else {
    alert("Debes ingresar una cantidad mayor a 0.");
  }

      });


      /* Logica duraznos*/


      

       if (localStorage.getItem('duraznos'))
      
      {
        duraznos = parseInt(localStorage.getItem('duraznos'));
      }

      if (localStorage.getItem('Total'))
      {
        Total = parseInt(localStorage.getItem('Total'))
      }

      botonDurazno.addEventListener('click', () => {
        const cantidad = parseInt(inputDurazno.value);

        if (cantidad > 0) {
      duraznos += cantidad;

  
      const monto = cantidad * PrecioDurazno;
      Total += monto;

    
    localStorage.setItem('duraznos', duraznos);
    localStorage.setItem('Total', Total);

   

    alert(`Agregaste ${cantidad} duraznos ($${monto}).`);
    inputManzana.value = 0;

    console.log("tengo" + duraznos + "duraznos")
    
  }
   else {
    alert("Debes ingresar una cantidad mayor a 0.");
  }

      });

        
  
  



    

