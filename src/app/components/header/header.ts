import { Component, HostListener, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  standalone: true,
  imports: [TranslateModule, LanguageSwitcherComponent]
})
export class HeaderComponent implements OnDestroy {
  isScrolled = false;
  menuOpen = false;

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.toggleBodyScroll();
  }

  closeMenu() {
    this.menuOpen = false;
    this.toggleBodyScroll();
  }

  private toggleBodyScroll() {
    if (this.menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  ngOnDestroy() {
    // Restore body scroll when component is destroyed
    document.body.style.overflow = '';
  }

  scrollToContact(event: Event) {
    event.preventDefault();
    this.closeMenu();
    
    const currentPath = window.location.pathname;
    
    if (currentPath === '/') {
      // On home page - scroll to contact card
      const contactCard = document.getElementById('contact');
      if (contactCard) {
        // Get the actual header height dynamically
        const header = document.querySelector('.header');
        const headerHeight = header ? header.getBoundingClientRect().height : 80;
        
        // Calculate precise position - element top minus header height
        const elementPosition = contactCard.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: Math.max(0, elementPosition), // Ensure we don't scroll to negative position
          behavior: 'smooth'
        });
      }
    } else {
      // On any other page - navigate to home page with contact fragment
      this.router.navigate(['/'], { fragment: 'contact' });
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
        // Get the actual header height dynamically
        const header = document.querySelector('.header');
        const headerHeight = header ? header.getBoundingClientRect().height : 80;
        
        // Calculate precise position - element top minus header height
        const elementPosition = teamSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: Math.max(0, elementPosition), // Ensure we don't scroll to negative position
          behavior: 'smooth'
        });
      }
    } else if (currentPath === '/about') {
      // On about page - scroll to who-we-are section
      const whoWeAreSection = document.getElementById('who-we-are');
      if (whoWeAreSection) {
        // Get the actual header height dynamically
        const header = document.querySelector('.header');
        const headerHeight = header ? header.getBoundingClientRect().height : 80;
        
        // Calculate precise position - element top minus header height
        const elementPosition = whoWeAreSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: Math.max(0, elementPosition), // Ensure we don't scroll to negative position
          behavior: 'smooth'
        });
      }
    } else {
      // On any other page - navigate to about page with fragment
      this.router.navigate(['/about'], { fragment: 'who-we-are' });
    }
  }
}
