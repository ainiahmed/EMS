import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // for Model Driven Forms
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routingComponents } from './app-routing.module';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';//npm i ng2-file-upload --save

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        ReactiveFormsModule,
        FormsModule,
        FileUploadModule
    ],
    declarations: [AppComponent, routingComponents],
    bootstrap: [AppComponent]
})
export class AppModule { }
