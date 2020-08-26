import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagensTerraComponent } from './imagens-terra.component';

describe('ImagensTerraComponent', () => {
  let component: ImagensTerraComponent;
  let fixture: ComponentFixture<ImagensTerraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagensTerraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagensTerraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
