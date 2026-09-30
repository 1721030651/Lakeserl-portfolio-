import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreProject } from './more-project';

describe('MoreProject', () => {
  let component: MoreProject;
  let fixture: ComponentFixture<MoreProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
