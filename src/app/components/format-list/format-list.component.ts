import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormatListItem } from 'src/app/shared/models/format-list-item';

@Component({
  selector: 'app-format-list',
  templateUrl: './format-list.component.html',
  styleUrls: ['./format-list.component.scss']
})
export class FormatListComponent implements OnInit {
  @Input() list: FormatListItem[];
  @Input() active;
  @Input() paramName: string;

  @Output() chooseFormat: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick(e, param, val) {
    e.preventDefault();
    this.chooseFormat.emit({ param, val });
  }
}
