import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDetailsComponent } from './card-details/card-details.component';
import { HomeComponent } from './home/home.component';
import { CardCommentsComponent } from './card-comments/card-comments.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { authGuard } from './auth.guard';
import { UploadFileComponent } from './upload-file/upload-file.component';

const routes: Routes = [
  {
    path: 'card',
    component: CardDetailsComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[authGuard]
  },
  {
    path:'card_comments',
    component:CardCommentsComponent
  },
  {
    path:'login',
    component:FormLoginComponent
  },
  {
    path:'',
    component:FormLoginComponent
  },
  {
    path:'upload',
    component:UploadFileComponent,
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
