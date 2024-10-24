import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForStatementComponent } from './for-statement.component';

describe('ForStatementComponent', () => {
  let component: ForStatementComponent;
  let fixture: ComponentFixture<ForStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForStatementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
