import { Component } from '@angular/core';
import { Car } from './shared/shared.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular5';
  public carlist:Car[] = []

  saver(event:Car[]){
    this.carlist = event
  }
}
