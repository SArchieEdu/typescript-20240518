export type Movie = {
  title: string;
  readonly duration: number;
  releaseYear: number;
  actors?: string[];
  director: string;
};

type Keys = keyof Movie; // 'title' | 'duration' | 'releaseYear'

type MovieCopy = {
  [Property in keyof Movie]: Movie[Property];
};

type PartialMovie = {
  [Property in keyof Movie]?: Movie[Property];
};

type RequiredMovie = {
  [Property in keyof Movie]-?: Movie[Property];
};

type ReadonlyMovie = {
  readonly [Property in keyof Movie]: Movie[Property];
};

type NotReadonlyMovie = {
  -readonly [Property in keyof Movie]: Movie[Property];
};

type Config = {
  editable: boolean;
  optional: boolean;
};

type MovieConfig = {
  -readonly [Property in keyof Movie]-?: Config;
};

type MovieGetters = {
  -readonly [Property in keyof Movie as `get${Capitalize<Property>}`]-?: () => Movie[Property];
};

type MovieSetters = {
  -readonly [Property in keyof Movie as `set${Capitalize<Property>}`]-?: (
    value: Movie[Property]
  ) => void;
};

class MovieClass implements Movie, MovieGetters, MovieSetters {
  title: string;
  duration: number;
  releaseYear: number;
  actors?: string[] | undefined;
  director: string;
  getTitle: () => string;
  getDuration: () => number;
  getReleaseYear: () => number;
  getActors: () => string[] | undefined;
  getDirector: () => string;
  setTitle: (value: string) => void;
  setDuration: (value: number) => void;
  setReleaseYear: (value: number) => void;
  setActors: (value: string[] | undefined) => void;
  setDirector: (value: string) => void;
}

type EntityGetters<Entity> = {
  -readonly [Property in keyof Entity as `get${Capitalize<
    Property & string
  >}`]-?: () => Entity[Property];
};

type EntitySetters<Entity> = {
  -readonly [Property in keyof Entity as `set${Capitalize<
    Property & string
  >}`]-?: (value: Entity[Property]) => void;
};

type CompleteEntity<Entity> = Entity &
  EntityGetters<Entity> &
  EntitySetters<Entity>;

class MovieClass2 implements CompleteEntity<Movie> {
  title: string;
  duration: number;
  releaseYear: number;
  actors?: string[] | undefined;
  director: string;
  getTitle: () => string;
  getDuration: () => number;
  getReleaseYear: () => number;
  getActors: () => string[] | undefined;
  getDirector: () => string;
  setTitle: (value: string) => void;
  setDuration: (value: number) => void;
  setReleaseYear: (value: number) => void;
  setActors: (value: string[] | undefined) => void;
  setDirector: (value: string) => void;
}

class ConfigClass implements CompleteEntity<Config> {
  editable: boolean;
  optional: boolean;
  getEditable: () => boolean;
  getOptional: () => boolean;
  setEditable: (value: boolean) => void;
  setOptional: (value: boolean) => void;
}

type PlayerStage = "play" | "pause" | "ready" | "buffering" | "seeking";

type StageController = { currentStage: PlayerStage } & {
  [Stage in PlayerStage as `switchTo${Capitalize<Stage>}`]: () => PlayerStage;
};

let stage: PlayerStage = "ready";

function useStage(): StageController {
  return {
    currentStage: stage,
    switchToPlay: () => "play",
    switchToPause: () => "pause",
    switchToReady: () => "ready",
    switchToBuffering: () => "buffering",
    switchToSeeking: () => "seeking",
  };
}
