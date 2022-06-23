import { Component, OnInit } from '@angular/core';
import {TRANSLOCO_SCOPE, TranslocoService} from "@ngneat/transloco";

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css'],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: {
        scope: 'moduleA',
        alias: 'c',
        loader
      },
      multi: true
    }
  ]
})
export class ComponentAComponent implements OnInit {
  public name = 'moduleA';

  constructor(private translocoService: TranslocoService) { }

  ngOnInit(): void {
    this.translocoService.translate(`moduleA.${this.name}.value`);
  }

}
