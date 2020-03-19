import { AbstractControl, FormArray } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asFormArray'
})
export class AsFormArrayPipe implements PipeTransform {
  transform(items: AbstractControl): any {
    if (!items) {
      return [];
    }
    return items as FormArray;
  }
}
