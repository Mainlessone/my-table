import { Pipe, PipeTransform } from '@angular/core';



@Pipe(
    {name: 'search'}
)

export class FilterPipe implements PipeTransform {

    transform(prod:any, cat:any):any {

        if(cat === undefined) {
            return prod;
        }
        else {
            switch(cat.id) {
                case 1: {
                    return prod.filter(sal => {return sal.price >= 700 });
    
                }
                case 2: {
                    return prod.filter(sal => {return sal.price <= 200 });

                }
                case 3: {
                    return prod.filter(sal => {return sal.price <= 800 });

                }

            }
        }

    }
}