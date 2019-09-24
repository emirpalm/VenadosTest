import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule  } from '@angular/common/http';

import {
    GameService
   } from './service.index';


   @NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
      GameService
    ],
    declarations: []
  })
  export class ServiceModule { }
