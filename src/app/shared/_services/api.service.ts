import { Category, categoriesMocData } from './../_models/category.model';
// import { mockCategories } from './../_models/category.model';
import  *  as  categoriesJson  from  './../_models/mock/categories.json';

import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { Categories } from '../_models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }


  getAllCategories(){    
     
    var categoryList: Category[] = categoriesMocData;

    let categoryListRows = []
    for (let i = 0; i < categoryList.length; i += 5) {
        let chunk = categoryList.slice(i, i + 5)
        categoryListRows.push(chunk)
    }
    
   console.log(' categoryList ', categoryList); 
    console.log(' categoryListRows ', categoryListRows); 
   

    return of(categoryListRows); 

  }

}
