import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';

import { EnumToArrayPipe } from 'src/app/shared/pipes/enum.pipe';

import { EditBookComponent } from './edit-book.component';

const fakeActivatedRoute = {
  snapshot: {
    data: { },
  },
};

const initialState = {
  admin: {
    books: { },
  },
};

describe('EditBookComponent', () => {
  let component: EditBookComponent;
  let fixture: ComponentFixture<EditBookComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [
        EditBookComponent,
        EnumToArrayPipe,
      ],
      imports: [
        ReactiveFormsModule,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        provideMockStore({ initialState }),
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBookComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
