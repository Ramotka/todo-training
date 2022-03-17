import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponentModule } from '@navigation';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponentModule,
    AngularFireModule.initializeApp(environment.firestoreConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
