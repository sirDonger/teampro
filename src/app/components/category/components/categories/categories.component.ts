import { Categories } from '../../../../shared/_models/category.model';
import { ApiService } from '../../../../shared/_services/api.service';
import { Component, OnInit } from '@angular/core';
import { categoryData } from 'src/app/shared/_models/category-data.model';

@Component({
  selector: 'xb-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  openMenu: string[] = ['home_services'];
  categoriesList: Categories = [];
  categoriesData: categoryData;

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.apiService.getAllCategories(false).subscribe(response => this.categoriesList = response);

    this.apiService.getCategoriesData().subscribe(response => this.categoriesData = response);

  }

  toggleMenu(menu_slug: string) {
    if (this.openMenu.indexOf(menu_slug) === -1) {
      this.openMenu.push(menu_slug);
    } else {
      this.openMenu.splice(this.openMenu.indexOf(menu_slug), 1);
    }
  }

}
