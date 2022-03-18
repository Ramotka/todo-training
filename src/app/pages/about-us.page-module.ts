import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AboutUsPage } from "./about-us.page";
import { DesignerList2ComponentModule } from '@designers2';
import { FirebaseEmployees2ServiceModule } from '../../../projects/designers2/src/lib/adapters/secondary/infrastructure/firebase-employees2.service-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: AboutUsPage,
      },
    ]),
   
    DesignerList2ComponentModule,
    FirebaseEmployees2ServiceModule
  ],
  declarations: [AboutUsPage],
  providers: [],
  exports: [],
})
export class AboutUsPageModule {}
