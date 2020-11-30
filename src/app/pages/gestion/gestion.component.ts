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

  fieldsValuesDinamics = {
    name: '',
    description: '',
    price: ''
  };

  constructor(private route: ActivatedRoute, private productsServices: ProductsService, private formProductsGestion: FormBuilder) { 
    
    this.createChangeFields = this.formProductsGestion.group(
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
          this.fieldsValuesDinamics.name = product['name'];
          this.fieldsValuesDinamics.price = product['price'];
          this.fieldsValuesDinamics.description = product['description'];
        });
        // this.createChangeFields.patchValue({ 
        //   name: this.productDetail.name,
        //   price: this.productDetail.price,
        //   description: this.productDetail.description,
        //   image: this.productDetail.image,
        //   feedback: this.productDetail.stars
        // });
        this.newProduct = false;

      }
    });
  }


  changesFields(){
    this.submittedProduct = true;
    this.createChangeFields.value;
    console.log(this.createChangeFields.value);
    // http://cdn.onlinewebfonts.com/svg/img_90947.png
  }

  changeName(valueName: string){
    this.fieldsValuesDinamics.name = valueName;
  }

  changePrice(valuePrice: string){
    this.fieldsValuesDinamics.price = valuePrice;
  }

  changeDescription(valueDescription: string){
    this.fieldsValuesDinamics.description = valueDescription;
  }

}
