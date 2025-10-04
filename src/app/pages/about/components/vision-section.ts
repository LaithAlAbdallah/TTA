import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vision-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="vision" class="vision-section">
      <div class="vision-container">
        <div class="vision-card">
          <div class="vision-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="12" cy="12" r="3"/>
              <line x1="12" y1="2" x2="12" y2="6"/>
              <line x1="12" y1="18" x2="12" y2="22"/>
              <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/>
              <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/>
              <line x1="2" y1="12" x2="6" y2="12"/>
              <line x1="18" y1="12" x2="22" y2="12"/>
              <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/>
              <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
            </svg>
          </div>
          <h2 class="section-title">Our Vision</h2>
          <p class="vision-lead">We aim to be the leading bridge between global manufacturers and markets worldwide—enabling seamless trade, smart distribution, and lasting partnerships that drive growth for all.</p>
          <div class="vision-content">
            <p class="vision-detail">Our focus is helping outstanding regional companies scale globally. We represent some of the finest start-ups and mid-sized businesses ready to expand. With hands-on operational experience—from building route-to-market strategies to restructuring—we deliver proven results. We are a lean, agile team, bringing unmatched value to every partnership.</p>
            <div class="vision-callout">
              <h3>Why it matters</h3>
              <ul>
                <li>Seamless connection between manufacturers and global markets</li>
                <li>Proven expertise in scaling regional companies internationally</li>
                <li>Lean, agile approach delivering maximum value</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .vision-section {
      background: linear-gradient(to bottom, #EAF6FB 0%, #ffffff 100%);
      padding: 64px 24px;
      scroll-margin-top: 100px;
    }

    .vision-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .vision-card {
      background: white;
      border-radius: 16px;
      padding: 48px;
      box-shadow: 0 10px 40px rgba(12, 36, 64, 0.08);
      position: relative;
    }

    .vision-icon {
      width: 64px;
      height: 64px;
      background: linear-gradient(135deg, #D4AF37 0%, #f0d06f 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      margin-bottom: 24px;
    }

    .section-title {
      font-family: 'Playfair Display', 'Georgia', serif;
      font-size: 2.5rem;
      font-weight: 700;
      color: #0c2440;
      margin: 0 0 24px;
      line-height: 1.2;
    }

    .vision-lead {
      font-family: 'Playfair Display', 'Georgia', serif;
      font-size: 1.5rem;
      font-weight: 500;
      color: #0c2440;
      line-height: 1.6;
      margin: 0 0 32px;
      padding-bottom: 32px;
      border-bottom: 3px solid #D4AF37;
    }

    .vision-content {
      display: grid;
      grid-template-columns: 1fr 350px;
      gap: 40px;
      align-items: start;
    }

    .vision-detail {
      font-size: 1.125rem;
      line-height: 1.8;
      color: #4a5568;
      margin: 0;
      max-width: 70ch;
    }

    .vision-callout {
      background: #EAF6FB;
      border-left: 4px solid #D4AF37;
      padding: 24px;
      border-radius: 8px;
    }

    .vision-callout h3 {
      font-family: 'Inter', 'Helvetica', sans-serif;
      font-size: 1rem;
      font-weight: 700;
      color: #0c2440;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin: 0 0 16px;
    }

    .vision-callout ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .vision-callout li {
      font-size: 0.95rem;
      line-height: 1.6;
      color: #4a5568;
      margin: 0 0 12px;
      padding-left: 24px;
      position: relative;
    }

    .vision-callout li:last-child {
      margin-bottom: 0;
    }

    .vision-callout li::before {
      content: '→';
      position: absolute;
      left: 0;
      color: #D4AF37;
      font-weight: bold;
    }

    @media (max-width: 1024px) {
      .vision-content {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 768px) {
      .vision-section {
        padding: 48px 16px;
      }

      .vision-card {
        padding: 32px 24px;
      }

      .section-title {
        font-size: 2rem;
      }

      .vision-lead {
        font-size: 1.25rem;
      }

      .vision-detail {
        font-size: 1rem;
      }
    }
  `]
})
export class VisionSection {}
