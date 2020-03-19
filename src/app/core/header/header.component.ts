import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'xb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  role: string;
  constructor(public readonly router: Router) {}

  ngOnInit() {
    this.role = sessionStorage.getItem('role');
  }
}
