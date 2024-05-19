import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofilloComponent } from './portofillo.component';

describe('PortofilloComponent', () => {
  let component: PortofilloComponent;
  let fixture: ComponentFixture<PortofilloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortofilloComponent]
    });
    fixture = TestBed.createComponent(PortofilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
