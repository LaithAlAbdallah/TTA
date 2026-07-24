import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  canonical?: string;
  hreflang?: { lang: string; url: string }[];
}

@Injectable({
  providedIn: 'root'
})
export class SEOService {
  private readonly baseUrl = 'https://tta-dubai.com';
  private readonly defaultImage = 'https://tta-dubai.com/assets/images/Full-LOGO.png';

  constructor(
    private title: Title,
    private meta: Meta,
    private router: Router
  ) {}

  updateSEO(data: SEOData): void {
    const url = data.url || `${this.baseUrl}${this.router.url}`;
    const image = data.image || this.defaultImage;
    const type = data.type || 'website';

    // Update page title
    this.title.setTitle(data.title);

    // Update or create meta tags
    this.meta.updateTag({ name: 'description', content: data.description });
    
    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }

    // Open Graph tags
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({ property: 'og:description', content: data.description });
    this.meta.updateTag({ property: 'og:image', content: image });
    this.meta.updateTag({ property: 'og:url', content: url });
    this.meta.updateTag({ property: 'og:type', content: type });
    this.meta.updateTag({ property: 'og:site_name', content: 'TTA - The Turnaround Artists' });
    this.meta.updateTag({ property: 'og:locale', content: 'en_AE' });

    // Twitter Card tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: data.title });
    this.meta.updateTag({ name: 'twitter:description', content: data.description });
    this.meta.updateTag({ name: 'twitter:image', content: image });

    // Canonical URL
    const canonicalUrl = data.canonical || url;
    this.updateCanonical(canonicalUrl);

    // Hreflang tags for multi-language
    if (data.hreflang && data.hreflang.length > 0) {
      this.updateHreflang(data.hreflang);
    } else {
      // Default hreflang tags
      this.updateHreflang(this.getDefaultHreflang(url));
    }
  }

  private updateCanonical(url: string): void {
    // Remove existing canonical
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.remove();
    }

    // Add new canonical
    const link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    link.setAttribute('href', url);
    document.head.appendChild(link);
  }

  private updateHreflang(hreflangs: { lang: string; url: string }[]): void {
    // Remove existing hreflang tags
    const existingHreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflangs.forEach(link => link.remove());

    // Add new hreflang tags
    hreflangs.forEach(({ lang, url }) => {
      const link = document.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', lang);
      link.setAttribute('href', url);
      document.head.appendChild(link);
    });

    // Add x-default
    const defaultLink = document.createElement('link');
    defaultLink.setAttribute('rel', 'alternate');
    defaultLink.setAttribute('hreflang', 'x-default');
    defaultLink.setAttribute('href', hreflangs.find(h => h.lang === 'en')?.url || hreflangs[0].url);
    document.head.appendChild(defaultLink);
  }

  private getDefaultHreflang(currentUrl: string): { lang: string; url: string }[] {
    const basePath = currentUrl.replace(this.baseUrl, '');
    return [
      { lang: 'en', url: `${this.baseUrl}${basePath}` },
      { lang: 'ar', url: `${this.baseUrl}/ar${basePath}` },
      { lang: 'ru', url: `${this.baseUrl}/ru${basePath}` }
    ];
  }

  // Helper method to get SEO data for a specific route
  getSEOForRoute(route: string): SEOData {
    const routeSEO: { [key: string]: SEOData } = {
      '/': {
        title: 'TTA - The Turnaround Artists | Strategic Brand Builder | Dubai',
        description: 'TTA — The Turnaround Artists — is a global strategic brand builder headquartered in Dubai. We architect international distribution and brand growth across 100+ countries.',
        keywords: 'TTA, The Turnaround Artists, strategic brand builder, brand broker, Dubai, global distribution, FMCG, market entry',
        type: 'website'
      },
      '/about': {
        title: 'About TTA - The Turnaround Artists | Strategic Brand Builder Dubai',
        description: 'Learn about TTA — The Turnaround Artists, a global strategic brand builder headquartered in Dubai. We design, build, and scale international distribution for world-class brands.',
        keywords: 'TTA about, The Turnaround Artists, strategic brand builder Dubai, brand broker, global distribution, market entry, FMCG',
        type: 'website'
      },
      '/services': {
        title: 'Our Services - TTA | Strategic Brand Building & Distribution',
        description: 'Trade marketing, market entry, business setup, brand strategy, operational optimization & market research. We partner with businesses to build strong market foundations and accelerate growth globally.',
        keywords: 'TTA services, distribution services Dubai, brand strategy, route to market, go-to-market strategy, market entry advisory, global distribution',
        type: 'website'
      }
    };

    return routeSEO[route] || routeSEO['/'];
  }
}
