import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ShoppingListComponent } from "./shopping-list.component";

const routesShoppingList: Routes = [
  { path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routesShoppingList)],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule {

}
