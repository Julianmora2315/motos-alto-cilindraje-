import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YamahaComponent } from './yamaha';

describe('Yamaha', () => {
  let component: YamahaComponent;
  let fixture: ComponentFixture<YamahaComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YamahaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YamahaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
