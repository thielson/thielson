import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';

import {HelloWorldComponent} from 'thielson1/java/com/thielson/example/hello-world/hello-world.component';
import {HelloWorldModule} from 'thielson1/java/com/thielson/example/hello-world/hello-world.module';
import {todoReducer} from 'thielson1/java/com/thielson/example/reducers/reducers';
import {TodosComponent} from 'thielson1/java/com/thielson/example/todos/todos.component';
import {TodosModule} from 'thielson1/java/com/thielson/example/todos/todos.module';

import {AppComponent} from './app.component';

export const appRoutes: Routes = [
  {path: '', pathMatch: 'full', component: HelloWorldComponent},
  {path: 'todos', pathMatch: 'full', component: TodosComponent},
];

@NgModule({
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HelloWorldModule, TodosModule,
    StoreModule.forRoot({todoReducer})
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
}
