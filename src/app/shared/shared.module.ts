import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_MODULES = [MatButtonModule];

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
