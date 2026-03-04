import { Component, signal } from '@angular/core';
import { form, submit } from '@angular/forms/signals';
import { FieldForm } from '../field-form/field-form';
import { SelectField } from '../select-field/select-field';

interface EmployeeModel {
  employeeCode: string;
  employeeName: string;
  birthDate: string;
  birthCity: string;
  employeeId: string;
  department: string;
  jobTitle: string;
  directManager: string;
  contractType: string;
  status: string;
}

@Component({
  selector: 'app-form',
  imports: [FieldForm, SelectField],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  // Select options
  cities = ['Cairo', 'Alexandria', 'Giza', 'Luxor', 'Aswan', 'Port Said'];
  departments = [
    'Human Resources',
    'Information Technology',
    'Finance',
    'Operations',
    'Marketing',
    'Legal',
  ];
  contractTypes = ['Full-Time', 'Part-Time', 'Contract'];
  statuses = ['Active', 'Inactive'];

  // Employee model with dummy data
  employeeModel = signal<EmployeeModel>({
    employeeCode: 'EMP-001',
    employeeName: 'John Doe',
    birthDate: '1990-06-15',
    birthCity: 'Cairo',
    employeeId: 'ID-2024-001',
    department: 'Information Technology',
    jobTitle: 'Software Engineer',
    directManager: 'Jane Smith',
    contractType: 'Full-Time',
    status: 'Active',
  });

  employeeForm = form(this.employeeModel, (f) => {});

  onSubmit(event: Event) {
    event.preventDefault();
    submit(this.employeeForm, {
      action: async (value) => {
        console.log('Employee Data:', value);
      },
    }).then(() => {});
  }
}
