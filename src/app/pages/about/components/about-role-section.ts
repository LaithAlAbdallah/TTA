import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-role-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about-us-and-role" class="about-role-section">
      <div class="about-role-container">
        <div class="content-grid">
          <div class="text-content">
            <h2 class="section-title">About Us & Our Role</h2>
            <p class="first-paragraph"><span class="drop-cap">T</span>TA is a trading and distribution company connecting world-class manufacturers with diverse markets worldwide. With a strong international presence, deep market knowledge, and an extensive partner network, we deliver value, visibility, and scale for brands.</p>
            <p>We manage top global brands in over 100 countries, supported by 80+ years of expertise in international expansion.</p>
          </div>
          <div class="visual-content">
            <div class="timeline-chips">
              <div class="chip">
                <div class="chip-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <div class="chip-content">
                  <div class="chip-label">Founded</div>
                  <div class="chip-value">2020</div>
                </div>
              </div>
              <div class="chip">
                <div class="chip-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div class="chip-content">
                  <div class="chip-label">Headquarters</div>
                  <div class="chip-value">Dubai, UAE</div>
                </div>
              </div>
              <div class="chip">
                <div class="chip-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </div>
                <div class="chip-content">
                  <div class="chip-label">Markets</div>
                  <div class="chip-value">100+ Countries</div>
                </div>
              </div>
            </div>
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
                <text x="100" y="155" text-anchor="middle" fill="#0c2440" font-size="14" font-weight="600">Manufacturers</text>
                <text x="200" y="155" text-anchor="middle" fill="#0c2440" font-size="14" font-weight="600">TTA</text>
                <text x="300" y="155" text-anchor="middle" fill="#0c2440" font-size="14" font-weight="600">Markets</text>
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
      font-family: 'Playfair Display', 'Georgia', serif;
      font-size: 2.5rem;
      font-weight: 700;
      color: #0c2440;
      margin: 0 0 32px;
      line-height: 1.2;
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

    .drop-cap {
      font-family: 'Playfair Display', 'Georgia', serif;
      float: left;
      font-size: 4rem;
      line-height: 0.8;
      font-weight: 700;
      color: #D4AF37;
      margin: 8px 12px 0 0;
    }

    .visual-content {
      position: sticky;
      top: 120px;
    }

    .timeline-chips {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 32px;
    }

    .chip {
      display: flex;
      align-items: center;
      gap: 16px;
      background: white;
      border: 2px solid #EAF6FB;
      border-radius: 12px;
      padding: 16px;
      transition: all 0.3s ease;
    }

    .chip:hover {
      border-color: #D4AF37;
      transform: translateX(8px);
      box-shadow: 0 4px 12px rgba(212, 175, 55, 0.15);
    }

    .chip-icon {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, #EAF6FB 0%, #ffffff 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #0c2440;
      flex-shrink: 0;
    }

    .chip-content {
      flex: 1;
    }

    .chip-label {
      font-size: 0.875rem;
      font-weight: 600;
      color: #718096;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
    }

    .chip-value {
      font-size: 1.125rem;
      font-weight: 700;
      color: #0c2440;
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

      .timeline-chips {
        flex-direction: row;
        overflow-x: auto;
        padding-bottom: 8px;
      }

      .chip {
        min-width: 200px;
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

      .drop-cap {
        font-size: 3rem;
      }

      .timeline-chips {
        flex-direction: column;
      }

      .chip {
        min-width: auto;
      }
    }
  `]
})
export class AboutRoleSection {}
