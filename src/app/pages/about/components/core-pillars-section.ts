import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Pillar {
  id: string;
  title: string;
  icon: string;
  summary: string;
  fullContent: string;
  expanded: boolean;
}

@Component({
  selector: 'app-core-pillars-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="core-pillars" class="core-pillars-section">
      <div class="pillars-container">
        <h2 class="section-title">Our Core Pillars</h2>
        <p class="section-intro">Market Knowledge, Continuous Growth, and Win-Win Partnerships form the foundation of our success.</p>

        <div class="pillars-grid">
          <div *ngFor="let pillar of pillars" class="pillar-card" [class.expanded]="pillar.expanded">
            <div class="pillar-icon" [innerHTML]="pillar.icon"></div>
            <h3 class="pillar-title">{{ pillar.title }}</h3>
            <p class="pillar-summary">{{ pillar.summary }}</p>
            <div class="pillar-full" *ngIf="pillar.expanded">
              <p>{{ pillar.fullContent }}</p>
            </div>
            <button class="read-more-btn" (click)="togglePillar(pillar)">
              {{ pillar.expanded ? 'Show less' : 'Read more' }}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" [class.rotated]="pillar.expanded">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .core-pillars-section {
      background: linear-gradient(to bottom, #ffffff 0%, #EAF6FB 100%);
      padding: 80px 24px;
      scroll-margin-top: 100px;
    }

    .pillars-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #0c2440;
      margin: 0 0 16px;
      text-align: center;
      line-height: 1.2;
    }

    .section-intro {
      font-size: 1.125rem;
      line-height: 1.6;
      color: #4a5568;
      text-align: center;
      margin: 0 auto 56px;
      max-width: 70ch;
    }

    .pillars-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 32px;
    }

    .pillar-card {
      background: white;
      border-radius: 16px;
      padding: 40px 32px;
      box-shadow: 0 4px 16px rgba(12, 36, 64, 0.08);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .pillar-card::before {
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

    .pillar-card:hover {
      box-shadow: 0 12px 32px rgba(12, 36, 64, 0.12);
      transform: translateY(-8px);
    }

    .pillar-card:hover::before {
      transform: scaleX(1);
    }

    .pillar-icon {
      width: 64px;
      height: 64px;
      background: linear-gradient(135deg, #EAF6FB 0%, #ffffff 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #D4AF37;
      margin-bottom: 24px;
    }

    .pillar-icon :deep(svg) {
      width: 32px;
      height: 32px;
      stroke: currentColor;
    }

    .pillar-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: #0c2440;
      margin: 0 0 16px;
      line-height: 1.3;
    }

    .pillar-summary {
      font-size: 1rem;
      line-height: 1.7;
      color: #4a5568;
      margin: 0 0 20px;
    }

    .pillar-full {
      margin: 16px 0 20px;
      padding-top: 16px;
      border-top: 1px solid #EAF6FB;
    }

    .pillar-full p {
      font-size: 1rem;
      line-height: 1.7;
      color: #4a5568;
      margin: 0;
    }

    .read-more-btn {
      background: none;
      border: none;
      color: #D4AF37;
      font-size: 0.875rem;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 0;
      transition: all 0.2s ease;
    }

    .read-more-btn:hover {
      color: #0c2440;
      gap: 8px;
    }

    .read-more-btn svg {
      transition: transform 0.3s ease;
    }

    .read-more-btn svg.rotated {
      transform: rotate(180deg);
    }

    @media (max-width: 768px) {
      .core-pillars-section {
        padding: 56px 16px;
      }

      .section-title {
        font-size: 2rem;
      }

      .pillars-grid {
        grid-template-columns: 1fr;
        gap: 24px;
      }

      .pillar-card {
        padding: 32px 24px;
      }
    }
  `]
})
export class CorePillarsSection {
  pillars: Pillar[] = [
    {
      id: 'market-knowledge',
      title: 'Market Knowledge',
      icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>`,
      summary: 'Global insights with local expertise to match products with channels.',
      fullContent: 'Combining global insights with local expertise to match the right products with the right channels, supported by targeted marketing strategies.',
      expanded: false
    },
    {
      id: 'continuous-growth',
      title: 'Continuous Growth',
      icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
        <polyline points="17 6 23 6 23 12"/>
      </svg>`,
      summary: 'Adapting to markets and building mutually beneficial relationships.',
      fullContent: 'Adapting to changing markets and building strong, mutually beneficial relationships for sustainable success.',
      expanded: false
    },
    {
      id: 'win-win-partnerships',
      title: 'Win-Win Partnerships',
      icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>`,
      summary: 'Ensuring profitability and long-term trust across the value chain.',
      fullContent: 'Aligning with supplier goals to ensure profitability and long-term trust across the value chain.',
      expanded: false
    }
  ];

  togglePillar(pillar: Pillar) {
    pillar.expanded = !pillar.expanded;
  }
}
