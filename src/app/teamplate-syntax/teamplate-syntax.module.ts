import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TeamplateSyntaxRoutingModule} from './teamplate-syntax-routing.module';
import {TeamplateSyntaxComponent} from './teamplate-syntax.component';
import {ReferenceVariablesComponent} from './reference-variables/reference-variables.component';
import {ExpressionOperatorsComponent} from './expression-operators/expression-operators.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [TeamplateSyntaxComponent, ReferenceVariablesComponent, ExpressionOperatorsComponent],
  imports: [
    CommonModule,
    FormsModule,
    TeamplateSyntaxRoutingModule
  ]
})
export class TeamplateSyntaxModule {
}
