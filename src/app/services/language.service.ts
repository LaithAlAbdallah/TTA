import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly STORAGE_KEY = 'tta_lang';
  private readonly AVAILABLE_LANGUAGES = ['en', 'ar', 'ru'];
  private readonly DEFAULT_LANGUAGE = 'en';
  
  private currentLanguageSubject = new BehaviorSubject<string>(this.DEFAULT_LANGUAGE);
  public currentLanguage$ = this.currentLanguageSubject.asObservable();

  constructor(private translate: TranslateService) {
    this.initializeLanguage();
  }

  private initializeLanguage(): void {
    // Get saved language from localStorage
    const savedLanguage = localStorage.getItem(this.STORAGE_KEY);
    const languageToUse = savedLanguage && this.AVAILABLE_LANGUAGES.includes(savedLanguage) 
      ? savedLanguage 
      : this.DEFAULT_LANGUAGE;

    this.setLanguage(languageToUse);
  }

  getCurrent(): string {
    return this.currentLanguageSubject.value;
  }

  use(lang: string): void {
    if (this.AVAILABLE_LANGUAGES.includes(lang)) {
      this.setLanguage(lang);
      localStorage.setItem(this.STORAGE_KEY, lang);
    }
  }

  private setLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLanguageSubject.next(lang);
    
    // Set document language and direction
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

  getAvailableLanguages(): string[] {
    return [...this.AVAILABLE_LANGUAGES];
  }

  isRTL(): boolean {
    return this.getCurrent() === 'ar';
  }
}
