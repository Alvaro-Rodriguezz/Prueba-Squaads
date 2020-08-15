import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LigasInfoPage } from './ligas-info.page';

describe('LigasInfoPage', () => {
  let component: LigasInfoPage;
  let fixture: ComponentFixture<LigasInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigasInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LigasInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
