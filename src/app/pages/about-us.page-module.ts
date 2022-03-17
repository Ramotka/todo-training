import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { AboutUsPage } from "./about-us.page";
import { DesignersListComponentModule } from "@designers";
import { TestComponentModule } from '../../../projects/test/src/lib/adapters/primary/ui/test.component-module';
import { FirebaseTestServiceModule } from '../../../projects/test/src/lib/adapters/secondary/infrastructure/firebase-test.service-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: AboutUsPage,
      },
    ]),
    DesignersListComponentModule,
    TestComponentModule,
    FirebaseTestServiceModule
  ],
  declarations: [AboutUsPage],
  providers: [],
  exports: [],
})
export class AboutUsPageModule {}
