import { Component, OnInit } from '@angular/core';
import { PizzaCount } from '../models/pizza-counts';
import { Pizza } from '../models/pizza';
import { PizzaService } from '../services/pizza.service';
import { PizzaOrders } from '../models/pizza-orders';

@Component({
  selector: 'app-pizita-ordenes',
  templateUrl: './pizita-ordenes.component.html',
  styleUrls: ['./pizita-ordenes.component.css']
})
export class PizitaOrdenesComponent implements OnInit {
  title:string = "Ordena tu pizza!";
  pizzaCountTitle:string = "Cuantas personas piden que pizza";
  pizzaCountByName:PizzaCount[] = [];
  pizzas:Pizza[] = [];

  constructor( private _pizzaService:PizzaService ) { }

  ngOnInit(): void {
    this._pizzaService.getPizzaList().subscribe( (pL:any)=>{

      console.log("traendo las pizas: ", pL );
      
      this.pizzas= pL;
    }, err=> {console.log("err: ", err );}
      );


    this._pizzaService.getTotalOrdersByPizzaName().subscribe( (ola)=>{
      this.pizzaCountByName = ola;
      console.log("traendo el conteo de pizzas: ", ola );
    }, err=>{ console.log("err: ", err );
     }  );
  }


  onOrderSubmit( order:Pizza ):void{
    let pizzaOrder: PizzaOrders = {
      pizzaId: order.pizzaId,
      pizzaName: order.pizzaName,
      orderDate:new Date()
    };
    this._pizzaService.newPizzaOrder( pizzaOrder );


  }











}
