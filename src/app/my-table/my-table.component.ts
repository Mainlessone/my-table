import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Logger } from '../logger-service';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.scss']
})
export class MyTableComponent implements OnInit {

  private products = [];
  private selectedCategory;
  
  private categories = [
    {id:1, name: 'Category 1'},
    {id:2, name: 'Category 2'},
    {id:3, name: 'Category 3'}
  ];

  constructor(private datas:DataService, private logger: Logger){}

  ngOnInit() {
    this.products = this.datas.getProducts();
    console.log(this.selectedCategory)
  };


  deleteProduct(product) {
    this.logger.logg(product);
    return this.datas.deleteProducts(product);
  };



  getColor(product):string {
    if(product.price > 500) {
      return 'red';
    }
  };

  addTask(task,names:any,prices:number) {
    return this.datas.addTask(task, names, prices);
  };

  

  } 
