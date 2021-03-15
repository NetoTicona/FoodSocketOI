



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizitaOrdenesComponent } from './pizita-ordenes/pizita-ordenes.component';
import { PizzaService } from './services/pizza.service';




@NgModule({
  declarations: [PizitaOrdenesComponent],
  imports: [
    CommonModule
  ],
  providers: [PizzaService],
  exports: [PizitaOrdenesComponent]
})
export class PizzaModule {
}
