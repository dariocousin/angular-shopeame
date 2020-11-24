import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryProductsComponent } from './gallery-products.component';

describe('GalleryProductsComponent', () => {
  let component: GalleryProductsComponent;
  let fixture: ComponentFixture<GalleryProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
