import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirtComponent } from './firt.component';

describe('FirtComponent', () => {
  let component: FirtComponent;
  let fixture: ComponentFixture<FirtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
