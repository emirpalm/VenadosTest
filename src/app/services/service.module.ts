import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule  } from '@angular/common/http';

import {
    GameService,
    PlayerService
   } from './service.index';


   @NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
      GameService,
      PlayerService
    ],
    declarations: []
  })
  export class ServiceModule { }
