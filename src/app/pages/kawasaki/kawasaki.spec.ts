import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KawasakiComponent } from './kawasaki';

describe('KawasakiComponent', () => {
  let component: KawasakiComponent;
  let fixture: ComponentFixture<KawasakiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KawasakiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KawasakiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
