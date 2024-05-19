export type Constructor = new (...args: any[]) => {};

class Animal {
  feed() {}
}

class Horse extends Animal {}
class Car {}

function makeMovable<ParentConstructor extends Constructor>(
  Parent: ParentConstructor
) {
  return class Movable extends Parent {
    move() {}
  };
}

const MovableHorse = makeMovable<typeof Horse>(Horse);
const MovableCar = makeMovable(Car);

const horse = new MovableHorse();
horse.move();
horse.feed();
const car = new MovableCar();
car.move();
