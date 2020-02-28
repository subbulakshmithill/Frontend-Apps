import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Routes, RouterModule } from '@angular/router'; 
import { HeaderComponent } from './header/header-component';
import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { BetterHighlightDirective } from './better-directive/better-highlight.directive';
import {DropdownDirective} from './shared/dropdown.directive';
import { ShoppingService } from './shopping-list/shopping.service';
import { AboutComponent } from './about/about.component';

const recipeRoutes: Routes = [
  { path:'', Component: AboutComponent },
  { path:'recipes', Component: RecipesComponent },
  { path:'shopping-list', Component: ShoppingListComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BetterHighlightDirective,
    DropdownDirective,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(recipeRoutes)
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
