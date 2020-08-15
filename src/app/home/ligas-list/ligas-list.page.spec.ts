import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LigasListPage } from './ligas-list.page';

describe('LigasListPage', () => {
  let component: LigasListPage;
  let fixture: ComponentFixture<LigasListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigasListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LigasListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
