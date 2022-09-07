import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipsterGatewayDemoSharedModule } from 'app/shared/shared.module';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail.component';
import { UserUpdateComponent } from './user-update.component';
import { UserDeleteDialogComponent } from './user-delete-dialog.component';
import { userRoute } from './user.route';

@NgModule({
  imports: [JhipsterGatewayDemoSharedModule, RouterModule.forChild(userRoute)],
  declarations: [UserComponent, UserDetailComponent, UserUpdateComponent, UserDeleteDialogComponent],
  entryComponents: [UserDeleteDialogComponent]
})
export class UserappUserModule {}
