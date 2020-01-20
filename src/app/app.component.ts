import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();
  suppliedText = '';
  onInput(value: string) {
    this.suppliedText = value;
  }
  compare(randomLetter: string, suppliedLetter: string) {
    if (!suppliedLetter) {
      return 'pending';
    }
    return randomLetter === suppliedLetter ? 'correct' : 'incorrect';
  }
}
