import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { LayoutModule } from 'src/app/shared/layout/layout.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    LayoutModule,
    FontAwesomeModule
  ],
  declarations: [
    RegisterComponent,
    RegisterFormComponent
  ]
})
export class RegisterModule { }
