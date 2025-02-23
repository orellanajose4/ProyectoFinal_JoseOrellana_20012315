





let continuar = true;

while (continuar){//inicia while
let EdadCliente = parseInt(prompt("Ingrese la edad del cliente (en numero): "));
let EdadConyugue = 0;
let RecargoCliente = 0;
let RecargoConyugue = 0;
let RecargoHijos = 0;
let CantHijosAsegu = 0;
let PorcentajeRecargoCLI = 0;
let PorcentajeRecargoCON = 0;
let PagoTotal = 0;

if (EdadCliente >= 18 ){ //if principal1
		let EstadoCliente = prompt("El cliente esta casado (ingrese S o N)").toLowerCase();
    
    if (EstadoCliente == 's')  { //if cliente casado2
    		EdadConyugue = parseInt(prompt("Ingrese la edad del conyugue (en numero): "));
           
           //Recargos para el conyugue
 				if ((EdadConyugue >= 18) && (EdadConyugue <= 24)){				 //inicio if recargo 10%
  					PorcentajeRecargoCON = 0.1;
        } else if ((EdadConyugue >= 25) && (EdadConyugue <= 49)){//inicio if recargo 20%
  					PorcentajeRecargoCON = 0.2;
        } else {																								 //inicio if recargo 30%
  					PorcentajeRecargoCON = 0.3;
        }
  
  			RecargoConyugue = 2000 * PorcentajeRecargoCON;
      }//fin cliente casado2
    
    
    
    
    let Hijos = prompt("El cliente tiene hijos? (ingrese S o N)").toLowerCase(); 
    
   	if (Hijos == 's') { //if cliente tiene hijos3
     		let AseguHijos = prompt("El cliente desea asegurar a los hijos (ingrese S o N)").toLowerCase();
    		
        if (AseguHijos == 's') {//if cant de hijos4
            CantHijosAsegu = parseInt(prompt("Ingrese la cantidad de hijos a asegurar (en numero)"));
            RecargoHijos = 2000 * 0.2 * CantHijosAsegu
        }//fin if cant de hijos4
    }// fin if de cliente tiene hijos3
         
         
         
 //Recargos para el cliente
  if ((EdadCliente >= 18) && (EdadCliente <= 24)) {//inicio if recargo cliente 10%
  		 PorcentajeRecargoCLI = 0.1;
  } else if ((EdadCliente >= 25) && (EdadCliente <= 49)) {//inicio if recargo 20%
  		 PorcentajeRecargoCLI = 0.2;
  } else {
  		 PorcentajeRecargoCLI = 0.3;
  }//fin if recargo cliente 30%
  
  RecargoCliente =  2000 * PorcentajeRecargoCLI;
  
  //agregar recargo por cantidad de propiedades
  let CantPropiedades = parseInt(prompt("Ingrese la cantidad de propiedades que posee el Cliente/Asegurado "));
  let RecargoPropiedades = 2000 * 0.35 * CantPropiedades;
  
  
  //agreagr recargo por salario
  let IngresoCliente = parseInt(prompt("Ingrese el salario mensual del Cliente/Asegurado: "));
  let RecargoSalario = IngresoCliente * 0.05;
  
  
  
  //calculo del pago total
  PagoTotal = 2000 + RecargoCliente + RecargoConyugue + RecargoHijos + RecargoPropiedades + RecargoSalario;
  
  //Mostrar la cotizacion
   alert("Cotizacion para cliente \n" +
			"El precio base es de Q2000 \n" +
			"El asegurado tiene: " + EdadCliente + " años \n" +
      "El conyugue tiene: " + EdadConyugue + " años \n" +
      "El porcentaje de recargo por la edad del cliente es: " + (PorcentajeRecargoCLI * 100) + "%" + "\n" +
      "El porcentaje de recargo por la edad del conyugue es: " + (PorcentajeRecargoCON * 100) + "%" +"\n" +
      "El precio que pagará el cliente es de: " + (2000 + RecargoCliente) + "\n" +
      "El precio que pagará el conyugue es de: " + RecargoConyugue  + "\n" +
      "El recargo total por los hijos es de: " + RecargoHijos + "\n" +
      "El recargo por las propiedades es de: " + RecargoPropiedades + "\n" +
      "El recargo por el salario es de: " + RecargoSalario + "\n" +
      "El total a pagar es: Q " + PagoTotal);
      
      let respuesta = prompt("Desea realizar otra cotización? (escriba 'salir' para finalizar o presione otra tecla para continuar)").toLowerCase();
  		if(respuesta == 'salir'){
      	continuar = false;
      }
//fin if principal   
} else {//inicio else
    alert("El cliente debe ser mayor de 18 anos para poder ser asegurado");
} //fin else 
}//fin while