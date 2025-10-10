import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface Language {
  code: string;
  name: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly STORAGE_KEY = 'selectedLanguage';

  public readonly languages: Language[] = [
    { code: 'en', name: 'English', flag: 'assets/images/flags/usa.png', dir: 'ltr' },
    { code: 'ar', name: 'العربية', flag: 'assets/images/flags/uae.png', dir: 'rtl' },
    { code: 'ru', name: 'Русский', flag: 'assets/images/flags/russia.png', dir: 'ltr' }
  ];

  public currentLanguage: Language;

  constructor(private translate: TranslateService) {
    this.translate.addLangs(this.languages.map(lang => lang.code));
    this.translate.setDefaultLang('en');

    const savedLang = this.getSavedLanguage();
    this.currentLanguage = this.languages.find(lang => lang.code === savedLang) || this.languages[0];
    this.setLanguage(this.currentLanguage.code);
  }

  private getSavedLanguage(): string {
    return localStorage.getItem(this.STORAGE_KEY) || 'en';
  }

  public setLanguage(langCode: string): void {
    const language = this.languages.find(lang => lang.code === langCode);
    if (!language) return;

    this.currentLanguage = language;
    this.translate.use(langCode);
    localStorage.setItem(this.STORAGE_KEY, langCode);

    document.documentElement.setAttribute('lang', langCode);
    document.documentElement.setAttribute('dir', language.dir);
    document.body.setAttribute('dir', language.dir);
  }

  public getCurrentLanguage(): Language {
    return this.currentLanguage;
  }
}
