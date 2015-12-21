import {HEROES} from "./mock-hero";
import {Injectable} from "angular2/core";

@Injectable()

export class HeroService{
  getHeroes(){
    return Promise.resolve(HEROES);
  }
}
