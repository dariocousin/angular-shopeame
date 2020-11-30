import { ProductsService } from './../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  productsList: any = [];

  showGalleryMode: boolean = true;
  
  constructor(private productsServices: ProductsService) { }

  ngOnInit(): void {
    this.productsServices.getAllProducts().subscribe(
      (res: any) => {
        this.productsList = res;
      }
    );

  }


  changeViewButton(){
    this.showGalleryMode = !this.showGalleryMode;
  }

}
