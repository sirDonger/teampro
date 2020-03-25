import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../shared/_services/api.service';
import { Categories } from '../../../../shared/_models/category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xb-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  openMenu: string[] = ['home_services'];
  categoriesList: Categories = [];
  subCatId: number;  
  
  constructor( private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    
   if ( this.route.firstChild ){
    this.route.firstChild.params.subscribe(params => this.subCatId = (params.cat_id)?(parseInt(params.cat_id)):0);
   }   
   this.apiService.getAllCategories(false).subscribe(response =>  this.categoriesList = response);
  }

  toggleMenu(menu_slug: string){
    if (this.openMenu.indexOf(menu_slug) === -1 ){
      this.openMenu.push(menu_slug);
    }else{
      this.openMenu.splice(this.openMenu.indexOf(menu_slug), 1);
    }
  }

}
