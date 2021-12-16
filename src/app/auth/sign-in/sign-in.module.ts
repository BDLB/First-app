import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { SharedModule } from 'src/app/shared/shared.module';
import { SignInRoutes } from './sign-in.routing-module';
import { SignInComponent } from './sign-in.component';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    RouterModule.forChild(SignInRoutes),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    SharedModule,
    MatCheckboxModule
  ],
})
export class SignInModule {}
