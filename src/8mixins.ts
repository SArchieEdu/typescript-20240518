class Animal {
  feed(): void {}
}

class Movable {
  move() {}
}

class Horse {}
interface Horse extends Animal, Movable {}

type Constructor = new (...args: unknown[]) => {};

function applyMixins(child: Constructor, parents: Constructor[]) {
  parents.forEach((parent) =>
    Object.getOwnPropertyNames(parent.prototype).forEach((name) => {
      child.prototype[name] = parent.prototype[name];
    })
  );
}

applyMixins(Horse, [Animal, Movable]);

new Horse().move();
