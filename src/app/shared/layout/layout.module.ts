import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextFieldComponent } from './components/fields/text-field/text-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { TextAreaFieldComponent } from './components/fields/text-area-field/text-area-field.component';
import { AvatarComponent } from './components/avatar/avatar.component';

const components = [
  TextFieldComponent,
  TextAreaFieldComponent,
  AvatarComponent
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxMaskModule.forRoot()
  ],
  declarations: components,
  exports: components
})
export class LayoutModule { }
