import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ContentService, ContentSection, TeamMember } from '../../services/content';
import { FloatingActions } from '../../components/floating-actions/floating-actions';

@Component({
  selector: 'app-about',
  imports: [CommonModule, FloatingActions],
  templateUrl: './about.html',
  styleUrl: './about.css',
  standalone: true
})
export class About implements OnInit, AfterViewInit {
  sections: ContentSection[] = [];
  teamMembers: TeamMember[] = [];
  sidebarOpen = false;

  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sections = this.contentService.getHomePageSections();
    this.teamMembers = this.contentService.getTeamMembers();
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
    const footer = document.getElementById('contact');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
