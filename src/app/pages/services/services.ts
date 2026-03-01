import { Component, OnInit, AfterViewInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { FloatingActions } from '../../components/floating-actions/floating-actions';
import { SEOService } from '../../services/seo.service';

const SERVICES_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'TTA Our Services',
  description: 'Trade marketing, market entry, business setup, brand strategy, operational optimization and market research. We partner with businesses to build strong market foundations and accelerate growth.',
  url: 'https://tta-dubai.com/services',
  numberOfItems: 6,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Trade Marketing & Go-to-Market Strategy', description: 'Go-to-market strategies that enhance brand presence, strengthen channel execution, and drive sustainable sales growth.' },
    { '@type': 'ListItem', position: 2, name: 'Market Entry & Expansion Advisory', description: 'Structured strategies for new market entry and expansion that reduce risk and unlock scalable growth.' },
    { '@type': 'ListItem', position: 3, name: 'Business Setup & Regulatory Compliance', description: 'End-to-end support for business registration, licensing, and regulatory compliance for a smooth market launch.' },
    { '@type': 'ListItem', position: 4, name: 'Brand Strategy & Positioning', description: 'Clear brand strategies and positioning frameworks that connect with your target audience and stand out in competitive markets.' },
    { '@type': 'ListItem', position: 5, name: 'Operational Strategy & Optimization', description: 'Optimization of business operations to improve efficiency, enhance performance, and support scalable long-term growth.' },
    { '@type': 'ListItem', position: 6, name: 'Market Research & Consumer Insights', description: 'Data-driven market research and consumer insights to support informed decision-making and strategic clarity.' }
  ]
};

@Component({
  selector: 'app-services',
  imports: [CommonModule, TranslateModule, FloatingActions],
  templateUrl: './services.html',
  styleUrl: './services.css',
  standalone: true
})
export class Services implements OnInit, AfterViewInit, OnDestroy {
  sectionIds = [
    'trade-marketing',
    'market-entry',
    'business-setup',
    'brand-strategy',
    'operational-strategy',
    'market-research'
  ];

  private jsonLdScript: HTMLScriptElement | null = null;

  constructor(
    private seoService: SEOService,
    private route: ActivatedRoute,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit() {
    const seoData = this.seoService.getSEOForRoute('/services');
    this.seoService.updateSEO(seoData);
    this.injectServicesJsonLd();
  }

  ngOnDestroy() {
    if (this.jsonLdScript?.parentNode) {
      this.jsonLdScript.parentNode.removeChild(this.jsonLdScript);
    }
  }

  private injectServicesJsonLd(): void {
    this.jsonLdScript = this.doc.createElement('script');
    this.jsonLdScript.type = 'application/ld+json';
    this.jsonLdScript.text = JSON.stringify(SERVICES_JSON_LD);
    this.doc.head.appendChild(this.jsonLdScript);
  }

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        requestAnimationFrame(() => {
          const element = document.getElementById(fragment);
          if (element) {
            const header = document.querySelector('.header');
            const headerHeight = header ? (header as HTMLElement).getBoundingClientRect().height : 80;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({
              top: Math.max(0, elementPosition),
              behavior: 'smooth'
            });
          }
        });
      }
    });
  }

  getServiceTitleKey(i: number): string {
    return `OUR_SERVICES.SERVICES.${i}.TITLE`;
  }

  getServiceDescriptionKey(i: number): string {
    return `OUR_SERVICES.SERVICES.${i}.DESCRIPTION`;
  }
}
