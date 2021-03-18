import {AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-table', templateUrl: './table.component.html', styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit, OnChanges {
  @Input() data: any[] | undefined;
  @Input() columnsDisplay: string[] | undefined;
  @Input() columnsAvailable: Set<any> | undefined;
  @Input() clickRoute: string | undefined;
  @Input() clickRouteParams: string[] | undefined;
  @Input() enableFilter: boolean | undefined;
  @Input() enableColumnSelection: boolean | undefined;
  @Output() selectedRow = new EventEmitter();

  dataSource: MatTableDataSource<any>;
  tableColumnsResetList: string[] | undefined;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor() {
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngOnChanges(): void {
    this.ngAfterViewInit();
  }

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource(this.data);

    this.tableColumnsResetList = this.columnsDisplay;
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  clickedRow(row: any): void {
    this.selectedRow.emit(row);
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    this.dataSource.filterPredicate = (data, filter) => {
      const clearedData = JSON.stringify(data).trim().toLowerCase();
      const clearedFilter = filter.trim().toLowerCase();

      return clearedData.includes(clearedFilter);
    };
    this.dataSource.filter = filterValue.trim();
  }

  resetDisplayList(): void {
    this.columnsDisplay = this.tableColumnsResetList;

  }
}
