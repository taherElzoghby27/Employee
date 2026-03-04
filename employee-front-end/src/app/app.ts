import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppBar } from './app-bar/app-bar';
import { Form } from './form/form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppBar, Form],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('employee-front-end');
}
