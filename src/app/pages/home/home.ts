import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ContentService, ContentSection, TeamMember } from '../../services/content';
import { FloatingActions } from '../../components/floating-actions/floating-actions';
import { ContactCard } from '../../components/contact-card/contact-card';

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
      fullBio: member.FULL_BIO
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

  scrollToContact(event: Event) {
    event.preventDefault();
    const contactCard = document.getElementById('contact');
    if (contactCard) {
      contactCard.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
