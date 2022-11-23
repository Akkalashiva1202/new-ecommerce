import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartapiService {

  cartdata :any=[];
   productList = new BehaviorSubject<any>([]);
  //productList  = new observable<any>([]);
  constructor(private http:HttpClient) { }

  getproductdata()
  {
  console.log(this.productList.asObservable())
    return this.productList.asObservable();
  }
  all()
  {
    // console.log(" this is all : "+this.productList.subscribe);
  }
  setproduct(product:any)
  {
    this.cartdata.push(...product);
    // console.log(this.cartdata.push(...product));
    console.log(this.cartdata);
    this.productList.next(product);
  }
  addtocart(product:any)
  {
    this.cartdata.push(product);
    this.productList.next(this.cartdata);
    this.gettotalamount();
    console.log(this.cartdata);
  }
  gettotalamount():number
  {
    let gtotal=0;
    this.cartdata.map((prod:any)=>{
      gtotal+= prod.total;
      this.all();
    });
    return gtotal;
  }
  //remove cart data one by one
  removecartdata(product:any)
  {
    this.cartdata.map((a:any,index:any)=>{
      if(product.id === a.id)
      {
         this.cartdata.splice(index,1);
        // this.cartdata.remove(index.value);
        // this.cartdata.delete(index);
      }
    });
    this.productList.next(this.cartdata);
    }

  removeallcart()
  {
    // this.cartdata=[this.];
    this.cartdata =[];
    // this.productList.next(this.productList);
    this.productList.next(this.cartdata);
  }
}
