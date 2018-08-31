import {Directive, HostListener, HostBinding, Input, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[adminPostGallery]'
})
export class AdminPostGalleryDirective {
  @Input() private allowed_extensions : Array<string> = [];
  @Output() private filesChangeEmiter : EventEmitter<File[]> = new EventEmitter();
  @Output() private filesInvalidEmiter : EventEmitter<File[]> = new EventEmitter();
  @HostBinding('class') private cls = 'dropzope__box dropzope__box--default';

  @HostListener('dragover', ['$event']) public onDragOver(evt){
    evt.preventDefault();
    evt.stopPropagation();
    this.cls = 'dropzope__box dropzope__box--dragover';
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt){
    console.log('draglive', evt);
    evt.preventDefault();
    evt.stopPropagation();
    this.cls = 'dropzope__box dropzope__box--default';
  }

  @HostListener('drop', ['$event']) public onDrop(evt){
    evt.preventDefault();
    evt.stopPropagation();
    this.cls = 'dropzope__box dropzope__box--drop';
    let files = evt.dataTransfer.files;
    let valid_files : Array<File> = [];
    let invalid_files : Array<File> = [];
    if(files.length > 0){
      Array.from(files).forEach((file: File) => {
        let ext = file.name.split('.')[file.name.split('.').length - 1];
        if(this.allowed_extensions.lastIndexOf(ext) !== -1){
          valid_files.push(file);
        } else {
          invalid_files.push(file);
        }
      });
      this.filesChangeEmiter.emit(valid_files);
      this.filesInvalidEmiter.emit(invalid_files);
    }
  }

}
