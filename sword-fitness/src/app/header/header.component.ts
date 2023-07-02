import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] | undefined;
  activeItem: MenuItem = { label: '', icon: 'pi pi-fw pi-hashtag' };

  constructor() { }

  ngOnInit() {
    this.items = [
      { label: '', icon: 'pi pi-fw pi-hashtag', routerLink: '/main-page' },
      { label: '+7 999 999-99-99', icon: 'pi pi-fw pi-phone', disabled: true },
      { label: 'Оснащение', routerLink: '/equipment' },
      { label: 'Тарифы', routerLink: '/prices' },
      { label: 'О нас', routerLink: '/about' },
      { label: 'Контакты', routerLink: '/contacts' },
      { label: '', icon: 'pi pi-fw pi-user', routerLink: '/user-profile' },
    ];
  }

}
