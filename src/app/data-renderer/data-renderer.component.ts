import { Component, Input } from '@angular/core';
import { Car } from '../shared/shared.model';

@Component({
  selector: 'app-data-renderer',
  templateUrl: './data-renderer.component.html',
  styleUrl: './data-renderer.component.css'
})
export class DataRendererComponent {

  @Input()

  public carlist!:Car[]
  public car= new Car()

  public deletethiscard(index:any){
    this.carlist.splice(index,1)
  }
  public editbtn(index:any){
    this.car=this.carlist[index]
    this.carlist.splice(index,1)
  }
  }

