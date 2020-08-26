import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagensDiaComponent } from './imagens-dia.component';

describe('ImagensDiaComponent', () => {
  let component: ImagensDiaComponent;
  let fixture: ComponentFixture<ImagensDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagensDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagensDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
