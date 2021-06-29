import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  checkoutForm = new FormGroup({});
  returnUrl!: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.authService.logout();
    this.checkoutForm = this.formBuilder.group({
      login: '',
      password: '',
    });
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  onSubmit(): void {
    const formValue: any = this.checkoutForm.value;
    this.authService.login(formValue.login, formValue.password);
    this.router.navigateByUrl(this.returnUrl);
  }
}
