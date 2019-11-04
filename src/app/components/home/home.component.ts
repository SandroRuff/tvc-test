import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tvc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public modules: object[] = [/*{
    route: 'products',
    title: 'Manage Products'
  }, */{
    route: 'settings',
    title: 'Manage Profile'
  }];

  constructor() { }

  ngOnInit() {}
}
