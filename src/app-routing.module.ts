import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { Cart } from 'src/app/cart/cart.component';
import { Booktable } from 'src/app/components/booktable/booktable.component';
import { NoteComponent } from 'src/app/components/note/note.component';
import { Reserve } from 'src/app/reserve/reserve.component';
import { Payment } from './components/payment/payment.component';
import { Success } from './components/success/success.component';

const routes: Routes = [
    {path: 'cart', component: Cart},
    {path: '', component: Booktable},
    {path: 'notes', component: NoteComponent},
    {path: 'payment', component:Payment},
       {path: 'success', component:Success}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
