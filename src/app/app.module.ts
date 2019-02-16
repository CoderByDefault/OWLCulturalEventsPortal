import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventItemComponent } from './event-item/event-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ManageComponent } from './manage/manage.component';
import { BrowseComponent } from './browse/browse.component';
import { EventdetailComponent } from './eventdetail/eventdetail.component';
import { UniquePipe } from './unique.pipe';
import { CategoryFilterPipe } from './category-filter.pipe';


const ROUTES: Routes = [
  {path:'' , component: EventItemComponent},
  {path:'manage' , component: ManageComponent},
  {path:'browse' , component: BrowseComponent},
  {path:'eventDetail/:id' , component: EventdetailComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    EventItemComponent,
    NavbarComponent,
    FooterComponent,
    ManageComponent,
    BrowseComponent,
    EventdetailComponent,
    UniquePipe,
    CategoryFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
