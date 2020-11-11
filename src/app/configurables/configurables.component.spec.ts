import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurablesComponent } from './configurables.component';

describe('ConfigurablesComponent', () => {
  let component: ConfigurablesComponent;
  let fixture: ComponentFixture<ConfigurablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
