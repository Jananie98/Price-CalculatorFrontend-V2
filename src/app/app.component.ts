import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, map } from 'rxjs';
import { TableService } from './services/table.service';
import { response } from 'express';
import { IProduct } from './product';
import { IProductPrice } from './productPrice';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  amtSingles: number = 0;
  amtCarton: number = 0;
  selectedValue: string = '';
  totalprice!: Observable<number>;
  unitprice!: Observable<number>;
  unitPriceObservables = [];


  // The defined interface for stongly typechecking
  // In the HTML component *ngFor="let product of products"
  products: IProduct[] = [];
  productprice: IProductPrice = new IProductPrice() ;


  constructor(
    private _http: HttpClient,
    private _tableService: TableService) { }

  ngOnInit(): void {

    for (let prodid: number = 1; prodid < 3; prodid++) {
      // this outer for loop should be expanded with the length of product list array
      //prodid < prodid.length??
      for (let unitCount: number = 0; unitCount < 6; unitCount++) {
        //  implement your code here to get price and push to an array
        // this._tableService.getPriceByProditEqualsAndItemcount(prodid, unitCount)
        //   .subscribe({
        //     next: (products) => {
        //       products.push(...products.map(product => ({
        //         productId: product.productId,
        //       } as IProduct)))
        //     },
        //   });
      }
    }
  }

  getInputs(): void {
    this.amtCarton = this.amtCarton;
    this.amtSingles = this.amtSingles;
    this.selectedValue = this.selectedValue;

    let id: number = + this.selectedValue;
    let count: number = 0;

    if (id = 1) {
      let totalitems = this.amtSingles + (this.amtCarton * 20);
      count = totalitems;
    } else {
      let totalitems = this.amtSingles + (this.amtCarton * 5);
      count = totalitems;
    }

    console.log('Product Id', id);
    console.log('Carton Count', this.amtCarton);
    console.log('Singles Count', this.amtSingles);
    console.log('Total', count);

    this._tableService.getPriceByProditEqualsAndItemcount(id, count)
      .subscribe(
         productprice => {
           this.productprice = productprice;
          console.log('Total Price :', productprice.totalprice);
          console.log(JSON.stringify(productprice));
        }
      );
    // console.log('Total Price :', this.products);
    
    // console.log({{this.products.productId}});
  }
}


