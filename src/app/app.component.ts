import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from "./loading/loading.component";
import { LoadingService } from './loading.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, NavbarComponent, HomeComponent, FormsModule, HttpClientModule, LoadingComponent]
})
export class AppComponent{

  constructor(public loadingService: LoadingService)  {}

  title = 'everything-cloud-platform-ui';
  
  // ngOnInit(): void {
  //   console.log(this.loadingService.loading$.subscribe)
  // }

}
