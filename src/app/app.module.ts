import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxFileDropModule} from 'ngx-file-drop';
import { UploadComponent } from './upload/upload.component';
import { CreateComponent } from './create/create.component';
import { SettingsComponent } from './settings/settings.component';
import { ConfigurablesComponent } from './configurables/configurables.component';
import { SimplesComponent } from './simples/simples.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandsComponent } from './brands/brands.component';

@NgModule({
    declarations: [
        AppComponent,
        UploadComponent,
        CreateComponent,
        SettingsComponent,
        ConfigurablesComponent,
        SimplesComponent,
        CategoriesComponent,
        BrandsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxFileDropModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
