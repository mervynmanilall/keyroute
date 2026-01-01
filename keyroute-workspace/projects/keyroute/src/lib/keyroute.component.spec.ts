import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyrouteComponent } from './keyroute.component';

describe('KeyrouteComponent', () => {
  let component: KeyrouteComponent;
  let fixture: ComponentFixture<KeyrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyrouteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
