import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
  standalone: true
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  isModalOpen = false;
  private focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  constructor(private router: Router) {}

  navigateToContact(event: Event) {
    event.preventDefault();
    this.router.navigate(['/'], { fragment: 'contact' });
  }

  openContactModal() {
    this.isModalOpen = true;
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    // Focus the modal after it opens
    setTimeout(() => {
      const modal = document.querySelector('.contact-modal');
      if (modal) {
        (modal as HTMLElement).focus();
      }
    }, 100);
  }

  closeContactModal(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.isModalOpen = false;
    // Restore body scroll
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (!this.isModalOpen) return;

    if (event.key === 'Escape') {
      this.closeContactModal();
      return;
    }

    if (event.key === 'Tab') {
      const modal = document.querySelector('.contact-modal');
      if (!modal) return;

      const focusableElements = modal.querySelectorAll(this.focusableElements);
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          lastElement.focus();
          event.preventDefault();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          firstElement.focus();
          event.preventDefault();
        }
      }
    }
  }
}
