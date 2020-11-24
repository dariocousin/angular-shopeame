import { ProductsService } from './../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {

  productDetail: any = {};

  constructor(private route: ActivatedRoute, private productsServices: ProductsService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe( params => {
      const id = params.get('id');
      
      if(id){
        this.productsServices.getSingleProduct(id).subscribe( product => {
          this.productDetail = product;
        })
      }
    })
  }

}
