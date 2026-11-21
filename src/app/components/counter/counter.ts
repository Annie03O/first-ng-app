import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-counter',
  styleUrl: './counter.scss',
  templateUrl: './counter.html',
})
export class Counter {
  counterValue = signal(0);


  increment() {
    this.counterValue.update((val) => val + 1); // Här uppdateras värde
  }


  decrement() {
   this.counterValue.update((val) => val - 1); // Här uppdateras värde
  }


  reset() {
    this.counterValue.set(0)
  }
}
