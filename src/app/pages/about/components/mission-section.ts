import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mission-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="mission" class="mission-section">
      <div class="mission-container">
        <h2 class="section-title">Our Mission</h2>
        <div class="mission-card">
          <div class="gold-accent"></div>
          <blockquote class="mission-statement">
            We connect brands and consumers through market-driven strategies, collaboration, and a win-win mindset—creating long-term value across the supply chain.
          </blockquote>
          <div class="mission-actions">
            <div class="action-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>Identify the right distributors for your brand</span>
            </div>
            <div class="action-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>Design cost-efficient go-to-market strategies</span>
            </div>
            <div class="action-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>Benefit manufacturers and customers alike</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .mission-section {
      background: #0c2440;
      padding: 80px 24px;
      scroll-margin-top: 100px;
      position: relative;
      overflow: hidden;
    }

    .mission-section::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -10%;
      width: 600px;
      height: 600px;
      background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
      border-radius: 50%;
    }

    .mission-container {
      max-width: 1000px;
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: white;
      margin: 0 0 48px;
      text-align: center;
      line-height: 1.2;
    }

    .mission-card {
      position: relative;
      padding-left: 48px;
    }

    .gold-accent {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background: linear-gradient(to bottom, #D4AF37 0%, #f0d06f 100%);
    }

    .mission-statement {
      font-size: 2rem;
      font-weight: 500;
      color: white;
      line-height: 1.6;
      margin: 0 0 48px;
      quotes: """ """ "'" "'";
    }

    .mission-statement::before {
      content: open-quote;
      font-size: 4rem;
      line-height: 0;
      vertical-align: -0.4em;
      color: #D4AF37;
      margin-right: 8px;
    }

    .mission-actions {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
    }

    .action-item {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(212, 175, 55, 0.3);
      border-radius: 12px;
      padding: 20px;
      transition: all 0.3s ease;
    }

    .action-item:hover {
      background: rgba(212, 175, 55, 0.1);
      border-color: #D4AF37;
      transform: translateY(-4px);
    }

    .action-item svg {
      flex-shrink: 0;
      color: #D4AF37;
      margin-top: 2px;
    }

    .action-item span {
      font-size: 1rem;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.9);
      font-weight: 500;
    }

    @media (max-width: 768px) {
      .mission-section {
        padding: 56px 16px;
      }

      .mission-card {
        padding-left: 32px;
      }

      .section-title {
        font-size: 2rem;
        margin-bottom: 32px;
      }

      .mission-statement {
        font-size: 1.5rem;
      }

      .mission-actions {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class MissionSection {}
