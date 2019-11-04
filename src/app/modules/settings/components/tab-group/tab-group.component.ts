import { Component, OnInit, ContentChildren, QueryList, AfterViewInit, Input } from '@angular/core';
import { TabDirective } from './tab/tab.directive';

@Component({
  selector: 'tvc-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.scss']
})
export class TabGroupComponent implements OnInit, AfterViewInit {
  @Input() startTab: number;

  @ContentChildren(TabDirective, {descendants: true}) child: QueryList<TabDirective>;

  private _tab = 0;

  constructor() { }

  ngOnInit() {
    this._tab = this.startTab || this._tab;
  }

  ngAfterViewInit() {
    const nextTab = this.tabs[this.tab];
    if (nextTab) {
      nextTab.show();
    }
  }

  get tab(): number {
    return this._tab;
  }

  set tab(value: number) {
    const prevTab = this.tabs[this._tab];
    if (prevTab) {
      prevTab.hide();
    }

    this._tab = value;

    const nextTab = this.tabs[this._tab];
    if (nextTab) {
      nextTab.show();
    }
  }

  get tabs(): TabDirective[] {
    return this.child ? this.child.toArray() : [];
  }
}
