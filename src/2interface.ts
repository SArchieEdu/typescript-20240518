interface Person {
  readonly name: string;
}

interface A {
  address: string;
  age: number;
}

interface Actor extends Person, A {
  role: string;
}

export interface Movie {
  title: string;
  readonly releaseYear: number;
  actors?: Actor[];
}

let film: Movie = {
  title: "",
  releaseYear: 123,
};
film.title = "Hello";
// film.releaseYear = 2023;

let film1: Movie = {
  title: "",
  releaseYear: 123,
};
let fil2: Movie = {
  title: "",
  releaseYear: 123,
};
let fil3: Movie = {
  title: "",
  releaseYear: 123,
};

export interface Movie {
  duration: number;
}
