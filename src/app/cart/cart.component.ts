import { Component } from '@angular/core';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class Cart  {
	productData: any;
  totalAmount: any;
  	
  	constructor () {
  		const availableData = JSON.parse(localStorage.getItem('productData'))
  		if(availableData && availableData.length) {
  			this.productData = availableData
        this.totalAmount = availableData.reduce((acc, curr) => acc = acc + curr.cost, 0)
  		} else {
        this.productData = []
      }
  	}


    checkout () {
      
    }

    removeItem (item) {
      const index = this.productData.findIndex(x => x.id === item.id);
      if (index !== -1) {
          this.productData.splice(index, 1);
           this.totalAmount =  this.totalAmount - item.cost;
      }

    }

}
