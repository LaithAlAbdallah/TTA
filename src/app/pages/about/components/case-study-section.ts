import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-case-study-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section id="case-study" class="case-study-section">
      <div class="case-study-container">
        <h2 class="section-title">{{ 'ABOUT.CASE_STUDY_MEGA_PRIME.TITLE' | translate }}</h2>

        <div class="case-blocks">
          <article class="case-block">
            <h3 class="block-label">{{ 'ABOUT.CASE_STUDY_MEGA_PRIME.CHALLENGE_LABEL' | translate }}</h3>
            <p>{{ 'ABOUT.CASE_STUDY_MEGA_PRIME.CHALLENGE' | translate }}</p>
          </article>

          <article class="case-block">
            <h3 class="block-label">{{ 'ABOUT.CASE_STUDY_MEGA_PRIME.ACTION_LABEL' | translate }}</h3>
            <p>{{ 'ABOUT.CASE_STUDY_MEGA_PRIME.ACTION' | translate }}</p>
          </article>

          <article class="case-block highlight">
            <h3 class="block-label">{{ 'ABOUT.CASE_STUDY_MEGA_PRIME.RESULT_LABEL' | translate }}</h3>
            <p>{{ 'ABOUT.CASE_STUDY_MEGA_PRIME.RESULT' | translate }}</p>
          </article>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .case-study-section {
      background: white;
      padding: 80px 24px;
      scroll-margin-top: 100px;
    }

    .case-study-container {
      max-width: 1000px;
      margin: 0 auto;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #0c2440;
      margin: 0 0 48px;
      text-align: center;
      line-height: 1.2;
    }

    .case-blocks {
      display: grid;
      gap: 24px;
    }

    .case-block {
      background: #EAF6FB;
      border-radius: 12px;
      padding: 32px;
      border-left: 4px solid #D4AF37;
    }

    .case-block.highlight {
      background: linear-gradient(135deg, #0c2440 0%, #1a3a5c 100%);
      border-left-color: #D4AF37;
    }

    .case-block.highlight .block-label,
    .case-block.highlight p {
      color: white;
    }

    .block-label {
      font-size: 0.875rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #D4AF37;
      margin: 0 0 12px;
    }

    .case-block p {
      font-size: 1.125rem;
      line-height: 1.8;
      color: #4a5568;
      margin: 0;
      max-width: 70ch;
    }

    @media (max-width: 768px) {
      .case-study-section {
        padding: 56px 16px;
      }

      .section-title {
        font-size: 2rem;
        margin-bottom: 32px;
      }

      .case-block {
        padding: 24px;
      }

      .case-block p {
        font-size: 1rem;
      }
    }
  `]
})
export class CaseStudySection {}
