import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroOpinionesComponent } from './libro-opiniones.component';

describe('LibroOpinionesComponent', () => {
  let component: LibroOpinionesComponent;
  let fixture: ComponentFixture<LibroOpinionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibroOpinionesComponent]
    });
    fixture = TestBed.createComponent(LibroOpinionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
