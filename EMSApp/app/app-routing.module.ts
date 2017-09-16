import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee/employee-list.component';
import { EmployeeDetailComponent } from './employee/employee-detail.component';
import { EmployeeCreateComponent } from './employee/employee-create.component';
import { PageNotFound } from './employee/page-not-found.component';
import { EmployeeHomeComponent } from './employee/employee-home.component';
import { ModalPopup } from './modal-popup';
import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: EmployeeHomeComponent },
    { path: 'view', component: EmployeeListComponent },
    { path: 'create', component: EmployeeCreateComponent },
    { path: 'employee/:id', component: EmployeeDetailComponent },
    { path: 'logout', component: LogoutComponent },
    { path: '**', component: PageNotFound }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
export const routingComponents = [
    LoginComponent,
    EmployeeHomeComponent,
    PageNotFound,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeCreateComponent,
    ModalPopup,
    LogoutComponent
]