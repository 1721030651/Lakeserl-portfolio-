import { computed, inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private currentLang = signal<'vi' | 'en'>('vi');
  public readonly language = computed(() => this.currentLang());

  constructor(
    public translateService: TranslateService,
    private router: Router,
  ) {}

  initLanguage(): void {
    this.translateService.addLangs(['vi', 'en']);
    this.translateService.setDefaultLang('en');

    const savedLang = localStorage.getItem('selectedLanguage') as 'vi' | 'en';
    const browserLang = this.detectBrowserLanguage();
    const initialLang = savedLang || browserLang;

    this.setLanguageInternal(initialLang);
  }

  changeLanguage(language: 'vi' | 'en'): void {
    if (!['vi', 'en'].includes(language)) return;

    this.setLanguageInternal(language);
    
    // Navigate với ngôn ngữ mới - đơn giản
    this.router.navigate([language]);
  }

  toggleLanguage(): void {
    const newLang = this.currentLang() === 'vi' ? 'en' : 'vi';
    this.changeLanguage(newLang);
  }

  syncFromRoute(routeLanguage: string | null): void {
    if (routeLanguage && ['vi', 'en'].includes(routeLanguage)) {
      const lang = routeLanguage as 'vi' | 'en';
      if (this.currentLang() !== lang) {
        this.setLanguageInternal(lang);
      }
    } else if (!routeLanguage) {
      // Nếu không có language trong URL, navigate với ngôn ngữ hiện tại
      this.router.navigate([this.currentLang()], { replaceUrl: true });
    }
  }

  private setLanguageInternal(language: 'vi' | 'en'): void {
    this.translateService.use(language);
    this.currentLang.set(language);
    localStorage.setItem('selectedLanguage', language);
    document.documentElement.lang = language;
  }

  private detectBrowserLanguage(): 'vi' | 'en' {
    const browserLang = navigator.language || (navigator as any).userLanguage;
    return browserLang?.toLowerCase().includes('vi') ? 'vi' : 'en';
  }

  instant(key: string, params?: any): string {
    return this.translateService.instant(key, params);
  }

  get(key: string, params?: any) {
    return this.translateService.get(key, params);
  }

}
