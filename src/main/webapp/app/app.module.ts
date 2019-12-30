import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { TenpinKeeperSharedModule } from 'app/shared/shared.module';
import { TenpinKeeperCoreModule } from 'app/core/core.module';
import { TenpinKeeperAppRoutingModule } from './app-routing.module';
import { TenpinKeeperHomeModule } from './home/home.module';
import { TenpinKeeperEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    TenpinKeeperSharedModule,
    TenpinKeeperCoreModule,
    TenpinKeeperHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    TenpinKeeperEntityModule,
    TenpinKeeperAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class TenpinKeeperAppModule {}
