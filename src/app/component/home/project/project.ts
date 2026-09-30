import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AnalyticsService } from '../../../service/analytic/analytics-service';


@Component({
  selector: 'app-project',
  imports: [TranslateModule, TranslateModule, CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './project.html',
  styleUrl: './project.scss'
})
export class Project implements OnInit{
 @ViewChild('imgContainer') imgContainer!: ElementRef;

  constructor(
    public analyticsService: AnalyticsService
  ) { }

  

  ngOnInit(): void {
  }

  debug(){
    this.imgContainer.nativeElement.scroll({
      top: this.imgContainer.nativeElement.scrollHeight,
      left: 0,
      behavior: 'smooth',    
    });
  }
}
