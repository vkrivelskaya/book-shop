import { Component,ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild ('appTitle')
  title!: ElementRef | null;
  
  ngAfterViewInit() {
    this.title!.nativeElement.textContent = 'Book Shop';
  }
}
