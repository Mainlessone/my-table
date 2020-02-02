import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { DataService } from './data.service';
import { MyTableComponent } from './my-table/my-table.component';
import { Logger } from './logger-service';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyTableComponent,
    FilterPipe
  ],
  exports: [FilterPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService, Logger],
  bootstrap: [AppComponent]
})
export class AppModule {}
