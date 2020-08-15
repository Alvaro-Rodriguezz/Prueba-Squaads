import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EquiposListPage } from './equipos-list.page';

describe('EquiposListPage', () => {
  let component: EquiposListPage;
  let fixture: ComponentFixture<EquiposListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquiposListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EquiposListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
