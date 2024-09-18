import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiziUtiliComponent } from './servizi-utili.component';

describe('ServiziUtiliComponent', () => {
  let component: ServiziUtiliComponent;
  let fixture: ComponentFixture<ServiziUtiliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiziUtiliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiziUtiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
