import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  allProducts: any[] = []
  constructor(private service: MainService) {

  }
  ngOnInit(): void {
    this.getAllProducts()
  }
  getAllProducts() {
    this.service.getAllProduct().subscribe((res: any) => {
      this.allProducts = res.data;
      console.log("data is coming", this.allProducts);

    })
  }
}
