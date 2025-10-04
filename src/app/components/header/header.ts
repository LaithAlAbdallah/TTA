import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  standalone: true
})
export class HeaderComponent {
  isScrolled = false;
  menuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  scrollToContact(event: Event) {
    event.preventDefault();
    this.closeMenu();
    const footer = document.getElementById('contact');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  }

  scrollToWhoWeAre(event: Event) {
    event.preventDefault();
    this.closeMenu();
    
    const currentPath = window.location.pathname;
    
    if (currentPath === '/') {
      // On home page - scroll to team section
      const teamSection = document.getElementById('who-we-are');
      if (teamSection) {
        teamSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (currentPath === '/about') {
      // On about page - scroll to who-we-are section
      const whoWeAreSection = document.getElementById('who-we-are');
      if (whoWeAreSection) {
        whoWeAreSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // On any other page - navigate to about page
      window.location.href = '/about#who-we-are';
    }
  }
}
