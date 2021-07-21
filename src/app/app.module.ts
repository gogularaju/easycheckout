import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Booktable } from './components/booktable/booktable.component';
import { Cart } from './cart/cart.component';
import { Header } from './header/header.component';
import { History } from './history/history.component';
import { NavBar } from './nav/nav.component';
import { Reserve } from './reserve/reserve.component';
import { TableDataFilter } from 'src/Util/filter';
import { QrScanner } from './components/qrScanner/scanner.component'
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { NoteComponent } from './components/note/note.component';
import { Payment } from './components/payment/payment.component';
import { Success } from './components/success/success.component';


@NgModule({
  declarations: [
    AppComponent,
    Booktable,
    Cart,
    Header,
    History,
    NavBar,
    Reserve,
    TableDataFilter,
    QrScanner,
    NoteComponent,
    Payment,
    Success
  ],
  imports: [
  CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule ,
    AppRoutingModule,
    ZXingScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
