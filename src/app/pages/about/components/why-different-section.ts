import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-why-different-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section id="why-different" class="why-different-section">
      <div class="why-different-container">
        <h2 class="section-title">{{ 'ABOUT.WHY_DIFFERENT.TITLE' | translate }}</h2>
        <p class="section-subtitle">{{ 'ABOUT.WHY_DIFFERENT.SUBTITLE' | translate }}</p>

        <div class="why-content">
          <p class="intro">{{ 'ABOUT.WHY_DIFFERENT.INTRO' | translate }}</p>
          <p class="neither">{{ 'ABOUT.WHY_DIFFERENT.NEITHER' | translate }}</p>
          <p class="broker">{{ 'ABOUT.WHY_DIFFERENT.BROKER' | translate }}</p>
          <p class="closing">{{ 'ABOUT.WHY_DIFFERENT.CLOSING' | translate }}</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .why-different-section {
      background: linear-gradient(to bottom, #EAF6FB 0%, #ffffff 100%);
      padding: 80px 24px;
      scroll-margin-top: 100px;
    }

    .why-different-container {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #0c2440;
      margin: 0 0 12px;
      line-height: 1.2;
    }

    .section-subtitle {
      font-size: 1.15rem;
      font-weight: 600;
      color: #D4AF37;
      margin: 0 0 40px;
      line-height: 1.4;
    }

    .why-content p {
      font-size: 1.125rem;
      line-height: 1.8;
      color: #4a5568;
      margin: 0 0 24px;
    }

    .neither {
      font-size: 1.5rem !important;
      font-weight: 700;
      color: #0c2440 !important;
      margin: 32px 0 !important;
    }

    .broker {
      max-width: 65ch;
      margin-left: auto !important;
      margin-right: auto !important;
    }

    .closing {
      font-size: 1.35rem !important;
      font-weight: 700;
      color: #D4AF37 !important;
      margin: 40px 0 0 !important;
    }

    @media (max-width: 768px) {
      .why-different-section {
        padding: 56px 16px;
      }

      .section-title {
        font-size: 2rem;
      }

      .section-subtitle {
        font-size: 1rem;
        margin-bottom: 32px;
      }

      .why-content p {
        font-size: 1rem;
      }

      .neither {
        font-size: 1.25rem !important;
      }

      .closing {
        font-size: 1.15rem !important;
      }
    }
  `]
})
export class WhyDifferentSection {}
