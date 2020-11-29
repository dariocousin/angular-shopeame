import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from './../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {

  createChangeFields: FormGroup;
  submittedProduct: boolean = false;

  newProduct: boolean = true;

  productDetail: any = {};

  constructor(private route: ActivatedRoute, private productsServices: ProductsService, private formProducts: FormBuilder) { 
    
    this.createChangeFields = this.formProducts.group(
      {
        name: ['', Validators.required],
        price: ['', Validators.required],
        description: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(255)]],
        image: ['', Validators.required],
        feedback: ['', Validators.required],
      }
    );
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
      const id = params.get('id');
      
      if(id){
        this.productsServices.getSingleProduct(id).subscribe( product => {
          this.productDetail = product;
          this.newProduct = false;
          this.createChangeFields.patchValue({ 
            name: product['name'],
            price: product['price'],
            description: product['description'],
            image: product['image'],
            feedback: product['stars']
          });
        })
      }
    })
  }


  changesFields(){
    this.submittedProduct = true;
    this.createChangeFields.value;
  }

}
