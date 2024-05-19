export class Movie {
  private code: string = "";
  protected duration: number = 0;
  public title: string = "";

  getCode() {
    return this.code;
  }
}

const movie = new Movie();
movie.title;

abstract class PlayableMovie {
  play(): void {
    this.playAd();
    this.playContent();
    this.playWatchNext();
  }

  protected abstract playAd(): void;
  protected abstract playContent(): void;
  protected abstract playWatchNext(): void;
}

class Film extends PlayableMovie {
  playAd(): void {
    throw new Error("Method not implemented.");
  }
  playContent(): void {
    throw new Error("Method not implemented.");
  }
  playWatchNext(): void {
    throw new Error("Method not implemented.");
  }
}

class TvSeries extends PlayableMovie {
  playAd(): void {
    throw new Error("Method not implemented.");
  }
  playContent(): void {
    throw new Error("Method not implemented.");
  }
  playWatchNext(): void {
    throw new Error("Method not implemented.");
  }
}

function play(movie: PlayableMovie) {
  movie.play();
}

play(new TvSeries());
play(new Film());
