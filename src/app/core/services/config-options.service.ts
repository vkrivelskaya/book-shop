import { Injectable } from '@angular/core';
import { ConfigOptions } from '../models/config-options';

@Injectable({
  providedIn: 'root',
})

export class ConfigOptionsService {
  configOptions: ConfigOptions;

  constructor() {
    this.configOptions = {};
  }

  setOptions({ id, login, email }: ConfigOptions) {
    if(id) {
      this.configOptions.id = id;
    }

    if(login) {
      this.configOptions.login = login;
    }

    if(email) {
      this.configOptions.email = email;
    }
  }

  getOptions(): ConfigOptions {
    return this.configOptions;
  }
}
