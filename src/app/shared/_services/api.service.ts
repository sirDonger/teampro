import { Category, categoriesMocData } from './../_models/category.model';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  // Get list of catgories from api backend. 
  getAllCategories(chunk: boolean){    
    let categoryList: Category[] = categoriesMocData;
    if(chunk) {
      // slice the list of categories in a gorup of five category. 
      let categoryListRows = []
      for (let i = 0; i < categoryList.length; i += 5) {
          let chunk = categoryList.slice(i, i + 5)
          categoryListRows.push(chunk)
      }
      return of(categoryListRows); 
    }else{
      return of(categoryList); 
    }
   
  }


  getCategory(catid: number){
    let categoryList: Category[] = categoriesMocData;
    return of(categoryList.find(x => x.id === catid));
  }

}
