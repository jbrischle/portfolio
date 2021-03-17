import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from './table.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {CustomPipeModule} from '../custom-pipe/custom-pipe.module';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule,
    CustomPipeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    FormsModule, MatButtonModule, MatSelectModule, ReactiveFormsModule],
  exports: [TableComponent]
})
export class TableModule {
}
