import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PlayCoverComponent} from './play-cover.component';

describe('PlayCoverComponent', () => {
  let component: PlayCoverComponent;

  let fixture: ComponentFixture<PlayCoverComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({declarations: [PlayCoverComponent]})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
