import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FontDirective } from './font.directive';

@Component({
  template: `
  <h2 appFont [color]="'blue'">Something Blue</h2>
  <h2 appFont>The Default (Gray)</h2>
  <h2>No AppFont</h2>`,
})
class TestComponent { }

let fixture: ComponentFixture<TestComponent>;
let headingElements: DebugElement[];
let elementsWithFontDirective: DebugElement[];
let elementWithoutFontDirective: DebugElement;

describe('FontDirective', () => {
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ FontDirective, TestComponent ],
    })
      .createComponent(TestComponent);

    fixture.detectChanges();
    headingElements = fixture.debugElement.queryAll(By.css('h2'));
    elementsWithFontDirective = fixture.debugElement.queryAll(By.directive(FontDirective));
    elementWithoutFontDirective = fixture.debugElement.query(By.css('h2:not([appFont])'));
  });

  it('should have 2 elements with border and 20px font', () => {
    headingElements.forEach((element: DebugElement) => {
      element.nativeElement.dispatchEvent(new Event('click'));
      fixture.detectChanges();
    });
    expect(elementsWithFontDirective.length).toBe(2);
  });

  it('should first h2 has blue border', () => {
    const firstHeading = elementsWithFontDirective[0].nativeElement;

    firstHeading.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    const border = firstHeading.style.border;
    const fontSize = firstHeading.style.fontSize;

    expect(border).toBe('3px solid blue');
    expect(fontSize).toBe('20px');
  });

  it('should second h2 has gray border', () => {
    const secondHeading = elementsWithFontDirective[1].nativeElement;

    secondHeading.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    const border = secondHeading.style.border;
    const fontSize = secondHeading.style.fontSize;

    expect(border).toBe('3px solid gray');
    expect(fontSize).toBe('20px');
  });

  it('<h2> should not have a customProperty', () => {
    expect(elementWithoutFontDirective.properties.customProperty).toBeUndefined();
  });

  it('styles appFont removed', async() => {
    headingElements.forEach((element: DebugElement) => {
      element.nativeElement.dispatchEvent(new Event('click'));
      fixture.detectChanges();
    });
    await (new Promise(resolve => setTimeout(resolve, 1001)));
    headingElements.forEach((element: DebugElement) => {
      expect(element.properties.customProperty).toBeUndefined();
    });
  });
});
