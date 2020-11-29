import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  @Input() singleProduct;

  @Input() showEditButton: boolean;

  val: number;

  constructor() { }

  ngOnInit(): void {
    console.log(this.singleProduct.stars);
    this.val = this.singleProduct.stars;
    console.log(this.val);
  }

}
