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
  		const availableData = localStorage.getItem('productData') && JSON.parse(localStorage.getItem('productData'))
  		if(availableData && availableData.length) {
  			this.productData = availableData.map(el => {
        return {
        ...el,
        quantity: 1,
        totalItemCost: parseInt(el.cost)
        }
        })
        this.totalAmount = availableData.reduce((acc, curr) => acc = acc + parseInt(curr.cost), 0)
  		} else {
        this.productData = []
      }
  	}

    checkout () {} 

    removeItem (item, index) {
   
      if(item.totalItemCost === 0)  return;

        this.productData = this.productData.map(x => {
            if (x.id === item.id) {
              this.totalAmount =  this.totalAmount - item.cost;
               return {
                ...x,
                quantity: x.quantity - 1,
                totalItemCost: parseInt(x.totalItemCost) - parseInt(x.cost)
              }  
            } else {
              return x
            }
        });

        const obj = this.productData.find(x => x.id === item.id);


        obj.totalItemCost === 0 && this.productData.splice(index, 1);
        localStorage.setItem('productData', JSON.stringify(this.productData));
    }

  
    addItem (item) {
      this.totalAmount =  this.totalAmount + parseInt(item.cost);

      this.productData = this.productData.map(x => {
          if(x.id === item.id) {
            return {
            ...x,
            quantity: x.quantity + 1,
            totalItemCost: parseInt(x.totalItemCost) + parseInt(x.cost)
            }
          } else {
            return x
          }
      })
    }

}
