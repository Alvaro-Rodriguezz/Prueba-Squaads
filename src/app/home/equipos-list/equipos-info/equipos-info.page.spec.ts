import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EquiposInfoPage } from './equipos-info.page';

describe('EquiposInfoPage', () => {
  let component: EquiposInfoPage;
  let fixture: ComponentFixture<EquiposInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquiposInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EquiposInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
