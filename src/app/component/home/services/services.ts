import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../../service/analytic/analytics-service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-services',
  imports: [TranslateModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services implements OnInit{

  constructor(
    public analyticsService: AnalyticsService
  ){

  }

  ngOnInit(): void {
  }

}
