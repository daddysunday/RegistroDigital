import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddArticuloPage } from './add-articulo.page';

describe('AddArticuloPage', () => {
  let component: AddArticuloPage;
  let fixture: ComponentFixture<AddArticuloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddArticuloPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddArticuloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
