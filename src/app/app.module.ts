import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { appRoutes } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProvidersModule } from './providers/providers.module';
import { LayoutComponent } from './layouts/layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';

const routerConfig: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: 'enabled'
}

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    RouterModule.forRoot(appRoutes, routerConfig)
  ],
  providers: [
    ProvidersModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
