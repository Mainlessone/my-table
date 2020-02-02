import { Pipe, PipeTransform } from '@angular/core';


@Pipe(
    {name: 'search'}
)

export class FilterPipe implements PipeTransform {

    transform(products, categ) {
            return products.filter((product)=> product.price > 600)
        
    }
}