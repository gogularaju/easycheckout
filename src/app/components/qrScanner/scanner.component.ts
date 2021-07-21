
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'qr-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class QrScanner  {

  scanValue: any;
  originalValue: any;
  constructor() {
  }

  public scanSuccessHandler(e: any) {
    const value = e || '';
    this.originalValue = value;

    console.log('e', e, typeof e)

    var properties = value.split(',');
      console.log('value', value)
    var obj = {};
    properties.forEach(function(property) {
        var tup = property.split(':');
        obj[tup[0]] = tup[1];
    });

    console.log('obj', obj, typeof obj)

    this.scanValue = obj || {};
  }

  proceedCheckout () {
     let oldData: any = localStorage.getItem('productData') || [];
     let x: any = oldData.length ? JSON.parse(oldData) : [];
     const data = JSON.stringify([...x, this.scanValue]);
     localStorage.setItem('productData', data);
  }

}



