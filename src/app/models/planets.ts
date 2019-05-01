export class People {
  edited: string;
  films: string[];
  terrain: string;
  diameter: string;
  gravity: string;
  population: string;
  residents: People[];
  created: string;
  orbital_period: string;
  name: string;
  url: string;
  climate: string;
  surface_water: string;
  rotation_period: string;

  constructor(args?) {
    if (args) {
      this.edited = args.edited;
      this.films = args.films;
      this.terrain = args.terrain;
      this.diameter = args.diameter;
      this.gravity = args.gravity;
      this.population = args.population;
      this.residents = args.residents;
      this.created = args.created;
      this.orbital_period = args.orbital_period;
      this.name = args.name;
      this.url = args.url;
      this.climate = args.climate;
      this.surface_water = args.surface_water;
      this.rotation_period = args.rotation_period;
    }
  }
}
