import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-lang-switcher',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="lang-switcher">
      <button 
        *ngFor="let lang of availableLanguages" 
        class="lang-btn"
        [class.active]="currentLanguage === lang"
        (click)="switchLanguage(lang)"
        [attr.aria-label]="'Switch to ' + lang.toUpperCase()">
        {{ lang.toUpperCase() }}
      </button>
    </div>
  `,
  styles: [`
    .lang-switcher {
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .lang-btn {
      background: transparent;
      border: 1px solid rgba(12, 36, 64, 0.3);
      color: #0c2440;
      padding: 6px 12px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 12px;
      font-weight: 500;
      transition: all 0.3s ease;
      min-width: 40px;
    }

    .lang-btn:hover {
      background: rgba(12, 36, 64, 0.1);
      border-color: rgba(12, 36, 64, 0.5);
    }

    .lang-btn.active {
      background: rgba(12, 36, 64, 0.2);
      border-color: rgba(12, 36, 64, 0.6);
      font-weight: 600;
    }

    /* Mobile responsiveness */
    @media (max-width: 768px) {
      .lang-switcher {
        gap: 4px;
      }
      
      .lang-btn {
        padding: 4px 8px;
        font-size: 11px;
        min-width: 35px;
      }
    }

    /* RTL adjustments */
    [dir="rtl"] .lang-switcher {
      flex-direction: row-reverse;
    }
  `]
})
export class LangSwitcherComponent {
  availableLanguages: string[] = [];
  currentLanguage: string = 'en';

  constructor(private languageService: LanguageService) {
    this.availableLanguages = this.languageService.getAvailableLanguages();
    this.currentLanguage = this.languageService.getCurrent();
    
    // Subscribe to language changes
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  switchLanguage(lang: string): void {
    this.languageService.use(lang);
  }
}
