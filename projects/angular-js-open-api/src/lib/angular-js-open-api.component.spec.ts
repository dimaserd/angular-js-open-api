import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularJsOpenApiComponent } from './angular-js-open-api.component';

describe('AngularJsOpenApiComponent', () => {
  let component: AngularJsOpenApiComponent;
  let fixture: ComponentFixture<AngularJsOpenApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularJsOpenApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularJsOpenApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
