import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService, Language } from '../../services/language.service';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-switcher.html',
  styleUrls: ['./language-switcher.css']
})
export class LanguageSwitcherComponent {
  public isOpen = false;

  constructor(public languageService: LanguageService) {}

  public toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  public selectLanguage(langCode: string): void {
    this.languageService.setLanguage(langCode);
    this.isOpen = false;
  }

  public closeDropdown(): void {
    this.isOpen = false;
  }
}
