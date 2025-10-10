import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { LangSwitcherComponent } from '../lang-switcher/lang-switcher.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  standalone: true,
  imports: [LangSwitcherComponent, TranslateModule]
})
export class HeaderComponent {
  isScrolled = false;
  menuOpen = false;

  constructor(private router: Router) {}

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
