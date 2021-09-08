import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  // Step 1: default cart items in the cart
  private defaultCartItems: any[] = [
    {
      id: 2,
      name: 'Cheese',      // Usually data is loaded from the backend.
      category: 'Dairy',
      price: '$6.38'
    }
  ];

  // Step 2: Create Behaviour Subject with default item
  private cartItemList = new BehaviorSubject(this.defaultCartItems);

  // Step 3: Making the behaviorSubject as Observable, so any other subject can subscribe to it
  latestCartItemsList: Observable<any[]> = this.cartItemList.asObservable();
  // latestCartItemList is subscribable to any components

  constructor() { }

  updateCart(pdt:any){
    console.log(pdt);
    this.latestCartItemsList.pipe( take(1)).subscribe( (cartItems)=>{
      console.log(cartItems);
      console.log(...cartItems); //spread operator
      const newCartItemsArr = [...cartItems, pdt];
      console.log(newCartItemsArr);
      this.cartItemList.next(newCartItemsArr);
    })
  }
}
