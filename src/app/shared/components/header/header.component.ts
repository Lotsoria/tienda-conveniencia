import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./css/header.component.css'],

})
export class HeaderComponent {
  constructor(
    private router: Router
  ) { } 
  showFiller(number: number){
    console.log('Filler');
    //redireccionar a la ruta
    if(number==1){

      this.router.navigate(['/ver']);
    }
    else if(number==2){
      this.router.navigate(['/devolucion']);
    }
    else if(number==3){
      this.router.navigate(['/editar']);
    }
    else if(number==4){
      this.router.navigate(['/eliminar']);
    }
    else if(number==5){
      this.router.navigate(['/buscar']);
    }
  };
}
