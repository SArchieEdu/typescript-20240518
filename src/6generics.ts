function sum(a: number, b: number) {
  return a + b;
}

// interface Movie {
//   title: string;
// }

type EntityGetters<Entity> = {
  -readonly [Property in keyof Entity as `get${Capitalize<
    Property & string
  >}`]-?: () => Entity[Property];
};

type MovieGetters = EntityGetters<Movie<string>>;

interface Movie<Stream = string> {
  title: string;
  streams: Stream[];
  actors: string[];
}

export interface Response<Result> {
  code: string;
  result: Result;
}

function makeRequest<Result, Params>(
  url: string,
  params: Params
): Response<Result> {
  throw "";
}

type Params = { releaseYear?: number; genre?: string };

function getMovies(searchValue: Params): Response<Movie[]> {
  return makeRequest<Movie[], Params>("", searchValue);
}

class Film<Duration> {
  duration?: Duration;

  getDuration(): Duration | undefined {
    return this.duration;
  }
}

new Film<number>();

function getProperty<
  Entity extends Record<string, unknown>,
  Key extends keyof Entity
>(obj: Entity, key: Key): Entity[Key] {
  return obj[key];
}

getProperty({ title: "", streams: [""] }, "streams");

type PartialMovie = Partial<Movie>;
type PickMovie = Pick<Movie, "title" | "streams">;
type OmitMovie = Omit<Movie, "title" | "streams">;

type MovieTypes = "Film" | "TvSeries" | "Video";

type MovieAgeRestriction = Partial<Record<MovieTypes, string>>;

const ageRestrictionConfig: MovieAgeRestriction = {
  Film: "",
  TvSeries: "",
  Video: "",
};

type MovieTypes2 = Exclude<MovieTypes, "Video">;
type MovieTypes3 = Extract<MovieTypes, "Video">;
