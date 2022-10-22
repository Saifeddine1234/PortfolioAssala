import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddProjetComponent } from './admin-add-projet.component';

describe('AdminAddProjetComponent', () => {
  let component: AdminAddProjetComponent;
  let fixture: ComponentFixture<AdminAddProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddProjetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
