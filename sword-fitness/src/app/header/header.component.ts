import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items: MenuItem[] | undefined;

  constructor() { }

  ngOnInit() {
    this.items = [
      { label: '', icon: 'pi pi-fw pi-hashtag' },
      { label: '+7 999 999-99-99', icon: 'pi pi-fw pi-phone' },
      { label: 'Оснащение' },
      { label: 'Тарифы' },
      { label: 'О нас' },
      { label: 'Контакты' },
      { label: '', icon: 'pi pi-fw pi-user' },
    ];
  }

}
