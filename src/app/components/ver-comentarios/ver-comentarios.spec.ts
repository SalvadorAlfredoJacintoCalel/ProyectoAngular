import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerComentarios } from './ver-comentarios';

describe('VerComentarios', () => {
  let component: VerComentarios;
  let fixture: ComponentFixture<VerComentarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerComentarios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerComentarios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
