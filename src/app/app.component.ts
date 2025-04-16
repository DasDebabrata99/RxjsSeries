import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PromiseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RxjsSeries';
}
