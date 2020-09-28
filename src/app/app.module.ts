import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllUserComponent } from './components/all-user/all-user.component';
import { UserComponent } from './components/user/user.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { PostOfUserComponent } from './components/post-of-user/post-of-user.component';

const routes: Routes = [
  {path: 'users', component: AllUserComponent, children: [
      {path: 'post/:id', component: PostOfUserComponent}
    ]}
  ];

@NgModule({
  declarations: [
    AppComponent,
    AllUserComponent,
    UserComponent,
    PostOfUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
