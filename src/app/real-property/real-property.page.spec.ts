import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RealPropertyPage } from './real-property.page';

describe('RealPropertyPage', () => {
  let component: RealPropertyPage;
  let fixture: ComponentFixture<RealPropertyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealPropertyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RealPropertyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
