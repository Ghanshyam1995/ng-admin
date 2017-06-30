import {NgModule} from "@angular/core";
import {MaterialModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import { CovalentLayoutModule, CovalentStepsModule, CovalentExpansionPanelModule } from '@covalent/core';
@NgModule({
    imports:[
             MaterialModule,
             CovalentLayoutModule,
             CovalentStepsModule,
             CovalentExpansionPanelModule,
             FlexLayoutModule],
    declarations:[],
    exports:[
             MaterialModule,
             CovalentLayoutModule,
             CovalentStepsModule,
             CovalentExpansionPanelModule,
             FlexLayoutModule
            ]
})


export class SharedModule{}