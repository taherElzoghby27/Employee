import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppBar } from './app-bar/app-bar';
import { Form } from './home-body/components/form/form';
import { TableView } from './home-body/components/table-view/table-view';
import { HomeBody } from './home-body/home-body';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppBar, HomeBody],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('employee-front-end');
}
