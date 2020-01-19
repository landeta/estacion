import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { APP_ROUTING } from './app.routes';


// Modulos
import { PagesModule } from './pages/pages.module';


// Servicios
import { ServiceModule } from './service/service.module';

// Componentes
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  providers: [
    ServiceModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
