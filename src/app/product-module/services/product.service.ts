import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Product } from "../models/product.model";

// nossa classe de serviço, anotamos com @Injectable para indicar que essa classe é injetável
@Injectable()
export class ProductService {

    // criando um um sujeito e tornando ele observável
    totalProductsSubject = new BehaviorSubject(0)
    totalProductsObservable = this.totalProductsSubject.asObservable()

    urlBase = 'http://localhost:3030/products'

    // criando um construtor que recebe HttpClient
    constructor(private http: HttpClient) {}

    // criando um método que recupera um produto a partir do id
    getProductById(id: string): Observable<Product> {
                                    // pegando a variável membro urlBase que contém uma parte da rota
                                    // passando o parametro id na rota
        return this.http.get<Product>(`${this.urlBase}/${id}`)
    }

    // método que recupera todos os elementos da lista de produtos
    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.urlBase)
    }

    // deletando um produto a partir do id que terá um retorno Observable de qualquer tipo 
    // usamos a pipe | para indicar que o tipo de id pode ser um number ou uma string
    deleteProductById(id: string | number): Observable<any> {
        return this.http.delete<any>(`${this.urlBase}/${id}`)
    }

    // método que emite a mudança do total de produtos
    emitTotalProductsChange(total: number):void {
        this.totalProductsSubject.next(total)
    }

    updateProduct(product: Product): Observable<any> {
        return this.http.put<any>(this.urlBase, product)
    }

    createProduct(product:Product): Observable<Product> {
        return this.http.post<Product>(this.urlBase, product)
    }
}