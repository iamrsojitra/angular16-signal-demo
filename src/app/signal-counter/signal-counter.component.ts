import { Component, Input, OnInit, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signal-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signal-counter.component.html',
  styleUrls: ['./signal-counter.component.scss']
})
export class SignalCounterComponent implements OnInit {
  @Input({ required: true }) title: string = '';
  counter = signal(0);
  logs = signal<string[]>([]);
  computedCounter = computed(() => {
    return this.counter() * 2;
  });


  /**
   * This is a constructor function that logs the value of the "counter" property whenever it changes.
   */
  constructor() {
    /* creates a side effect that runs whenever the `counter` value changes. In this case, it logs the 
    current value of the `counter` to the console. This is useful for debugging and 
    monitoring changes to reactive values. */
    effect(() => {
      console.log('effect counter', this.counter());
    });

    /* creates a side effect that runs whenever the `computedCounter` value changes. In this case, it logs the
    current value of the `computedCounter` to the console. This is useful for debugging and
    monitoring changes to reactive values. */
    effect(() => {
      console.log('effect computedCounter', this.computedCounter());
    });
  }

  ngOnInit(): void {
    console.log('Required Input - ', this.title);
  }

  /**
   * This function decrements a counter and logs the action.
   */
  decrement() {
    this.counter.update((oldCounter) => oldCounter - 1);
    this.logs.mutate((oldLogs) => oldLogs.push('Decrement'));
  }

  /**
   * The function decrements a counter and adds a log entry for an increment action.
   */
  increment() {
    this.counter.update((oldCounter) => oldCounter + 1);
    this.logs.mutate((oldLogs) => oldLogs.push('Increment'));
  }

  /**
   * This is a TypeScript function that returns the index of an array element to be used as a unique
   * identifier for tracking purposes.
   * @param {number} index - The index parameter is a number that represents the current index of the
   * item in the array being iterated over.
   * @param {string} _ - The underscore symbol (_) is a convention used in programming to indicate that
   * a parameter is not being used or referenced in the function. In this case, the second parameter is
   * a string that is not being used in the function, so the underscore is used to indicate that it is
   * not important.
   * @returns The `trackBy` function is returning the `index` parameter, which is a number. This
   * function is typically used in Angular to improve performance when rendering lists by providing a
   * unique identifier for each item in the list.
   */
  trackBy(index: number, _: string): number {
    return index;
  }
}
