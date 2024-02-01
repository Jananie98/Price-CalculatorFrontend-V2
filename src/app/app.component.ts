import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { TableService } from './services/table.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  amtSingles: number = 0;
  amtCarton: number = 0;
  selectedValue: string = '';
  

  constructor(
    private _http: HttpClient,
    private _tableService: TableService) { }

  ngOnInit(): void {
    // Load the table
  }

  getInputs(): void {
    this.amtCarton = this.amtCarton;
    this.amtSingles = this.amtSingles;
    this.selectedValue = this.selectedValue;

    let id: number =+ this.selectedValue;
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

    this._tableService.getPriceByProditEqualsAndItemcount(id, count).subscribe(
      (totalPrice: number) => {
        console.log('Total Price:', totalPrice);
        // You can now use the total price in your component logic
      },
      (error) => {
        console.error('Error fetching total price:', error);
      }
    );
  }


}


