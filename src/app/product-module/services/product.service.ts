import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Product } from "../models/product.model";

@Injectable()
export class ProductService {

    totalProductsSubject = new BehaviorSubject(10)
    totalProductsObservable = this.totalProductsSubject.asObservable()

    urlBase = 'http://localhost:3030/products'

    constructor(private http: HttpClient) {}

    getProductById(id: string): Observable<Product> {
        return this.http.get<Product>(`${this.urlBase}/${id}`)
    }

    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.urlBase)
    }

    deleteProductById(id: string | number): Observable<any> {
        return this.http.delete<any>(`${this.urlBase}/${id}`)
    }

    emitTotalProductsChange(total: number):void {
        this.totalProductsSubject.next(total)
    }
}