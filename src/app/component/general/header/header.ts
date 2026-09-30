import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../service/language/language-service';
import { AnalyticsService } from '../../../service/analytic/analytics-service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit{
  responsiveMenuVisible: Boolean = false;
  pageYPosition: number = 0;
  languageFormControl: FormControl = new FormControl();
  cvName: string = "";
  dropdownOpen: boolean = false;
  responsiveDropdownOpen: boolean = false;

  constructor( 
    private router: Router,
    public analyticsService: AnalyticsService,
    public languageService: LanguageService
  ){}

  ngOnInit(): void {
    this.languageFormControl.valueChanges.subscribe(val => this.languageService.changeLanguage(val))
    this.languageFormControl.setValue(this.languageService.language);
  }

  scroll(el: any) {
    if(document.getElementById(el)){
      document.getElementById(el)?.scrollIntoView({behavior: 'smooth'});
    }else{
      this.router.navigate(['/home']).then(() => document.getElementById(el)?.scrollIntoView({behavior: 'smooth'}));
    }
    this.responsiveMenuVisible=false;
  }

  downloadCV(){
    this.languageService.translateService.get("Header.cvName").subscribe(val => {
      this.cvName = val
      console.log(val)

      let url = window.location.href;
      window.open(`/cv/${this.cvName}`, "_blank");
    })
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleResponsiveDropdown() {
    this.responsiveDropdownOpen = !this.responsiveDropdownOpen;
  }

  selectLanguage(language: string) {
    this.languageFormControl.setValue(language);
    this.dropdownOpen = false;
    this.responsiveDropdownOpen = false;
  }

  @HostListener('window:scroll', ['getScrollPosition($event)'])
  getScrollPosition(event: any) {
    this.pageYPosition = window.pageYOffset;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: any) {
    if (!event.target.closest('.dropdown')) {
      this.dropdownOpen = false;
      this.responsiveDropdownOpen = false;
    }
  }

  changeLanguage(language: string) {
    this.languageFormControl.setValue(language);
  }
}