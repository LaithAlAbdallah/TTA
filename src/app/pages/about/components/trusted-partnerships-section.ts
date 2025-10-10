import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-trusted-partnerships-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section id="trusted-partnerships" class="partnerships-section">
      <div class="partnerships-container">
        <h2 class="section-title">{{ 'ABOUT.TRUSTED_PARTNERSHIPS.TITLE' | translate }}</h2>
        <p class="section-intro">{{ 'ABOUT.TRUSTED_PARTNERSHIPS.DESCRIPTION' | translate }}</p>

        <div class="partnerships-grid">
          <div class="partnership-highlight">
            <div class="highlight-badge">{{ 'ABOUT.TRUSTED_PARTNERSHIPS.PARTNERSHIPS.0.TITLE' | translate }}</div>
            <h3 class="highlight-title">{{ 'ABOUT.TRUSTED_PARTNERSHIPS.PARTNERSHIPS.0.COMPANY' | translate }}</h3>
            <p class="highlight-description">{{ 'ABOUT.TRUSTED_PARTNERSHIPS.PARTNERSHIPS.0.DESCRIPTION' | translate }}</p>
            <div class="highlight-result">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>{{ 'ABOUT.TRUSTED_PARTNERSHIPS.PARTNERSHIPS.0.ACHIEVEMENT' | translate }}</span>
            </div>
          </div>

          <div class="partnership-highlight">
            <div class="highlight-badge">{{ 'ABOUT.TRUSTED_PARTNERSHIPS.PARTNERSHIPS.1.TITLE' | translate }}</div>
            <h3 class="highlight-title">{{ 'ABOUT.TRUSTED_PARTNERSHIPS.PARTNERSHIPS.1.COMPANY' | translate }}</h3>
            <p class="highlight-description">{{ 'ABOUT.TRUSTED_PARTNERSHIPS.PARTNERSHIPS.1.DESCRIPTION' | translate }}</p>
            <div class="highlight-result">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>{{ 'ABOUT.TRUSTED_PARTNERSHIPS.PARTNERSHIPS.1.ACHIEVEMENT' | translate }}</span>
            </div>
          </div>
        </div>

        <div class="industry-list">
          <h3 class="list-title">{{ 'ABOUT.TRUSTED_PARTNERSHIPS.INDUSTRIES_SECTION.TITLE' | translate }}</h3>
          <div class="industry-tags">
            <div class="industry-tag">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="3" width="7" height="7"/>
                <rect x="14" y="3" width="7" height="7"/>
                <rect x="14" y="14" width="7" height="7"/>
                <rect x="3" y="14" width="7" height="7"/>
              </svg>
              <span>{{ 'ABOUT.TRUSTED_PARTNERSHIPS.INDUSTRIES_SECTION.INDUSTRIES.0' | translate }}</span>
            </div>
            <div class="industry-tag">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              </svg>
              <span>{{ 'ABOUT.TRUSTED_PARTNERSHIPS.INDUSTRIES_SECTION.INDUSTRIES.1' | translate }}</span>
            </div>
            <div class="industry-tag">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              <span>{{ 'ABOUT.TRUSTED_PARTNERSHIPS.INDUSTRIES_SECTION.INDUSTRIES.2' | translate }}</span>
            </div>
            <div class="industry-tag">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4"/>
                <path d="M12 8h.01"/>
              </svg>
              <span>{{ 'ABOUT.TRUSTED_PARTNERSHIPS.INDUSTRIES_SECTION.INDUSTRIES.3' | translate }}</span>
            </div>
            <div class="industry-tag">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
              <span>{{ 'ABOUT.TRUSTED_PARTNERSHIPS.INDUSTRIES_SECTION.INDUSTRIES.4' | translate }}</span>
            </div>
            <div class="industry-tag">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5"/>
              </svg>
              <span>{{ 'ABOUT.TRUSTED_PARTNERSHIPS.INDUSTRIES_SECTION.INDUSTRIES.5' | translate }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .partnerships-section {
      background: white;
      padding: 80px 24px;
      scroll-margin-top: 100px;
    }

    .partnerships-container {
      max-width: 1200px;
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
      margin: 0 auto 56px;
      max-width: 70ch;
    }

    .partnerships-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 32px;
      margin-bottom: 64px;
    }

    .partnership-highlight {
      background: linear-gradient(135deg, #EAF6FB 0%, #ffffff 100%);
      border: 2px solid #EAF6FB;
      border-radius: 16px;
      padding: 40px;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .partnership-highlight::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, #D4AF37 0%, #f0d06f 100%);
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }

    .partnership-highlight:hover {
      border-color: #D4AF37;
      box-shadow: 0 12px 32px rgba(212, 175, 55, 0.15);
      transform: translateY(-8px);
    }

    .partnership-highlight:hover::before {
      transform: scaleX(1);
    }

    .highlight-badge {
      display: inline-block;
      background: #0c2440;
      color: white;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 6px 16px;
      border-radius: 20px;
      margin-bottom: 20px;
    }

    .highlight-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #0c2440;
      margin: 0 0 16px;
      line-height: 1.3;
    }

    .highlight-description {
      font-size: 1rem;
      line-height: 1.7;
      color: #4a5568;
      margin: 0 0 24px;
    }

    .highlight-result {
      display: flex;
      align-items: center;
      gap: 12px;
      background: white;
      border-left: 3px solid #D4AF37;
      padding: 12px 16px;
      border-radius: 8px;
    }

    .highlight-result svg {
      color: #D4AF37;
      flex-shrink: 0;
    }

    .highlight-result span {
      font-size: 0.95rem;
      font-weight: 600;
      color: #0c2440;
    }

    .industry-list {
      background: linear-gradient(135deg, #0c2440 0%, #1a3a5c 100%);
      border-radius: 16px;
      padding: 48px;
    }

    .list-title {
      font-size: 1.75rem;
      font-weight: 700;
      color: white;
      margin: 0 0 32px;
      text-align: center;
      line-height: 1.3;
    }

    .industry-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: center;
    }

    .industry-tag {
      display: flex;
      align-items: center;
      gap: 10px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(212, 175, 55, 0.3);
      border-radius: 30px;
      padding: 12px 24px;
      transition: all 0.3s ease;
      cursor: default;
    }

    .industry-tag:hover {
      background: rgba(212, 175, 55, 0.2);
      border-color: #D4AF37;
      transform: scale(1.05);
    }

    .industry-tag svg {
      color: #D4AF37;
      flex-shrink: 0;
    }

    .industry-tag span {
      font-size: 0.95rem;
      font-weight: 600;
      color: white;
    }

    @media (max-width: 768px) {
      .partnerships-section {
        padding: 56px 16px;
      }

      .section-title {
        font-size: 2rem;
      }

      .section-intro {
        font-size: 1rem;
      }

      .partnerships-grid {
        grid-template-columns: 1fr;
      }

      .partnership-highlight {
        padding: 32px 24px;
      }

      .industry-list {
        padding: 32px 24px;
      }

      .list-title {
        font-size: 1.5rem;
      }
    }
  `]
})
export class TrustedPartnershipsSection {}
