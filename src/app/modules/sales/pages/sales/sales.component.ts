import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./css/sales.component.css']
})
export class SalesComponent implements OnInit{
  mostrar = true;
  productos = [
  {
    img: 'assets/img/jugo.jpeg',
    title: 'Jugo de naranja',
    price: 10
  },
  {
    img: 'assets/img/tortrix.jpg',
    title: 'Tortrix',
    price: 1
  },
  {
    img: 'assets/img/pan.jpg',
    title: 'Pan',
    price: 1.5
  }
  ];

  ngOnInit() {
    console.log("Esta es la lista de productos ",this.productos);
  }
}
