import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bpw-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.scss']
})
export class ProductDisplayComponent implements OnInit {
products: {[key: string]: string}[] = [
  {
    image: 'assets/images/w-20.png',
    name: 'Body Oil',
    price: '$190.99'
  },
  {
    image: 'assets/images/w-21.png',
    name: 'Sunrise Shampoo',
    price: '$190.99'
  },
  {
    image: 'assets/images/w-22.png',
    name: 'Luxury Oil Gel',
    price: '$190.99'
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
