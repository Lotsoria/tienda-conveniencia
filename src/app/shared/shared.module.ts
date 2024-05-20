import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    HeaderComponent,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
