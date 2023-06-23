import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewComponentComponent } from './overview-component.component';

describe('OverviewComponentComponent', () => {
  let component: OverviewComponentComponent;
  let fixture: ComponentFixture<OverviewComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverviewComponentComponent],
    });
    fixture = TestBed.createComponent(OverviewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
