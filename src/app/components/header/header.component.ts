import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/cartapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalitem =0;
  constructor(private cartapi:CartapiService) { }

  ngOnInit(): void {

    this.cartapi.getproductdata().subscribe(res=>{
      this.totalitem=res.length;
    });

  }

}
