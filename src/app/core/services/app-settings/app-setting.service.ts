import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SettingsModel } from '../../models/settings-model';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable()
export class AppSettingService {
  settings!: SettingsModel;
  constructor(
    private localStorage: LocalStorageService,
    private http: HttpClient,
  ) { }


  getSetting(key: string) {
    if (this.settings === undefined) {
      this.loadSettings();
    }
  }

  setSetting() {}

  loadSettings() {
    const localSettings = this.localStorage.getItem('settings');
    if (localSettings !== null) {
      this.settings = JSON.parse(localSettings);
      return;
    }

  }
}
