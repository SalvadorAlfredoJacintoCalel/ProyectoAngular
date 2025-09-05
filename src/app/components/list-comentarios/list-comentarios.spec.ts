import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComentarios } from './list-comentarios';

describe('ListComentarios', () => {
  let component: ListComentarios;
  let fixture: ComponentFixture<ListComentarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComentarios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComentarios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
