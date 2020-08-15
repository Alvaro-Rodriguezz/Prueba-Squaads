import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JugadoresInfoPage } from './jugadores-info.page';

describe('JugadoresInfoPage', () => {
  let component: JugadoresInfoPage;
  let fixture: ComponentFixture<JugadoresInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadoresInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JugadoresInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
