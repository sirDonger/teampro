import { ApiService } from '../../../../../shared/_services/api.service';
import { Category } from '../../../../../shared/_models/category.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'xb-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {

  subCatId: number;
  catData: Category;
  
  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
    ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      console.log(' SubCategoryComponent catData ', params)
      if (params.cat_id){
        this.subCatId = parseInt( params.cat_id );
        this.apiService.getCategory( this.subCatId ).subscribe(response =>  this.catData = response);
      }  
    });

  }

}
