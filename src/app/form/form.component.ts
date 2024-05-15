import { Component, EventEmitter, Output } from '@angular/core';
import { Car } from '../shared/shared.model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  @Output() EventChangeEmitter:EventEmitter<Car[]> = new EventEmitter()
    public car:Car = new Car()
    public carList:Car[] = []
    public showthiscard() {
    this.carList.push(this.car)
    this.car = new Car()
    this.EventChangeEmitter.emit(this.carList)
    }
  }
