import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenAiComponent } from './open-ai.component';

describe('OpenAiComponent', () => {
  let component: OpenAiComponent;
  let fixture: ComponentFixture<OpenAiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenAiComponent]
    });
    fixture = TestBed.createComponent(OpenAiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
