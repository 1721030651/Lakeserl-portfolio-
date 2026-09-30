import { LanguageService } from './service/language/language-service';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { Header } from './component/general/header/header';
import { Footer } from './component/general/footer/footer';
import { Home } from './component/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  title = 'Lakeserl-Porfolio';

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private languageService: LanguageService
  ){}
  ngOnInit(): void {
    this.languageService.initLanguage()

    this.titleService.setTitle( "Lakeserl | Software Developer" );

    this.metaService.addTags([
      {name: 'keywords', content: 'FullStack, software, developer'},
      {name: 'description', content: 'As a software engineer with expertise in both MEAN and MERN stacks, I have a comprehensive understanding of full-stack web development. My strong foundation in JavaScript allows me to effectively work with front-end technologies such as Angular and React, as well as back-end technologies such as Node.js and Express.'},
    ]);
  }
}
