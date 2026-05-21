import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonHero } from './skeleton-hero';

describe('SkeletonHero', () => {
  let component: SkeletonHero;
  let fixture: ComponentFixture<SkeletonHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkeletonHero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkeletonHero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
