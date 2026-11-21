import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-greeting',
  standalone: true,
  styleUrl: './greeting.scss',
  templateUrl: './greeting.html',
})
export class Greeting {
  message = input("Default greeting message")
}
