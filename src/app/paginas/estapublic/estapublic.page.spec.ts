import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstapublicPage } from './estapublic.page';

describe('EstapublicPage', () => {
  let component: EstapublicPage;
  let fixture: ComponentFixture<EstapublicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstapublicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstapublicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
