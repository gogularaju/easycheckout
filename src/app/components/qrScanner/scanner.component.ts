
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'qr-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class QrScanner  {

  constructor() {
  }

  public scanSuccessHandler($event: any) {
    console.log('QR scanner result: ', $event)
  }

  tryDemo () {
    const product = [{
      id: 1,
      code: 'BL',
      cost: 1400,
      currency: 'Rs',
      manufactureDate: '12-05-2021',
      name: 'Black Label'
    },
    {
      id: 2,
      code: 'RL',
      cost: 1200,
      currency: 'Rs',
      manufactureDate: '14-05-2021',
      name: 'Red Label'
    }]

     const data = JSON.stringify(product);
     localStorage.setItem('productData', data);
  }
    
 

}



