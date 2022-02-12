import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCronometroComponent } from './show-cronometro.component';

describe('ShowCronometroComponent', () => {
  let component: ShowCronometroComponent;
  let fixture: ComponentFixture<ShowCronometroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCronometroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCronometroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
