export type Size = "s" | "m" | "l" | "xl";

const buttonSize: Size = "xl";

interface Movie {
  title: string;
  readonly releaseYear: number;
}

type MyMovie = Movie & string;
type MyString = string;

type TvSeries = {
  title: string;
  seasonCount: number[];
};

export type TFontsize = `${boolean}px` | `${number}em` | `${number}rem;`;

const test: TFontsize = "truepx";
