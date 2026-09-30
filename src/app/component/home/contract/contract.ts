import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../../service/analytic/analytics-service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contract',
  imports: [TranslateModule, CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contract.html',
  styleUrl: './contract.scss'
})
export class Contract implements OnInit{

  constructor(
    public analyticsService: AnalyticsService
  ){}

  ngOnInit(): void {
  }


}
