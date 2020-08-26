import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsteroidesProximosComponent } from './asteroides-proximos.component';

describe('AsteroidesProximosComponent', () => {
  let component: AsteroidesProximosComponent;
  let fixture: ComponentFixture<AsteroidesProximosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsteroidesProximosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsteroidesProximosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
