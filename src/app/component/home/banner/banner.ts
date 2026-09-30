import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AnalyticsService } from '../../../service/analytic/analytics-service';

@Component({
  selector: 'app-banner',
  imports: [TranslateModule, CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './banner.html',
  styleUrl: './banner.scss'
})
export class Banner implements OnInit{

  constructor(
    public analyticsService: AnalyticsService
  ){}
  
  ngOnInit(): void {
  }

}
