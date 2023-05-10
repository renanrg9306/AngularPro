import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaEmilyComponent } from './biblioteca-emily.component';

describe('BibliotecaEmilyComponent', () => {
  let component: BibliotecaEmilyComponent;
  let fixture: ComponentFixture<BibliotecaEmilyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BibliotecaEmilyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibliotecaEmilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
