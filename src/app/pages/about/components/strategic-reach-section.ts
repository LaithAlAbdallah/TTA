import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-strategic-reach-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section id="strategic-reach" class="strategic-reach-section">
      <div class="reach-container">
        <div class="content-grid">
          <div class="map-visual">
            <svg viewBox="0 0 600 400" class="world-map">
              <defs>
                <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#D4AF37;stop-opacity:0.8" />
                  <stop offset="100%" style="stop-color:#0c2440;stop-opacity:0.6" />
                </linearGradient>
              </defs>
              <!-- Stylized world map representation -->
              <ellipse cx="300" cy="200" rx="250" ry="150" fill="#EAF6FB" opacity="0.3"/>
              <circle cx="150" cy="180" r="40" fill="url(#mapGrad)" opacity="0.7">
                <animate attributeName="r" values="40;45;40" dur="3s" repeatCount="indefinite"/>
              </circle>
              <circle cx="300" cy="150" r="35" fill="url(#mapGrad)" opacity="0.7">
                <animate attributeName="r" values="35;40;35" dur="3s" begin="0.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="450" cy="200" r="45" fill="url(#mapGrad)" opacity="0.7">
                <animate attributeName="r" values="45;50;45" dur="3s" begin="1s" repeatCount="indefinite"/>
              </circle>
              <circle cx="380" cy="280" r="30" fill="url(#mapGrad)" opacity="0.7">
                <animate attributeName="r" values="30;35;30" dur="3s" begin="1.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="200" cy="260" r="38" fill="url(#mapGrad)" opacity="0.7">
                <animate attributeName="r" values="38;43;38" dur="3s" begin="2s" repeatCount="indefinite"/>
              </circle>
              <!-- Connection lines -->
              <line x1="150" y1="180" x2="300" y2="150" stroke="#D4AF37" stroke-width="2" stroke-dasharray="5,5" opacity="0.5"/>
              <line x1="300" y1="150" x2="450" y2="200" stroke="#D4AF37" stroke-width="2" stroke-dasharray="5,5" opacity="0.5"/>
              <line x1="450" y1="200" x2="380" y2="280" stroke="#D4AF37" stroke-width="2" stroke-dasharray="5,5" opacity="0.5"/>
              <line x1="200" y1="260" x2="380" y2="280" stroke="#D4AF37" stroke-width="2" stroke-dasharray="5,5" opacity="0.5"/>
              <text x="300" y="380" text-anchor="middle" fill="#0c2440" font-size="18" font-weight="600">{{ 'ABOUT.STRATEGIC_REACH.GLOBAL_PRESENCE' | translate }}</text>
            </svg>
          </div>

          <div class="text-content">
            <h2 class="section-title">{{ 'ABOUT.STRATEGIC_REACH.TITLE' | translate }}</h2>
            <p class="reach-description">{{ 'ABOUT.STRATEGIC_REACH.DESCRIPTION' | translate }}</p>

            <!-- <div class="stats-grid">
              <div class="stat-card">
                <div class="stat-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                </div>
                <div class="stat-content">
                  <div class="stat-value">100+</div>
                  <div class="stat-label">Countries Served</div>
                </div>
              </div>

              <div class="stat-card">
                <div class="stat-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div class="stat-content">
                  <div class="stat-value">80+</div>
                  <div class="stat-label">Years Combined Experience</div>
                </div>
              </div>

              <div class="stat-card">
                <div class="stat-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                  </svg>
                </div>
                <div class="stat-content">
                  <div class="stat-value">Multiple</div>
                  <div class="stat-label">Key Economies</div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .strategic-reach-section {
      background: white;
      padding: 80px 24px;
      scroll-margin-top: 100px;
    }

    .reach-container {
      max-width: 1200px;
      margin: 0 auto;
    }

    .content-grid {
      display: grid;
      grid-template-columns: 500px 1fr;
      gap: 64px;
      align-items: center;
    }

    .map-visual {
      background: linear-gradient(135deg, #EAF6FB 0%, #ffffff 100%);
      border-radius: 16px;
      padding: 32px;
      box-shadow: 0 8px 24px rgba(12, 36, 64, 0.08);
    }

    .world-map {
      width: 100%;
      height: auto;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: #0c2440;
      margin: 0 0 24px;
      line-height: 1.2;
    }

    .reach-description {
      font-size: 1.125rem;
      line-height: 1.8;
      color: #4a5568;
      margin: 0 0 40px;
      max-width: 70ch;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
    }

    .stat-card {
      display: flex;
      align-items: center;
      gap: 20px;
      background: white;
      border: 2px solid #EAF6FB;
      border-radius: 12px;
      padding: 24px;
      transition: all 0.3s ease;
    }

    .stat-card:hover {
      border-color: #D4AF37;
      box-shadow: 0 8px 24px rgba(212, 175, 55, 0.15);
      transform: translateX(8px);
    }

    .stat-icon {
      width: 64px;
      height: 64px;
      background: linear-gradient(135deg, #D4AF37 0%, #f0d06f 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      flex-shrink: 0;
    }

    .stat-content {
      flex: 1;
    }

    .stat-value {
      font-size: 2rem;
      font-weight: 700;
      color: #0c2440;
      line-height: 1.2;
      margin-bottom: 4px;
    }

    .stat-label {
      font-size: 0.95rem;
      font-weight: 600;
      color: #718096;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    @media (max-width: 1024px) {
      .content-grid {
        grid-template-columns: 1fr;
        gap: 48px;
      }
    }

    @media (max-width: 768px) {
      .strategic-reach-section {
        padding: 56px 16px;
      }

      .section-title {
        font-size: 2rem;
      }

      .reach-description {
        font-size: 1rem;
      }

      .map-visual {
        padding: 24px;
      }

      .stat-card {
        padding: 20px;
      }

      .stat-icon {
        width: 56px;
        height: 56px;
      }

      .stat-value {
        font-size: 1.5rem;
      }
    }
  `]
})
export class StrategicReachSection {}
