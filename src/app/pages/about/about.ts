import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService, ContentSection, TeamMember } from '../../services/content';
import { FloatingActions } from '../../components/floating-actions/floating-actions';
import { SEOService } from '../../services/seo.service';
import { VisionSection } from './components/vision-section';
import { AboutRoleSection } from './components/about-role-section';
import { MissionSection } from './components/mission-section';
import { CorePillarsSection } from './components/core-pillars-section';
import { StrategicReachSection } from './components/strategic-reach-section';
import { BusinessModelSection } from './components/business-model-section';
import { TrustedPartnershipsSection } from './components/trusted-partnerships-section';
import { PrincipalsSection } from './components/principals-section';
import { PartnersSection } from './components/partners-section';

@Component({
  selector: 'app-about',
  imports: [
    CommonModule,
    TranslateModule,
    FloatingActions,
    VisionSection,
    AboutRoleSection,
    MissionSection,
    CorePillarsSection,
    StrategicReachSection,
    BusinessModelSection,
    TrustedPartnershipsSection,
    PrincipalsSection,
    PartnersSection
  ],
  templateUrl: './about.html',
  styleUrl: './about.css',
  standalone: true
})
export class About implements OnInit, AfterViewInit {
  sections: ContentSection[] = [];
  teamMembers: (TeamMember & { isExpanded: boolean })[] = [];
  sidebarOpen = false;
  
  // Table of contents data
  tableOfContentsSections = [
    'ABOUT.TABLE_OF_CONTENTS.SECTIONS.0',
    'ABOUT.TABLE_OF_CONTENTS.SECTIONS.1',
    'ABOUT.TABLE_OF_CONTENTS.SECTIONS.2',
    'ABOUT.TABLE_OF_CONTENTS.SECTIONS.3',
    'ABOUT.TABLE_OF_CONTENTS.SECTIONS.4',
    'ABOUT.TABLE_OF_CONTENTS.SECTIONS.5',
    'ABOUT.TABLE_OF_CONTENTS.SECTIONS.6',
    'ABOUT.TABLE_OF_CONTENTS.SECTIONS.7',
    'ABOUT.TABLE_OF_CONTENTS.SECTIONS.8',
    'ABOUT.TABLE_OF_CONTENTS.SECTIONS.9'
  ];
  
  sectionIds = [
    'vision',
    'about-us-and-role',
    'mission',
    'core-pillars',
    'strategic-reach',
    'business-model',
    'trusted-partnerships',
    'principals',
    'partners',
    'who-we-are'
  ];

  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute,
    private router: Router,
    private seoService: SEOService
  ) {}

  ngOnInit() {
    this.sections = this.contentService.getHomePageSections();
    this.teamMembers = this.contentService.getTeamMembers().map(member => ({
      ...member,
      isExpanded: false
    }));
    
    // Update SEO for about page
    const seoData = this.seoService.getSEOForRoute('/about');
    this.seoService.updateSEO(seoData);
  }

  toggleBio(member: TeamMember & { isExpanded: boolean }) {
    member.isExpanded = !member.isExpanded;
  }

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        // Use requestAnimationFrame for smoother timing
        requestAnimationFrame(() => {
          const element = document.getElementById(fragment);
          if (element) {
            // Get the actual header height dynamically
            const header = document.querySelector('.header');
            const headerHeight = header ? header.getBoundingClientRect().height : 80;
            
            // Calculate precise position - element top minus header height
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
              top: Math.max(0, elementPosition), // Ensure we don't scroll to negative position
              behavior: 'smooth'
            });
          }
        });
      }
    });
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    this.sidebarOpen = false;
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the actual header height dynamically
      const header = document.querySelector('.header');
      const headerHeight = header ? header.getBoundingClientRect().height : 80;
      
      // Calculate precise position - element top minus header height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: Math.max(0, elementPosition), // Ensure we don't scroll to negative position
        behavior: 'smooth'
      });
    }
  }

  scrollToTop(event: Event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToContact(event: Event) {
    event.preventDefault();
    this.router.navigate(['/'], { fragment: 'contact' });
  }
}
