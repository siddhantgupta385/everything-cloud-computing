import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [FormsModule, CommonModule,NgbCarouselModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  images = [
    'about_us_1.avif',
    'about_us_2.jpg',
    'about_us_3.avif',
  ];
  


}
