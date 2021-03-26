import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespotasComponent } from './respotas.component';

describe('RespotasComponent', () => {
  let component: RespotasComponent;
  let fixture: ComponentFixture<RespotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RespotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
