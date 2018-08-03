import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iwdf-ui-loader',
  template: `<div class="bg-light loading-bar">
              <div class="bg-info loading-bar-element"></div>
            </div>`
  ,
  styleUrls: ['./loader.component.scss']
})
export class IwdfLoaderComponent{}
