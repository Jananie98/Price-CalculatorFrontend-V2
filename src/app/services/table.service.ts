import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TableService{
    constructor(private _http: HttpClient){}

    findByProdit(id: number): Observable<any>{
        return this._http.get('http://localhost:8081/api/v1/product/getbyid/{id}')
    }

    getPriceByProditEqualsAndItemcount(id: number , count: number): Observable<any>{
        console.log("Hello")
        const params = {id,count}
        console.log(id);
        console.log(count);
        console.log(params);
        console.log(this._http.get('http://localhost:8081/api/v1/price/gettotalprice/${params}'));
        return this._http.get('http://localhost:8081/api/v1/price/gettotalprice/${params}')
    }
}