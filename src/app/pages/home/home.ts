import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService, ContentSection, TeamMember } from '../../services/content';
import { FloatingActions } from '../../components/floating-actions/floating-actions';
import { ContactCard } from '../../components/contact-card/contact-card';
import { SEOService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, TranslateModule, FloatingActions, ContactCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class Home implements OnInit, AfterViewInit {
  sections: ContentSection[] = [];
  teamMembers: TeamMember[] = [];

  constructor(
    private contentService: ContentService,
    private seoService: SEOService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.sections = this.contentService.getHomePageSections();
    this.teamMembers = this.contentService.getTeamMembers();
    
    // Update SEO for home page
    const seoData = this.seoService.getSEOForRoute('/');
    this.seoService.updateSEO(seoData);
  }

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        // Short delay so layout (especially on mobile) is complete before measuring/scroll
        setTimeout(() => {
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
        }, 100);
      }
    });
  }

  scrollToContact(event: Event) {
    event.preventDefault();
    const contactCard = document.getElementById('contact');
    if (contactCard) {
      const header = document.querySelector('.header');
      const headerHeight = header ? (header as HTMLElement).getBoundingClientRect().height : 80;
      const elementPosition = contactCard.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: Math.max(0, elementPosition),
        behavior: 'smooth'
      });
    }
  }

  navigateToWhoWeAre(event: Event) {
    event.preventDefault();
    this.router.navigate(['/about'], { fragment: 'who-we-are' });
  }
}
