import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService, ContentSection, TeamMember } from '../../services/content';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true
})
export class Home implements OnInit {
  sections: ContentSection[] = [];
  teamMembers: TeamMember[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.sections = this.contentService.getHomePageSections();
    this.teamMembers = this.contentService.getTeamMembers();
  }

  scrollToContact(event: Event) {
    event.preventDefault();
    const footer = document.getElementById('contact');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
