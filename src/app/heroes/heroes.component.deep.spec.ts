import { HeroesComponent } from './heroes.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Component, Input, Output, EventEmitter } from '@angular/core';
import { HeroService } from '../hero.service';
import { of } from 'rxjs/internal/observable/of';
import { Hero } from '../hero';
import { By } from '@angular/platform-browser';

describe('Heroes Component (deep tests)', () => {
    let fixture: ComponentFixture<HeroesComponent>;
    let mockHeroService: any;
    let HEROES: any[];

    beforeEach(() => {
        mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
        HEROES = [
            {id: 1, name: 'SpiderDude', strength: 8},
            {id: 2, name: 'Wonderful Woman', strength: 24},
            {id: 3, name: 'SuperDude', strength: 55}
        ];
        TestBed.configureTestingModule({
            declarations: [
                HeroesComponent
            ],
            providers: [
                {provide: HeroService, useValue: mockHeroService}
            ],
        });
        fixture = TestBed.createComponent(HeroesComponent);
    });
});
