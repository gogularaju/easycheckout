
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'qr-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class QrScanner  {

  scanValue: any;
  originalValue: any;
  appendProducts: any = [];

  constructor() {
  }

  public scanSuccessHandler(e: any) {
    const value = e || '';
    this.originalValue = value;

    console.log('e', e, typeof e)

    var properties = value.split(',');
    console.log('value', value)

    if(value.includes('id')) {
      var obj = {};
      properties.forEach(function(property) {
          var tup = property.split(':');
          obj[tup[0]] = tup[1];
      });

      console.log('obj', obj, typeof obj)

      this.scanValue = obj || {};


      let idx: any;
      if(this.appendProducts.length) {
        idx= this.appendProducts.findIndex(el => el.id === this.scanValue.id);
        if(idx === -1) {
         this.appendProducts.push(this.scanValue)
        } 
      } else {
       this.appendProducts.push(this.scanValue)
      }
      const len = this.appendProducts.length;
    }

  }

  proceedCheckout () {
     let oldData: any = localStorage.getItem('productData') || [];
     let x: any = oldData.length ? JSON.parse(oldData) : [];
     let y = this.appendProducts.length ? [...this.appendProducts] : [this.scanValue];
     const data = JSON.stringify([...x, ...y]);
     localStorage.setItem('productData', data);
  }


}



