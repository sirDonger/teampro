import { Category, categoriesMocData } from './../_models/category.model';
import { Injectable } from '@angular/core';
import { of, Subscription, Observable, BehaviorSubject } from 'rxjs';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public projectCounterBS: BehaviorSubject<{newpost: number, inprogress: number, complete: number}>   = new BehaviorSubject<{newpost: number, inprogress: number, complete: number}>({newpost: 0, inprogress: 0, complete: 0});
  private projectCounter_init = false; 

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

  getTrendingProjects() {
    if(!this.projectCounter_init){
      const source = timer(1000, 2000);  
      source.subscribe(val => {
        let rand = Math.floor((Math.random() * 1000000) + val);
        let rand2 = Math.floor((Math.random() * 1002900) + val);
        let rand3 = Math.floor((Math.random() * 1004070) + val);
        let projCounters = {newpost: rand, inprogress: rand2, complete: rand3}; 
        this.projectCounterBS.next(projCounters);
      });
    } 
    return this.projectCounterBS;

    
  }


}
