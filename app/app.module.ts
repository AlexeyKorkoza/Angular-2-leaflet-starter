import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule}   from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CandTLeafletComponent} from 'angular2.leaflet.components';
import {CandTLeafletService} from 'angular2.leaflet.components';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, CandTLeafletComponent],
    providers: [CandTLeafletService],
    bootstrap: [AppComponent]
})
export class AppModule {
}