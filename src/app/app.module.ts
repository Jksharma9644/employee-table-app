import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditTableComponent } from './edit-table/edit-table.component';
import { routing }  from './app.routes';
import { AddNewComponent } from './add-new/add-new.component';
import { SearchPipe } from './home/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EditTableComponent,
    AddNewComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
