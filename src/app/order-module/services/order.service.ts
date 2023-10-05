import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Order } from "../models/order.model";

@Injectable()
export class OrderService {

    totalOrdersSubject = new BehaviorSubject(0)
    totalOrdersObservable = this.totalOrdersSubject.asObservable()

    urlBase = 'http://localhost:8080/orders'

    constructor(private http: HttpClient) { }


    getOrders(): Observable<Order[]> {
        return this.http.get<Order[]>(this.urlBase)
    }

    getOrderById(id: number): Observable<Order> {
        return this.http.get<Order>(`${this.urlBase}/${id}`)
    }

    createOrder(order:Order): Observable<Order> {
        return this.http.post<Order>(this.urlBase, order)
    }

    cancelOrder(id: number): Observable<any> {
        return this.http.patch<any>(`${this.urlBase}/${id}/cancel`, {})
    }

    finishOrder(id: number): Observable<any> {
        return this.http.patch<any>(`${this.urlBase}/${id}/finish`, {})
    }

    emitTotalOrdersChange(total: number): void {
        this.totalOrdersSubject.next(total)
    }

}