import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { FooterComponent } from './components/footer/footer';
import { LanguageService } from './services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="app">
      <app-header></app-header>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
  `]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'TTA - The Turnaround Artists';
  private languageSubscription?: Subscription;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    // Subscribe to language changes for any additional handling if needed
    this.languageSubscription = this.languageService.currentLanguage$.subscribe(lang => {
      // Language change handling is already done in LanguageService
      // This subscription is here for any additional app-level handling if needed
    });
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }
}
