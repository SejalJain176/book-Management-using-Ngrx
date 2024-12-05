import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { BookReducer } from './books/book.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    StoreModule.forRoot({ Book: BookReducer }),
  ],
})
export class AppModule {}
