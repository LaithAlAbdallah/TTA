import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-mission-section',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  template: `
    <section id="mission" class="mission-section">
      <div class="mission-container">
        <h2 class="section-title">{{ 'ABOUT.MISSION.TITLE' | translate }}</h2>
        <div class="mission-card">
          <div class="gold-accent"></div>
          <blockquote class="mission-statement">
            {{ 'ABOUT.MISSION.DESCRIPTION' | translate }}
          </blockquote>
          <div class="mission-actions">
            <div class="action-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>{{ 'ABOUT.MISSION.GOALS.0' | translate }}</span>
            </div>
            <div class="action-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>{{ 'ABOUT.MISSION.GOALS.1' | translate }}</span>
            </div>
            <div class="action-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>{{ 'ABOUT.MISSION.GOALS.2' | translate }}</span>
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

    /* RTL fixes for mission section */
    [dir="rtl"] .mission-section {
      direction: rtl;
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

    /* RTL fixes for mission container */
    [dir="rtl"] .mission-container {
      direction: rtl;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: white;
      margin: 0 0 48px;
      text-align: center;
      line-height: 1.2;
      direction: ltr;
    }

    /* RTL fixes for section title */
    [dir="rtl"] .section-title {
      direction: rtl;
      text-align: center;
      unicode-bidi: normal;
      writing-mode: horizontal-tb;
      text-orientation: mixed;
    }

    .mission-card {
      position: relative;
      padding-left: 48px;
    }

    /* RTL fixes for mission card */
    :host-context([dir="rtl"]) .mission-card {
      padding-left: 0 !important;
      padding-right: 48px !important;
      direction: rtl !important;
    }

    .gold-accent {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 4px;
      background: linear-gradient(to bottom, #D4AF37 0%, #f0d06f 100%);
    }

    /* RTL fixes for gold accent */
    :host-context([dir="rtl"]) .gold-accent {
      left: auto !important;
      right: 0 !important;
    }

    .mission-statement {
      font-size: 2rem;
      font-weight: 500;
      color: white;
      line-height: 1.6;
      margin: 0 0 48px;
      quotes: """ """ "'" "'";
      direction: ltr;
      text-align: left;
      unicode-bidi: normal;
      position: relative;
      padding-left: 3rem;
    }

    /* RTL fixes for mission statement */
    :host-context([dir="rtl"]) .mission-statement {
      direction: rtl !important;
      text-align: right !important;
      unicode-bidi: normal;
      writing-mode: horizontal-tb;
      text-orientation: mixed;
      padding-left: 0 !important;
      padding-right: 3rem !important;
    }

    /* Additional RTL fix for mission statement text content */
    [dir="rtl"] .mission-statement * {
      direction: rtl !important;
      text-align: right !important;
    }

    /* Force RTL for mission statement in RTL context */
    [dir="rtl"] blockquote.mission-statement {
      direction: rtl !important;
      text-align: right !important;
      unicode-bidi: normal !important;
    }

    .mission-statement::before {
      content: '"';
      font-size: 4rem;
      line-height: 0;
      vertical-align: -0.4em;
      color: #D4AF37;
      margin-right: 8px;
      position: absolute;
      left: 0;
      top: 0.2em;
    }

    /* RTL fixes for mission statement quote */
    :host-context([dir="rtl"]) .mission-statement::before {
      left: auto !important;
      right: 0 !important;
      margin-right: 0 !important;
      margin-left: 8px !important;
      top: 0.2em !important;
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
      direction: ltr;
      text-align: left;
    }

    /* RTL fixes for action item text */
    [dir="rtl"] .action-item span {
      direction: rtl;
      text-align: right;
      unicode-bidi: normal;
      writing-mode: horizontal-tb;
      text-orientation: mixed;
    }

    @media (max-width: 768px) {
      .mission-section {
        padding: 56px 16px;
      }

      .mission-card {
        padding-left: 32px;
      }

      /* RTL responsive fixes */
      :host-context([dir="rtl"]) .mission-card {
        padding-left: 0 !important;
        padding-right: 32px !important;
        direction: rtl !important;
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
