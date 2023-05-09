import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalCounterComponent } from './signal-counter/signal-counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SignalCounterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
