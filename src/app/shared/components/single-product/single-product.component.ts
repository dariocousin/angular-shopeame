import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  @Input() singleProduct;

  @Input() changesFieldsDinamics = {
    name: '',
    description: '',
    price: ''
  };

  @Input() showInfoProduct: boolean;

  @Input() showEditButton: boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }

}
