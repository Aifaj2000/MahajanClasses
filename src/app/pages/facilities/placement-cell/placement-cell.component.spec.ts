import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementCellComponent } from './placement-cell.component';

describe('PlacementCellComponent', () => {
  let component: PlacementCellComponent;
  let fixture: ComponentFixture<PlacementCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
