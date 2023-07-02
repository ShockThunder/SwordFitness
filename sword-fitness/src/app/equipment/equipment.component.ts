import {Component, OnInit} from '@angular/core';
import {faker, } from '@faker-js/faker';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit{
  randomImg: string;

  constructor() {
    this.randomImg = faker.image.url();
  }

  ngOnInit(): void {
  }

}
