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
        const params = {id,count}
        return this._http.get('http://localhost:8081/api/v1/price/gettotalprice/${params}')
    }
}