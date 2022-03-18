import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HomePage } from "./home.page";
import { ContactFormComponentModule } from "@messages";
import { DesignerList2ComponentModule } from '@designers2';
import { FirebaseEmployees2ServiceModule } from '../../../projects/designers2/src/lib/adapters/secondary/infrastructure/firebase-employees2.service-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomePage,
      },
    ]),
    ContactFormComponentModule,
    DesignerList2ComponentModule,
    FirebaseEmployees2ServiceModule
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
