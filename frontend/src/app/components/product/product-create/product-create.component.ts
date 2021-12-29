import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  product: Product = {
    name: 'Produto de Teste',
    price: 0
  }

  constructor(private productService: ProductService, private router: Router) { }


  createProcuct():void{
    this.productService.create(this.product).subscribe(() => {

      this.productService.showMessage('Produto criado!');
      this.router.navigate(['/products']);
      
    })
  }

  cancelar():void{
    this.router.navigate(['/products']);
  }

}
