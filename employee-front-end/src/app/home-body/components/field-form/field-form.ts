import { Component, Input } from '@angular/core';
import { Field, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-field-form',
  imports: [FormField],
  templateUrl: './field-form.html',
  styleUrl: './field-form.css',
})
export class FieldForm {
  @Input() label!: string;
  @Input() field!: Field<string>;
  @Input() type!: string;
}
