import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Principal {
  id: string;
  name: string;
  industry: string;
  description: string;
  expanded: boolean;
}

@Component({
  selector: 'app-principals-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="principals" class="principals-section">
      <div class="principals-container">
        <h2 class="section-title">Our Principals</h2>
        <p class="section-intro">TTA's strength lies in trusted partnerships with world-class distributors and strategic principals. We know what to look for in top-tier distributors and how to design cost-effective routes-to-market that benefit all parties.</p>

        <div class="principals-intro-card">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          <p>Some of the key global principals we work with include:</p>
        </div>

        <div class="principals-chips">
          <div *ngFor="let principal of principals"
               class="principal-chip"
               [class.expanded]="principal.expanded"
               (click)="togglePrincipal(principal)">
            <div class="chip-header">
              <div class="chip-info">
                <h3 class="chip-name">{{ principal.name }}</h3>
                <span class="chip-industry">{{ principal.industry }}</span>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" [class.rotated]="principal.expanded">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </div>
            <div class="chip-description" *ngIf="principal.expanded">
              <p>{{ principal.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .principals-section {
      background: linear-gradient(to bottom, #EAF6FB 0%, #ffffff 100%);
      padding: 80px 24px;
      scroll-margin-top: 100px;
    }

    .principals-container {
      max-width: 1000px;
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
      margin: 0 auto 48px;
      max-width: 70ch;
    }

    .principals-intro-card {
      background: white;
      border: 2px solid #D4AF37;
      border-radius: 16px;
      padding: 32px;
      display: flex;
      align-items: center;
      gap: 24px;
      margin-bottom: 40px;
    }

    .principals-intro-card svg {
      color: #D4AF37;
      flex-shrink: 0;
    }

    .principals-intro-card p {
      font-size: 1.125rem;
      font-weight: 600;
      color: #0c2440;
      margin: 0;
      line-height: 1.6;
    }

    .principals-chips {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .principal-chip {
      background: white;
      border: 2px solid #EAF6FB;
      border-radius: 16px;
      padding: 24px;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .principal-chip:hover {
      border-color: #D4AF37;
      box-shadow: 0 8px 24px rgba(212, 175, 55, 0.15);
      transform: translateX(8px);
    }

    .principal-chip.expanded {
      border-color: #D4AF37;
      background: linear-gradient(135deg, #ffffff 0%, #EAF6FB 100%);
    }

    .chip-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
    }

    .chip-info {
      flex: 1;
    }

    .chip-name {
      font-size: 1.25rem;
      font-weight: 700;
      color: #0c2440;
      margin: 0 0 8px;
      line-height: 1.3;
    }

    .chip-industry {
      display: inline-block;
      font-size: 0.875rem;
      font-weight: 600;
      color: #D4AF37;
      background: rgba(212, 175, 55, 0.1);
      padding: 4px 12px;
      border-radius: 12px;
    }

    .chip-header svg {
      color: #D4AF37;
      flex-shrink: 0;
      transition: transform 0.3s ease;
    }

    .chip-header svg.rotated {
      transform: rotate(180deg);
    }

    .chip-description {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 2px solid rgba(212, 175, 55, 0.2);
    }

    .chip-description p {
      font-size: 1rem;
      line-height: 1.7;
      color: #4a5568;
      margin: 0;
    }

    @media (max-width: 768px) {
      .principals-section {
        padding: 56px 16px;
      }

      .section-title {
        font-size: 2rem;
      }

      .section-intro {
        font-size: 1rem;
      }

      .principals-intro-card {
        flex-direction: column;
        text-align: center;
        padding: 24px;
      }

      .principal-chip {
        padding: 20px;
      }

      .chip-name {
        font-size: 1.125rem;
      }
    }
  `]
})
export class PrincipalsSection {
  principals: Principal[] = [
    {
      id: '1',
      name: 'Global Manufacturing Co.',
      industry: 'Manufacturing',
      description: 'Leading manufacturer delivering innovative products and solutions worldwide with a commitment to quality and sustainability.',
      expanded: false
    },
    {
      id: '2',
      name: 'Worldwide Distributors',
      industry: 'Distribution',
      description: 'Extensive distribution network connecting products to markets efficiently across multiple regions and channels.',
      expanded: false
    },
    {
      id: '3',
      name: 'International Retail Chain',
      industry: 'Retail',
      description: 'Major retail partner providing direct access to consumers through modern trade channels and traditional retail outlets.',
      expanded: false
    },
    {
      id: '4',
      name: 'Global Brands Ltd.',
      industry: 'Consumer Goods',
      description: 'Trusted consumer goods manufacturer with strong brand recognition and market presence across diverse categories.',
      expanded: false
    },
    {
      id: '5',
      name: 'Strategic Partners Group',
      industry: 'Business Services',
      description: 'Professional services partner providing strategic insights and operational support for business growth and optimization.',
      expanded: false
    },
    {
      id: '6',
      name: 'Market Leaders Inc.',
      industry: 'Technology',
      description: 'Innovative technology company bringing cutting-edge solutions to market through strategic partnerships and channels.',
      expanded: false
    }
  ];

  togglePrincipal(principal: Principal) {
    principal.expanded = !principal.expanded;
  }
}
