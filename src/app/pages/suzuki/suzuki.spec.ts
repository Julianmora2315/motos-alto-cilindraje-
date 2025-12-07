import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuzukiComponent } from './suzuki';

describe('SuzukiComponent', () => {
  let component: SuzukiComponent;
  let fixture: ComponentFixture<SuzukiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuzukiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuzukiComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
