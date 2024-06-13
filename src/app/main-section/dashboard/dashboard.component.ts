import { Component, ViewChild } from '@angular/core';
import {
  GridsterConfig,
  GridsterItem,
} from 'angular-gridster2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  options: GridsterConfig;

  item1: GridsterItem;
  item2: GridsterItem;
  item3: GridsterItem;
  item4: GridsterItem;
  item5: GridsterItem;
  item6: GridsterItem;

  constructor() {
    this.item1 = { x: 0, y: 0, rows: 4, cols: 6 };
    this.item2 = { x: 0, y: 0, rows: 3, cols: 6 };
    this.item3 = { x: 0, y: 4, rows: 4, cols: 6 };
    this.item4 = { x: 3, y: 4, rows: 4, cols: 6 };
    this.item5 = { x: 0, y: 8, rows: 3, cols: 6 };
    this.item6 = { x: 3, y: 8, rows: 3, cols: 6 };

    this.options = {
      pushItems: true,
      minCols: 12,
      maxCols: 12,
      minRows: 5,
      // maxRows: 100,
      // fixedColWidth:120,
      fixedRowHeight: 120,
      outerMargin: true,
      margin: 0,
      gridType: 'scrollVertical',
      compactType: 'none',
      setGridSize: true,
      resizable: {
        enabled: true,
      },
      draggable: {
        enabled: true,
      },
    };
  }

}
