import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-products',
  templateUrl: './gallery-products.component.html',
  styleUrls: ['./gallery-products.component.scss']
})
export class GalleryProductsComponent implements OnInit {

  @Input() galleryProducts;

  constructor() { }

  ngOnInit(): void {

  }

}
