import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'admin-posts-post-item-content',
  template: `<div class="text-muted" contenteditable="true" [textContent]="model" (input)="onEditable($event)"></div>`,
  styleUrls: ['./post-contenteditable.component.scss'],
  host:{
    class: 'd-block'
  }
})
export class AdminPostsPostContenteditableComponent implements OnInit {
  @Input() model;
  @Output() input = new EventEmitter<any>();
  private searchTermStream = new Subject<string>();

  ngOnInit() {
    const searchSource = this.searchTermStream
    .pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      map(searchTerm => {

        return {search: searchTerm, page: 1}
      })
    )
  }

  onEditable($event){
    console.log($event);
    this.input.emit(this.model)
  }
  
}
