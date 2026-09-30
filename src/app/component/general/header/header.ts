import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AnalyticsService } from '../../../service/analytic/analytics-service';
import { LanguageService } from '../../../service/language/language-service';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit {
  responsiveMenuVisible = false;
  pageYPosition: number = 0;
  languageFormControl = new FormControl<'vi' | 'en'>('en', {
    nonNullable: true,
  });
  dropdownOpen: boolean = false;
  responsiveDropdownOpen: boolean = false;

  constructor(
    private router: Router,
    public analyticsService: AnalyticsService,
    public languageService: LanguageService,
  ) {}

  ngOnInit(): void {
    this.languageFormControl.valueChanges.subscribe((val) =>
      this.languageService.changeLanguage(val),
    );
    this.languageFormControl.setValue(this.languageService.language());
  }

  scroll(el: any) {
    if (document.getElementById(el)) {
      document.getElementById(el)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router
        .navigate(['/'])
        .then(() =>
          document.getElementById(el)?.scrollIntoView({ behavior: 'smooth' }),
        );
    }
    this.responsiveMenuVisible = false;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleResponsiveDropdown() {
    this.responsiveDropdownOpen = !this.responsiveDropdownOpen;
  }

  selectLanguage(language: 'vi' | 'en') {
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
}
