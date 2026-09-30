import { Banner } from './banner/banner';
import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../service/analytic/analytics-service';
import { About } from './about/about';
import { Education } from './education/education';
import { Project } from './project/project';
import { MoreProject } from './more-project/more-project';
import { Contract } from './contract/contract';
import { Services } from './services/services';

@Component({
  selector: 'app-home',
  imports: [Banner, About, Education, Services, Project, MoreProject, Contract],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit{

  constructor(
    public analyticsService: AnalyticsService
  ){}

  ngOnInit(): void {
    this.analyticsService.sendAnalyticPageView("/inicio", "Se entro a inicio")
  }
}
