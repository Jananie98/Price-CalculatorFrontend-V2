import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { IProduct } from "../product";
import { IProductPrice } from "../productPrice";

@Injectable({
    providedIn: 'root'
})
export class TableService{
    totalprice_url:string = '';
    
    constructor(private _http: HttpClient){}

    getPriceByProditEqualsAndItemcount(id: number , count: number): Observable<IProductPrice>{
        console.log("Hello we are now inside the service");    
        console.log(id);
        console.log(count);
        const params = {id,count};
        console.log(params);
        
        this.totalprice_url = `http://localhost:8081/api/v1/price/gettotalprice?id=${id}&count=${count}`;
        return this._http.get<IProductPrice>(this.totalprice_url);
        // tap((data)=> console.log("All :" + JSON.stringify(data)));
    }  
}