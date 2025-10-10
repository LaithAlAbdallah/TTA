import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-role-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section id="about-us-and-role" class="about-role-section">
      <div class="about-role-container">
        <div class="content-grid">
          <div class="text-content">
            <h2 class="section-title">{{ 'ABOUT.ABOUT_ROLE.TITLE' | translate }}</h2>
            <p class="first-paragraph">{{ 'ABOUT.ABOUT_ROLE.DESCRIPTION' | translate }}</p>
            <p>{{ 'ABOUT.ABOUT_ROLE.STATISTICS' | translate }}</p>
          </div>
          <div class="visual-content">
            <div class="visual-illustration">
              <svg viewBox="0 0 400 300" class="business-illustration">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#0c2440;stop-opacity:0.1" />
                    <stop offset="100%" style="stop-color:#D4AF37;stop-opacity:0.2" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="150" r="60" fill="url(#grad1)" opacity="0.6"/>
                <circle cx="200" cy="150" r="60" fill="url(#grad1)" opacity="0.6"/>
                <circle cx="300" cy="150" r="60" fill="url(#grad1)" opacity="0.6"/>
                <path d="M 160 150 L 240 150" stroke="#D4AF37" stroke-width="3" stroke-dasharray="5,5"/>
                <text x="100" y="155" text-anchor="middle" fill="#0c2440" font-size="14" font-weight="600">{{ 'ABOUT.ABOUT_ROLE.DIAGRAM_LABELS.MANUFACTURERS' | translate }}</text>
                <text x="200" y="155" text-anchor="middle" fill="#0c2440" font-size="14" font-weight="600">{{ 'ABOUT.ABOUT_ROLE.DIAGRAM_LABELS.TTA' | translate }}</text>
                <text x="300" y="155" text-anchor="middle" fill="#0c2440" font-size="14" font-weight="600">{{ 'ABOUT.ABOUT_ROLE.DIAGRAM_LABELS.MARKETS' | translate }}</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-role-section {
      background: white;
      padding: 80px 24px;
      scroll-margin-top: 100px;
    }

    .about-role-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .content-grid {
      display: grid;
      grid-template-columns: 1fr 400px;
      gap: 64px;
      align-items: start;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #0c2440;
      margin: 0 0 32px;
      line-height: 1.2;
    }

    .ampersand {
      color: #D4AF37;
      font-weight: 800;
    }

    .text-content p {
      font-size: 1.125rem;
      line-height: 1.8;
      color: #4a5568;
      margin: 0 0 24px;
      max-width: 70ch;
    }

    .first-paragraph {
      position: relative;
    }


    .visual-content {
      position: sticky;
      top: 120px;
    }


    .visual-illustration {
      background: linear-gradient(135deg, #EAF6FB 0%, #ffffff 100%);
      border-radius: 12px;
      padding: 24px;
    }

    .business-illustration {
      width: 100%;
      height: auto;
    }

    @media (max-width: 1024px) {
      .content-grid {
        grid-template-columns: 1fr;
        gap: 48px;
      }

      .visual-content {
        position: static;
      }

    }

    @media (max-width: 768px) {
      .about-role-section {
        padding: 56px 16px;
      }

      .section-title {
        font-size: 2rem;
      }

      .text-content p {
        font-size: 1rem;
      }


    }
  `]
})
export class AboutRoleSection {}
