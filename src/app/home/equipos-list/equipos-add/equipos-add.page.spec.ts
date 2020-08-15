import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EquiposAddPage } from './equipos-add.page';

describe('EquiposAddPage', () => {
  let component: EquiposAddPage;
  let fixture: ComponentFixture<EquiposAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquiposAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EquiposAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
