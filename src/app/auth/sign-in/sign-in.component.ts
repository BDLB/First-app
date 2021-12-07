import { Component,
  OnInit, 
  OnDestroy, 
  ViewEncapsulation 
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth.service';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignInComponent implements OnInit {
  authForm: FormGroup;

  authentication: Subscription;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.authentication = this._authService.user.subscribe(
      (validUser) => {
        if(!!validUser) {
          this._router.navigate(['/queue'])
        }
    })

    this.authForm = this._formBuilder.group({
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.required, Validators.minLength(8)]] 
    })
  }

  onSubmit() {
    // Two types of extracting the formControls value
    const email = this.authForm.get("email").value;
    const password = this.authForm.value.password;

    this._authService.signIn(email, password).subscribe(
      () => {
        
      },
      (error) => {
        console.log(error)
      }
    )
    this.authForm.reset();
  }

}
