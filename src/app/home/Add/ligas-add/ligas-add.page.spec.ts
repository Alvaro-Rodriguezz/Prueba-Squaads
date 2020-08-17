import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LigasAddPage } from './ligas-add.page';

describe('LigasAddPage', () => {
  let component: LigasAddPage;
  let fixture: ComponentFixture<LigasAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigasAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LigasAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
