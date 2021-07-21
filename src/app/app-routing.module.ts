import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cart } from './cart/cart.component';
import { Booktable } from './components/booktable/booktable.component';
import { QrScanner } from './components/qrScanner/scanner.component';
import { Reserve } from './reserve/reserve.component';
import { History } from './history/history.component';
import { NoteComponent } from './components/note/note.component';
import { Payment } from './components/payment/payment.component';
import { Success } from './components/success/success.component';

const routes: Routes = [
    {path: 'cart', component: Cart},
	{path: '', component: QrScanner },
	{path: 'notes', component: NoteComponent },
	{path: 'payment', component: Payment },
	{path: 'success', component: Success}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
