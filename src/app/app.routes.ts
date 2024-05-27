import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { JobComponent } from './job/job.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { AboutUsBigComponent } from './about-us-big/about-us-big.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
    { path: '', pathMatch:'full', component: HomeComponent },
    { path: 'about-us', pathMatch:'full', component: AboutUsBigComponent },
    { path: 'contact-us', pathMatch:'full', component: ContactUsComponent },
    { path: 'course/:courseName', component: CourseComponent },
    { path: 'job/:jobName', component: JobComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }