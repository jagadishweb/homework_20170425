import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule, MdCardModule, MdGridListModule, MdIconModule, MdToolbarModule, MdButtonModule } from '@angular/material';
import { UserDetailComponent } from './detail.component';
import { AppRoutingModule } from '../app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LogoutComponent } from '../account/logout.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailComponent, DashboardComponent, LogoutComponent ],
      imports: [ FormsModule, MaterialModule.forRoot(), RouterModule, AppRoutingModule ],
      providers: [ {provide: APP_BASE_HREF, useValue: '/'} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
