import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcityComponent } from './showcity.component';

describe('ShowcityComponent', () => {
  let component: ShowcityComponent;
  let fixture: ComponentFixture<ShowcityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowcityComponent]
    });
    fixture = TestBed.createComponent(ShowcityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
