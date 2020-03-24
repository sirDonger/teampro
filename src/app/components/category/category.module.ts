import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { SubCategoryComponent } from './components/category/sub-category/sub-category.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  { path: 'all', component: CategoriesComponent },
  {
    path: '',
    component: CategoryComponent,
    children: [
      {path: ':cat_id', component: SubCategoryComponent},  
    ]
  },



];

@NgModule({
  declarations: [CategoriesComponent, CategoryComponent, SubCategoryComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CategoryModule { }
