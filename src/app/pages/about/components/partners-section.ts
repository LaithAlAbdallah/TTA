import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Partner {
  name: string;
  description: string;
  category: string;
  logo: string;
}

@Component({
  selector: 'app-partners-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="partners" class="partners-section">
      <div class="partners-container">
        <h2 class="section-title">Our Partners</h2>
        <p class="section-intro">TTA manages and promotes a portfolio of consumer-facing brands, ensuring market visibility and growth across regions.</p>

        <div class="partners-grid">
          <div *ngFor="let partner of partners" class="partner-card">
            <div class="partner-logo-container">
              <img [src]="'assets/images/' + partner.logo" [alt]="partner.name + ' logo'" class="partner-logo">
            </div>
            <h3 class="partner-name">{{ partner.name }}</h3>
            <div class="partner-category">{{ partner.category }}</div>
            <p class="partner-description">{{ partner.description }}</p>
          </div>
        </div>

        <div class="cta-section">
          <div class="cta-content">
            <h3>Ready to Partner with Us?</h3>
            <p>Join our network of trusted partners and expand your market reach globally.</p>
            <a href="#contact" class="cta-button">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .partners-section {
      background: white;
      padding: 80px 24px 120px;
      scroll-margin-top: 100px;
    }

    .partners-container {
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

    .partners-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 32px;
      margin-bottom: 64px;
    }

    .partner-card {
      background: linear-gradient(135deg, #ffffff 0%, #EAF6FB 100%);
      border: 2px solid #EAF6FB;
      border-radius: 16px;
      padding: 40px 32px;
      text-align: center;
      transition: all 0.3s ease;
    }

    .partner-card:hover {
      border-color: #D4AF37;
      box-shadow: 0 12px 32px rgba(212, 175, 55, 0.15);
      transform: translateY(-8px);
    }

    .partner-logo-container {
      width: 100px;
      height: 100px;
      background: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 24px;
      border: 3px solid #D4AF37;
      padding: 8px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .partner-logo {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 50%;
    }

    .partner-name {
      font-size: 1.5rem;
      font-weight: 700;
      color: #0c2440;
      margin: 0 0 12px;
      line-height: 1.3;
    }

    .partner-category {
      display: inline-block;
      font-size: 0.875rem;
      font-weight: 600;
      color: white;
      background: #D4AF37;
      padding: 6px 16px;
      border-radius: 20px;
      margin-bottom: 16px;
    }

    .partner-description {
      font-size: 1rem;
      line-height: 1.7;
      color: #4a5568;
      margin: 0;
    }

    .cta-section {
      margin-bottom: 48px;
    }

    .cta-content {
      background: linear-gradient(135deg, #0c2440 0%, #1a3a5c 100%);
      border-radius: 16px;
      padding: 56px 48px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .cta-content::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -20%;
      width: 400px;
      height: 400px;
      background: radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%);
      border-radius: 50%;
    }

    .cta-content h3 {
      font-size: 2rem;
      font-weight: 700;
      color: white;
      margin: 0 0 16px;
      position: relative;
      z-index: 1;
    }

    .cta-content p {
      font-size: 1.125rem;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.9);
      margin: 0 0 32px;
      position: relative;
      z-index: 1;
    }

    .cta-button {
      display: inline-block;
      background: #D4AF37;
      color: #0c2440;
      font-size: 1rem;
      font-weight: 700;
      text-decoration: none;
      padding: 16px 40px;
      border-radius: 30px;
      transition: all 0.3s ease;
      position: relative;
      z-index: 1;
    }

    .cta-button:hover {
      background: #f0d06f;
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(212, 175, 55, 0.4);
    }


    @media (max-width: 768px) {
      .partners-section {
        padding: 56px 16px 80px;
      }

      .section-title {
        font-size: 2rem;
      }

      .section-intro {
        font-size: 1rem;
      }

      .partners-grid {
        grid-template-columns: 1fr;
        gap: 24px;
      }

      .partner-card {
        padding: 32px 24px;
      }

      .cta-content {
        padding: 40px 24px;
      }

      .cta-content h3 {
        font-size: 1.5rem;
      }

      .cta-content p {
        font-size: 1rem;
      }
    }
  `]
})
export class PartnersSection {
  partners: Partner[] = [
    {
      name: 'PureBorn',
      category: 'Baby Care',
      description: 'Eco-friendly nappies, wipes, and baby essentials designed for sensitive skin, blending health, style, and sustainability.',
      logo: 'Pure.png'
    },
    {
      name: 'Mega Prime',
      category: 'Food & Beverage',
      description: 'Premium canned sardines and tuna with strong consumer loyalty in multiple markets.',
      logo: 'Mega-Prime.png'
    },
    {
      name: 'Bauducco',
      category: 'Snacks',
      description: 'Snack products catering to diverse tastes and age groups, including wafers, cookies, and mini cakes.',
      logo: 'Bauducco.png'
    },
    {
      name: 'pH Plex',
      category: 'Haircare',
      description: 'DIY-friendly haircare products repairing damage from coloring, bleaching, and styling.',
      logo: 'PHplex.png'
    },
    {
      name: 'Kaly',
      category: 'Food & Beverage',
      description: 'Premium syrup brand offering rich flavor and quality for beverages and culinary uses.',
      logo: 'Kaly.png'
    },
    {
      name: 'Jucai',
      category: 'Food & Beverage',
      description: 'High-quality Acai products meeting global standards.',
      logo: 'Jucai.png'
    }
  ];

  getInitial(name: string): string {
    return name.charAt(0).toUpperCase();
  }
}
