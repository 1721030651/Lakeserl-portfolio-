import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../../service/analytic/analytics-service';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-more-project',
  imports: [TranslateModule, CommonModule, FormsModule, ReactiveFormsModule, ],
  templateUrl: './more-project.html',
  styleUrl: './more-project.scss'
})
export class MoreProject implements OnInit{

  constructor(
    private router: Router,
    public analyticsService: AnalyticsService
  ){}



  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if( !(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }
    redirect(route: string, event: any) {
      const id = event.target.id;
      if(id=='demoLink' || id=='ghLink'){
        return
      }
      window.open(route, '_blank');
    }
}
