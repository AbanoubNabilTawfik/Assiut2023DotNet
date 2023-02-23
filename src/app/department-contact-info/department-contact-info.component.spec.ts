import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentContactInfoComponent } from './department-contact-info.component';

describe('DepartmentContactInfoComponent', () => {
  let component: DepartmentContactInfoComponent;
  let fixture: ComponentFixture<DepartmentContactInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentContactInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentContactInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
