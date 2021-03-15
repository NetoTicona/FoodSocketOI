import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from "socket.io-client";


import { Pizza } from "../models/pizza";
import { PizzaCount } from '../models/pizza-counts';
import { PizzaOrders } from '../models/pizza-orders';

@Injectable(/* {
  providedIn: 'root'
} */)
export class PizzaService {
  private _socketUrl:string = "http://localhost:9090/pizza";
  private _socket;
  io:any = io;

  constructor() { 
    this._socket = this.io( this._socketUrl );
  }

  
  getPizzaList(): Observable< Pizza[] >{
    return Observable.create( (observe)=>{
      this._socket.on("pizzaList" , pizzas =>{
        observe.next(pizzas);
      } )
    } );
  }


  getTotalOrdersByPizzaName():Observable< PizzaCount[] >  {
    return Observable.create( (observe)=>{
      this._socket.on( "pizzaOrdersCount", pizzaCount =>{
        observe.next(pizzaCount);
      }  )
    } );
  }


  newPizzaOrder( order:PizzaOrders ):void {
    this._socket.emit("newPizzaOrder" , order );
  }




}
