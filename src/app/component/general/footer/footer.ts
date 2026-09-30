import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../../service/analytic/analytics-service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer implements OnInit{
  constructor(
    public analyticsService: AnalyticsService
  ){}
  
  ngOnInit(): void {
  }

  
}
