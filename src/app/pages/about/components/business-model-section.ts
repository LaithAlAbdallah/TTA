import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-business-model-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section id="business-model" class="business-model-section">
      <div class="model-container">
        <h2 class="section-title">{{ 'ABOUT.BUSINESS_MODEL.0' | translate }}</h2>
        <p class="section-intro">{{ 'ABOUT.BUSINESS_MODEL.1' | translate }}</p>

        <div class="process-flow">
          <div class="flow-step">
            <div class="step-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              </svg>
            </div>
            <h3 class="step-title">{{ 'ABOUT.BUSINESS_MODEL.2' | translate }}</h3>
            <p class="step-description">{{ 'ABOUT.BUSINESS_MODEL.3' | translate }}</p>
          </div>

          <div class="flow-arrow">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </div>

          <div class="flow-step">
            <div class="step-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3 class="step-title">{{ 'ABOUT.BUSINESS_MODEL.4' | translate }}</h3>
            <p class="step-description">{{ 'ABOUT.BUSINESS_MODEL.5' | translate }}</p>
          </div>

          <div class="flow-arrow">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </div>

          <div class="flow-step">
            <div class="step-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
            </div>
            <h3 class="step-title">{{ 'ABOUT.BUSINESS_MODEL.6' | translate }}</h3>
            <p class="step-description">{{ 'ABOUT.BUSINESS_MODEL.7' | translate }}</p>
          </div>

          <div class="flow-arrow">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </div>

          <div class="flow-step">
            <div class="step-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h3 class="step-title">{{ 'ABOUT.BUSINESS_MODEL.8' | translate }}</h3>
            <p class="step-description">{{ 'ABOUT.BUSINESS_MODEL.9' | translate }}</p>
          </div>

          <div class="flow-arrow">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </div>

          <div class="flow-step">
            <div class="step-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 class="step-title">Support</h3>
            <p class="step-description">Ensure consistent supply, cost efficiency, and outstanding service</p>
          </div>
        </div>

        <div class="value-proposition">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1z"/>
            <path d="M12 2C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>
            <path d="M12 6v6"/>
            <path d="M9 9h6"/>
          </svg>
          <p class="value-text">At TTA, we don't just distribute products—we create markets.</p>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .business-model-section {
      background: linear-gradient(to bottom, #EAF6FB 0%, #ffffff 100%);
      padding: 80px 24px;
      scroll-margin-top: 100px;
    }

    .model-container {
      max-width: 1400px;
      margin: 0 auto;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #0c2440;
      margin: 0 0 24px;
      text-align: center;
      line-height: 1.2;
    }

    .section-intro {
      font-size: 1.125rem;
      line-height: 1.8;
      color: #4a5568;
      text-align: center;
      margin: 0 auto 64px;
      max-width: 80ch;
    }

    .process-flow {
      display: flex;
      align-items: stretch;
      gap: 0;
      margin-bottom: 56px;
      overflow-x: auto;
      padding: 24px 0;
    }

    .flow-step {
      flex: 1;
      min-width: 180px;
      background: white;
      border-radius: 16px;
      padding: 32px 24px;
      box-shadow: 0 4px 16px rgba(12, 36, 64, 0.08);
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .flow-step:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 32px rgba(12, 36, 64, 0.12);
    }

    .step-icon {
      width: 72px;
      height: 72px;
      background: linear-gradient(135deg, #D4AF37 0%, #f0d06f 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      margin-bottom: 20px;
    }

    .step-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: #0c2440;
      margin: 0 0 12px;
      line-height: 1.3;
    }

    .step-description {
      font-size: 0.95rem;
      line-height: 1.6;
      color: #4a5568;
      margin: 0;
    }

    .flow-arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      color: #D4AF37;
      padding: 0 8px;
    }

    .value-proposition {
      background: linear-gradient(135deg, #0c2440 0%, #1a3a5c 100%);
      border-radius: 16px;
      padding: 48px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }

    .value-proposition svg {
      color: #D4AF37;
    }

    .value-text {
      font-size: 1.75rem;
      font-weight: 600;
      color: white;
      margin: 0;
      line-height: 1.5;
      max-width: 60ch;
    }

    @media (max-width: 1200px) {
      .process-flow {
        flex-wrap: wrap;
        justify-content: center;
      }

      .flow-arrow {
        display: none;
      }

      .flow-step {
        min-width: 240px;
      }
    }

    @media (max-width: 768px) {
      .business-model-section {
        padding: 56px 16px;
      }

      .section-title {
        font-size: 2rem;
      }

      .section-intro {
        font-size: 1rem;
      }

      .flow-step {
        min-width: 100%;
      }

      .value-proposition {
        padding: 32px 24px;
      }

      .value-text {
        font-size: 1.375rem;
      }
    }
  `]
})
export class BusinessModelSection {}
