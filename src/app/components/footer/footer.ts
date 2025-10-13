import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
  standalone: true,
  imports: [TranslateModule, CommonModule]
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

  getGoogleMapsUrl(): string {
    const address = 'Mohammed Salem Bakhit Al Bakhit Al Falsi, Hor Al Anz East, Owned Property No. 175-M17, Dubai, United Arab Emirates';
    const encodedAddress = encodeURIComponent(address);
    
    // Check if we're on iOS
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      // Use Google Maps app URL scheme for iOS
      return `comgooglemaps://?q=${encodedAddress}`;
    }
    
    // Check if we're on Android
    if (/Android/.test(navigator.userAgent)) {
      // Use geo: URL scheme for Android
      return `geo:0,0?q=${encodedAddress}`;
    }
    
    // Fallback to web version for desktop and other devices
    return `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
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
