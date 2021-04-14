import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { StudentListComponent } from "./student-list/student-list.component";

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, StudentListComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
