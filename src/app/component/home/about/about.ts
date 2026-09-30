import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../../service/analytic/analytics-service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  imports: [TranslateModule, CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit{

  constructor(
    public analyticsService: AnalyticsService
  ){}
  
  ngOnInit(): void {
  }

  

}
