import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllFriendsPage } from './all-friends.page';

describe('AllFriendsPage', () => {
  let component: AllFriendsPage;
  let fixture: ComponentFixture<AllFriendsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllFriendsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllFriendsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
