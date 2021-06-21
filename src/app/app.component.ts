import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild ('appTitle')
  title!: ElementRef;
  ngAfterViewInit()   {
    this.title.nativeElement.textContent = 'Book Shop';
  }
}
