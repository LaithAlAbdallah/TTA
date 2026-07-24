import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TeamMember } from '../../services/content';

@Component({
  selector: 'app-member-card',
  imports: [CommonModule, TranslateModule],
  templateUrl: './member-card.html',
  styleUrl: './member-card.css',
  standalone: true
})
export class MemberCard {
  @Input({ required: true }) member!: TeamMember;
  /** When set, the card is a link (Home preview). Otherwise it emits cardClick (About). */
  @Input() href?: string;
  /** Optional id for deep-link anchors (About page). */
  @Input() anchorId?: string;

  @Output() cardClick = new EventEmitter<TeamMember>();

  onCardClick(): void {
    this.cardClick.emit(this.member);
  }
}
