import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";
import { RecipesDetailComponent } from "./recipes/recipes-detail/recipes-detail.component";
import { RecipesStartComponent } from "./recipes/recipes-start/recipes-start.component";
import { RecipesComponent } from "./recipes/recipes.component";

const appRouts: Route[] = [
    { 
        path: '', redirectTo: '/recipe', pathMatch: "full"
    },
    {
        path: 'recipe', component: RecipesComponent, children:[
            { path: '', component: RecipesStartComponent},
            { path: 'new', component: RecipeEditComponent},
            { path: ':recipeId', component: RecipesDetailComponent},
            { path: ':recipeId/edit', component: RecipeEditComponent}
        ]
    },
    {
        path: 'auth', component: AuthComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRouts)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule {

}