import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
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
export class Home implements OnInit {
  sections: ContentSection[] = [];
  teamMembers: TeamMember[] = [];

  constructor(
    private contentService: ContentService,
    private seoService: SEOService
  ) {}

  ngOnInit() {
    this.sections = this.contentService.getHomePageSections();
    this.teamMembers = this.contentService.getTeamMembers();
    
    // Update SEO for home page
    const seoData = this.seoService.getSEOForRoute('/');
    this.seoService.updateSEO(seoData);
  }

  scrollToContact(event: Event) {
    event.preventDefault();
    const contactCard = document.getElementById('contact');
    if (contactCard) {
      contactCard.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
