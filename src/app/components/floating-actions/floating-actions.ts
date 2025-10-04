import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-floating-actions',
  imports: [CommonModule],
  templateUrl: './floating-actions.html',
  styleUrl: './floating-actions.css',
  standalone: true
})
export class FloatingActions implements OnInit, OnDestroy {
  showBackToTop = false;
  private scrollThreshold = 300; // Show button after scrolling 300px

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
    const footer = document.getElementById('contact');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
