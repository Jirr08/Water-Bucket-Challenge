import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() firstBucketSteps: Array<number> = [];
  @Input() secondBucketSteps: Array<number> = [];
  @Input() explanationSteps: Array<string> = [];

}
