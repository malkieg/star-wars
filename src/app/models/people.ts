export class People {
  homeworld: string;
  mass: string;
  films: string[];
  height: string;
  eye_color: string;
  species: string[];
  gender: string;
  url: string;
  created: string;
  edited: string;
  name: string;
  starships: string[];
  birth_year: string;
  skin_color: string;
  hair_color: string;
  vehicles: string[];

  constructor(args?) {
    if(args){
      this.homeworld = args.homeworld;
      this.mass = args.mass;
      this.films = args.films;
      this.height = args.height;
      this.eye_color = args.eye_color;
      this.species = args.species;
      this.gender = args.gender;
      this.url = args.url;
      this.created = args.created;
      this.edited = args.edited;
      this.name = args.name;
      this.starships = args.starships;
      this.birth_year = args.birth_year;
      this.skin_color = args.skin_color;
      this.hair_color = args.hair_color;
      this.vehicles = args.vehicles;
    }
  }
}
