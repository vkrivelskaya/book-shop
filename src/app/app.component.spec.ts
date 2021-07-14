import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import 'jasmine';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        AppComponent,
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture: ComponentFixture<AppComponent> = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should display updated title after detectChanges', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component: AppComponent = fixture.componentInstance;
    const h1: HTMLElement = fixture.nativeElement.querySelector('h1');
    component.title.nativeElement.textContent = 'Test Title';
    fixture.detectChanges();
    expect(h1.textContent).toContain(component.title);
  });

  it(`should have as title 'bookShop'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title.nativeElement.textContent).toEqual('bookShop');
  });
});
