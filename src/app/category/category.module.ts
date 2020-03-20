import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { SubCategoryComponent } from './components/category/sub-category/sub-category.component';

const routes: Routes = [
  // { path: '', component: CategoriesComponent },
  // { path: ':cat_id', component: CategoryComponent },

  {
    path: '',
    component: CategoryComponent,
    children: [
      {path: ':cat_id', component: SubCategoryComponent},  
    ]
  },



];

@NgModule({
  declarations: [CategoriesComponent, CategoryComponent, SubCategoryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CategoryModule { }
