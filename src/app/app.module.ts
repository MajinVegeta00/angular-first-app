import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CardComponent } from './card/card.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { SideComponent } from './side/side.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { CardCommentsComponent } from './card-comments/card-comments.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormLoginComponent } from './form-login/form-login.component';
import { CookieService } from 'ngx-cookie-service';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { NotFoundDirective } from './not-found.directive';
import { BrokenImgDirective } from './broken-img.directive';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CardComponent,
    FavoritesComponent,
    CardDetailsComponent,
    SideComponent,
    HomeComponent,
    CardCommentsComponent,
    FormLoginComponent,
    UploadFileComponent,
    NotFoundDirective,
    BrokenImgDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDatatableModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
