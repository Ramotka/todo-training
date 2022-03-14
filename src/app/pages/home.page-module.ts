import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HomePage } from "./home.page";
import { DesignersListComponentModule } from "@designers";
import { ContactFormComponentModule } from "@messages";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: HomePage,
      },
    ]),
    DesignersListComponentModule,
    ContactFormComponentModule,
  ],
  declarations: [HomePage],
  providers: [],
  exports: [],
})
export class HomePageModule {}
