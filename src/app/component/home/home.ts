import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnalyticsService } from '../../service/analytic/analytics-service';
import { LanguageService } from '../../service/language/language-service';
import { About } from './about/about';
import { Banner } from './banner/banner';
import { Contract } from './contract/contract';
import { Education } from './education/education';
import { MoreProject } from './more-project/more-project';
import { Project } from './project/project';
import { Services } from './services/services';

@Component({
  selector: 'app-home',
  imports: [Banner, About, Education, Services, Project, MoreProject, Contract],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  constructor(
    public analyticsService: AnalyticsService,
    private languageService: LanguageService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.languageService.syncFromRoute(
      this.route.snapshot.paramMap.get('language'),
    );
    this.analyticsService.sendAnalyticPageView('/inicio', 'Se entro a inicio');
  }
}
