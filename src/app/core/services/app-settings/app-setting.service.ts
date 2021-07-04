import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { retry } from 'rxjs/operators';

import { defaultSettings } from '../../constants/settings';
import { SettingsModel } from '../../models/settings-model';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable()
export class AppSettingService {
  jsonURL = 'assets/app-settings.json';
  settings: SettingsModel = defaultSettings;
  constructor(
    private localStorage: LocalStorageService,
    private http: HttpClient,
  ) { }


  getSetting(key: string): any {
    return this.settings[key as keyof SettingsModel];
  }

  saveSettings() {
    const localSettings = JSON.stringify(this.settings);
    this.localStorage.setItem('settings', localSettings);
  }

  loadSettings(): Observable<any> {
    return new Observable((observer: Observer<any>) => {
      const localSettings = this.localStorage.getItem('settings');
      const defaultSettingsKeys = Object.keys(defaultSettings);

      let missedSettings = Object.keys(this.settings);

      if (localSettings !== null) {
        const parsedLocalSettings = JSON.parse(localSettings);
        this.settings = Object.assign(defaultSettings, parsedLocalSettings);

        const localStorageSettingsKeys = Object.keys(parsedLocalSettings);
        missedSettings = defaultSettingsKeys
          .filter((el) => !localStorageSettingsKeys.includes(el));
      }

      if(missedSettings.length === 0) {
        observer.complete();
      } else {
        this.getJSON().subscribe((data) => {
          missedSettings.map(el => {
            if (data[el] !== undefined) {
              (this.settings[el as keyof SettingsModel] as any) = data[el];
            }
          });
          observer.complete();
        });
      }
    });
  }

  getJSON(): Observable<any> {
    return this.http.get(this.jsonURL).pipe(
      retry(2),
    );
  }
}
