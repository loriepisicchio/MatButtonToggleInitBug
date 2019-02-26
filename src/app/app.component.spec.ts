import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {MatButtonToggleModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatButtonToggleModule,
        NoopAnimationsModule,
        FormsModule,
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'matToggleButtonGroupTest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('matToggleButtonGroupTest');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to matToggleButtonGroupTest!');
  });

  it('should initialize matToggle', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const component = fixture.componentInstance;
    expect(component.merchantIdsAreExcluded).toBeTruthy();

    const groupDebugElement = fixture.debugElement.queryAll(By.css('.mat-button-toggle-checked'));
    expect(groupDebugElement).not.toBeNull();
    expect(groupDebugElement.length).toBe(1);
    expect(groupDebugElement[0].query(By.css('.mat-button-toggle-label-content')).nativeElement.textContent).toEqual('Excluded');

  });
});
