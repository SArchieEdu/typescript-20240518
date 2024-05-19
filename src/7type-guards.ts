export interface Movie<Stream = string> {
  title: string;
  duration: number;
  streams?: Stream[];
  actors?: string[];
}

type RequiredMovie = {
  [Property in keyof Movie as Property extends undefined
    ? never
    : Property]: Movie[Property];
};

const result = {} as unknown as Movie;

// 1 typeof
function calculate(a: number, b: string | number): number {
  if (typeof b === "number") {
    return a + b;
  }

  return a;
}

// 2 проверка на истинность
function transformAge(age: number, century: number | undefined) {
  if (century) {
    return age * century;
  }
}

transformAge(100, undefined);

function play(movie?: Movie) {
  return movie ? movie.duration : 0;
}

// 3 проверка на равенство

function sum(a: number | string, b: number | boolean) {
  if (a === b) {
    return a + b;
  }
}

// 4 in

interface Dog {
  name: string;
  bark(): void;
}

interface Wolf {
  name: string;
  bark(): void;
  run(): void;
}

interface Cat {
  name: string;
  meow(): void;
}

function makeNoise(animal: Dog | Wolf | Cat) {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// 5 instanceof
function log(date: Date | string) {
  if (date instanceof Date) {
    date.getFullYear();
  }
}

// 6 type predicate

function isMovie(data: unknown): data is Movie {
  const movie: Movie = data as Movie;

  if (!movie) {
    return false;
  }

  return typeof movie.title === "string" && typeof movie.duration === "number";
}

function getMovie(): Movie | undefined {
  const movie: unknown = { title: "", duration: 123, streams: [], actors: [] };

  return isMovie(movie) ? movie : undefined;
}

// 7 Исключающие объединения

interface Film {
  __typename: "Film";
  duration: number;
}

interface TvSeries {
  __typename: "TvSeries";
  seriesCount: number;
  seriesDuration: number;
}

function getDuration(movie: Film | TvSeries): number {
  if (movie.__typename === "Film") {
    return movie.duration;
  }

  return movie.seriesCount * movie.seriesDuration;
}
