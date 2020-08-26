import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuriosityImgComponent } from './curiosity-img.component';

describe('CuriosityImgComponent', () => {
  let component: CuriosityImgComponent;
  let fixture: ComponentFixture<CuriosityImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuriosityImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuriosityImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
