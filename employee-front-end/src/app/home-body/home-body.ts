import { Component } from '@angular/core';
import { Form } from './components/form/form';
import { TableView } from './components/table-view/table-view';

@Component({
  selector: 'app-home-body',
  imports: [Form, TableView],
  templateUrl: './home-body.html',
  styleUrl: './home-body.css',
})
export class HomeBody {}
