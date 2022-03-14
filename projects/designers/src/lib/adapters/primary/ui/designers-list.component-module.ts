import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DesignersListComponent } from "./designers-list.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [DesignersListComponent],
  providers: [],
  exports: [DesignersListComponent],
})
export class DesignersListComponentModule {}
