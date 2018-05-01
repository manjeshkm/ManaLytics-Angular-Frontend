import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistroyComponent } from './histroy.component';

describe('HistroyComponent', () => {
  let component: HistroyComponent;
  let fixture: ComponentFixture<HistroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistroyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
