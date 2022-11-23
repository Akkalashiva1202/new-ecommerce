import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/cartapi.service';
import { ServicesapiService } from 'src/app/servicesapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productlist:any;
  constructor(private api:ServicesapiService,private cartapi:CartapiService) { }

  ngOnInit(): void {
    this.api.getproduct().subscribe(data=>{
      this.productlist = data;
      this.productlist.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
  };

  addtocart(item:any)
  {
    this.cartapi.addtocart(item);
  }

}
