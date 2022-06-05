import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  FormsModule,
  MatAutocompleteModule,
  ReactiveFormsModule,
];

const SHARED_MODULES = [CommonModule, ...MATERIAL_MODULES];
const SHARED_COMPONENTS = [];

@NgModule({
  declarations: [
    /*...SHARED_COMPONENTS*/
  ],
  imports: [...SHARED_MODULES],
  exports: [...SHARED_MODULES /*, ...SHARED_COMPONENTS*/],
})
export class SharedModule {}
