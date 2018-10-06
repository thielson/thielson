import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {StoreModule} from '@ngrx/store';

import {HelloWorldComponent} from 'guernsey3/java/com/guernsey/example/hello-world/hello-world.component';
import {HelloWorldModule} from 'guernsey3/java/com/guernsey/example/hello-world/hello-world.module';
import {todoReducer} from 'guernsey3/java/com/guernsey/example/reducers/reducers';
import {TodosComponent} from 'guernsey3/java/com/guernsey/example/todos/todos.component';
import {TodosModule} from 'guernsey3/java/com/guernsey/example/todos/todos.module';

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
