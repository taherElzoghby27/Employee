import { Component, Input } from '@angular/core';
import { Field, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-select-field',
  imports: [FormField],
  templateUrl: './select-field.html',
  styleUrl: './select-field.css',
})
export class SelectField {
  @Input() label!: string;
  @Input() labelHint!: string;
  @Input() field!: Field<string>;
  @Input() selectValues!: string[];
}
