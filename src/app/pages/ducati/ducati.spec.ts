import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DucatiComponent } from './ducati';

describe('DucatiComponent', () => {
  let component: DucatiComponent;
  let fixture: ComponentFixture<DucatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DucatiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DucatiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
