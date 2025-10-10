import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-floating-actions',
  imports: [CommonModule, TranslateModule],
  templateUrl: './floating-actions.html',
  styleUrl: './floating-actions.css',
  standalone: true
})
export class FloatingActions implements OnInit, OnDestroy {
  showBackToTop = false;
  private scrollThreshold = 300; // Show button after scrolling 300px

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkScrollPosition();
  }

  ngOnDestroy() {
    // Cleanup if needed
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.checkScrollPosition();
  }

  private checkScrollPosition() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.showBackToTop = scrollTop > this.scrollThreshold;
  }
  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToContact() {
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
}
