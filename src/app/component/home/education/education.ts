import { CommonModule } from '@angular/common';
import { Component, computed, OnInit, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AnalyticsService } from '../../../service/analytic/analytics-service';

@Component({
  selector: 'app-education',
  imports: [TranslateModule, TranslateModule, CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class Education implements OnInit{

  active = 0;

  constructor(
    analyticsService: AnalyticsService
  ){}

  ngOnInit(): void {
  }

}
