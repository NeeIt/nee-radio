import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HistoryPlaylistComponent} from './history-playlist.component';

describe('HistoryPlaylistComponent', () => {
  let component: HistoryPlaylistComponent;

  let fixture: ComponentFixture<HistoryPlaylistComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({declarations: [HistoryPlaylistComponent]})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
