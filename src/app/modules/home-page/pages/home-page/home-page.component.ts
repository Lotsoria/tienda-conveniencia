import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ProductsService } from 'src/app/shared/services/products.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UsuariosInterface } from 'src/app/core/interface/user.interface';
import { AuthService } from 'src/app/shared/services/auth.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./css/home-page.component.css']
})
export class HomePageComponent implements OnInit {
  myControl = new FormControl<string | any>('');
  options: any[] = [];
  filteredOptions!: Observable<any[]>;
  loginOn = false;
  userData?:UsuariosInterface;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private productService : ProductsService,
    private authservice: AuthService,
    private router: Router
  ){
    this.matIconRegistry.addSvgIcon(
      'custom_icon_instagram',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/Instagram_dark.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'custom_icon_github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/github.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'custom_icon_facebook',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../../../assets/facebook.svg')
    );
  }
  ngOnInit() {
    this.getData();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return this._filter(name as string) ;
      }),
    );

    this.authservice.userLoginOn.subscribe((data) => {
      this.loginOn = data;
      console.log('LoginOn:', this.loginOn);
    });
    this.authservice.userData.subscribe((data) => {
      this.userData = data;
      console.log('UserData:', this.userData);
    });
  }

  getData(){
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.options = data
        console.log(this.options)
      }
    })

  }

  displayFn(user: any): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  redirect(n: number){
    if(n == 1){
      this.router.navigate(['/auth/login']);
    }
    else if(n == 2){

    }
  }
  logOut(){
    this.authservice.logout();
    this.router.navigate(['/auth/login']);
  }
}
