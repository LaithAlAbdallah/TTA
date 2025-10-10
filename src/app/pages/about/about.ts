import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService, ContentSection, TeamMember } from '../../services/content';
import { FloatingActions } from '../../components/floating-actions/floating-actions';
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

  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.sections = this.contentService.getHomePageSections();
    this.loadTeamMembers();
  }

  private loadTeamMembers() {
    const teamMembersData = this.translate.instant('WHO_WE_ARE.TEAM_MEMBERS');
    this.teamMembers = teamMembersData.map((member: any, index: number) => ({
      id: this.getMemberId(index),
      name: member.NAME,
      title: member.TITLE,
      image: this.getMemberImage(index),
      shortBio: member.SHORT_BIO,
      fullBio: member.FULL_BIO,
      isExpanded: false
    }));
  }

  private getMemberId(index: number): string {
    const ids = ['nidal-al-zaatari', 'james-lafferty', 'ruslan-humbatov', 'ahmad-awamleh'];
    return ids[index] || `member-${index}`;
  }

  private getMemberImage(index: number): string {
    const images = [
      'assets/images/Nedal.jpg',
      'assets/images/James.jpg', 
      'assets/images/Ruslan.jpg',
      'assets/images/Ahmad-Awamleh.jpg'
    ];
    return images[index] || 'assets/images/default.jpg';
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
