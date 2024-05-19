export enum Size {
  s = "s",
  m = "m",
  l = "l",
}

Size.s;
// Size[0];
// Size[100];

function calculateButtonSize(size: Size) {}

calculateButtonSize(Size.m);
calculateButtonSize("m");

enum MovieType {
  Film = "Film",
  TvSeries = "TvSeries",
}

interface Movie {
  __typename: "Movie";
}

export const MovieType2 = {
  Film: "Film",
  TvSeries: "TvSeries",
} as const;
export type MovieType2 = keyof typeof MovieType2;

MovieType2.Film;

function play(movieType: MovieType2) {}
play(MovieType.Film);
play("Film");
