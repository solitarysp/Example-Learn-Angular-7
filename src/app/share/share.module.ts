import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HighlightDirective} from './highlight.directive';
import {StructuralDirectivesDirective} from './structural-directives.directive';
import {PipeMultiplyPipe} from './pipeMultiply.pipe';
import {PipeMultiplyArrayNumberPipe} from './pipe-multiply-array-number.pipe';
import {PipeMultiplyArrayNumberImpurePipePipe} from './pipe-multiply-array-number-impure-pipe.pipe';

const declarations = [HighlightDirective,
  StructuralDirectivesDirective,
  PipeMultiplyPipe, PipeMultiplyArrayNumberPipe,
  PipeMultiplyArrayNumberImpurePipePipe];

@NgModule({
  declarations: [declarations],
  imports: [
    CommonModule
  ], exports: [declarations]
})
export class ShareModule {
}
