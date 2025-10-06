import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-card',
  imports: [CommonModule],
  templateUrl: './contact-card.html',
  styleUrl: './contact-card.css',
  standalone: true
})
export class ContactCard {
  contactNumbers = [
    { number: '+962 7 9599 0880', location: 'Amman, Jordan', link: 'tel:+962795990880' },
    { number: '+971 56 750 9403', location: 'Dubai, United Arab Emirates', link: 'tel:+971567509403' },
    { number: '+994 50 265 7442', location: 'Baku, Azerbaijan', link: 'tel:+994502657442' }
  ];

  address = {
    text: 'Mohammed Salem Bakhit Al Bakhit Al Falsi, Hor Al Anz East, Owned Property No. 175-M17, Dubai, United Arab Emirates',
    mapLink: 'https://www.google.com/maps/search/?api=1&query=Mohammed+Salem+Bakhit+Al+Bakhit+Al+Falsi%2C+Hor+Al+Anz+East%2C+Owned+Property+No.+175-M17%2C+Dubai%2C+United+Arab+Emirates'
  };
}
