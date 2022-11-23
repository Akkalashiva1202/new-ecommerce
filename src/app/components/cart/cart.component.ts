import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/cartapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products:any=[];
  // allp:number=0;
    a:number=0;
    allp:any=0;
  constructor(private cartapi:CartapiService) { }

  ngOnInit():void {

    // this.cartapi.getproductdata().subscribe(res=>{
    //   this.products = res;
    //   this.allp = this.cartapi.gettotalamount();
    //   console.log("total "+this.allp);
    // });

    this.cartapi.getproductdata().subscribe(res=>{
      this.products = res;
      this.allp = this.cartapi.gettotalamount();
      
      console.log("total "+this.allp);
    });

//    this.gett();
  }
  // gett():number{
  //    this.cartapi.getproductdata().subscribe(res=>{
  //    this.products = res;
  //      this.allp = this.cartapi.gettotalamount();
  //   });
  //   return this.allp;
  // }

  removeproduct(item:any)
  {
    this.cartapi.removecartdata(item);
  }
  removeallprod()
  {
    this.cartapi.removeallcart();
  }

}
