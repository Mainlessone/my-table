import { Pipe, PipeTransform } from '@angular/core';


@Pipe(
    {name: 'search'}
)

export class FilterPipe implements PipeTransform {

    transform(prod:any, cat?:any):any {


        // return (cat.name == 'Category 1') ? prod.filter(sal => {return sal.price >= 700 }):
        //        (cat.name == 'Category 2') ? prod.filter(sal => {return sal.price  <= 200 }):
        //        (cat.name == 'Category 3') ? prod.filter(sal => {return sal.price  <= 800 }):
        //        prod;

        if(cat.id == 1) {
            return prod.filter((sal)=> sal.price > 200);
        }
        else if(cat.id == 2) {
            return prod.filter((sal)=> sal.price > 500);
        }
        else if(cat.id == 3) {
            return prod.filter((sal)=> sal.price < 700);
        }
        else {
            return prod;
        }

    }
}