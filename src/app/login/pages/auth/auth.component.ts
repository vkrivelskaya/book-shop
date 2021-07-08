import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent implements OnInit {
  checkoutForm: FormGroup;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.authService.logout();
    this.checkoutForm = new FormGroup({});
    this.checkoutForm = this.formBuilder.group({
      login: '',
      password: '',
    });
    this.returnUrl = this.getUrl();
  }

  getUrl(): string {
    return this.route.snapshot.queryParams.returnUrl || '/';
  }

  onSubmit(): void {
    const { login, password } = this.checkoutForm.value;

    this.authService.login(login, password);
    this.router.navigateByUrl(this.returnUrl);
  }
}
