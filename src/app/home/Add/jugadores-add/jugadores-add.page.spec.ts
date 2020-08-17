import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JugadoresAddPage } from './jugadores-add.page';

describe('JugadoresAddPage', () => {
  let component: JugadoresAddPage;
  let fixture: ComponentFixture<JugadoresAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadoresAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JugadoresAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
