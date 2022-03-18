import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTabelaComponent } from './component-tabela.component';

describe('ComponentTabelaComponent', () => {
  let component: ComponentTabelaComponent;
  let fixture: ComponentFixture<ComponentTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentTabelaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
