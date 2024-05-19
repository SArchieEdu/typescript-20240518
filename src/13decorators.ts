import "reflect-metadata";

class CalculateService {
  @MeasureTime()
  calculate() {
    return 1 + 1;
  }
}

export function MeasureTime() {
  return (
    target: Object,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) => {
    const method = descriptor.value;
    descriptor.value = function (...args: Parameters<typeof method>) {
      console.time(propertyName);
      const result = method(...args);
      console.timeEnd(propertyName);
      return result;
    };
  };
}

@Service({ isSingleton: true })
class UserService {}

type ServiceMetadata = {
  isSingleton: boolean;
};

type Constructor = new (...args: unknown[]) => any;

function Service(params: ServiceMetadata) {
  return function (ctor: Constructor) {
    Reflect.defineMetadata("serviceSettings", params, ctor);
  };
}

function isMetadata(data: unknown): data is ServiceMetadata {
  const metadata = data as ServiceMetadata;

  return metadata && typeof metadata.isSingleton === "boolean";
}

const serviceStorage = new Map();

function getInstance<Service extends Constructor>(
  service: Service
): InstanceType<Service> {
  let metadata: unknown = Reflect.getMetadata("serviceSettings", service);

  let isSingleton = false;

  if (isMetadata(metadata)) {
    isSingleton = metadata.isSingleton;
  }

  if (!isSingleton) {
    return new service();
  }

  if (!serviceStorage.has(service)) {
    serviceStorage.set(service, new service());
  }

  return serviceStorage.get(service);
}

class MiniSeries {
  @Condition({
    from: 3,
    to: 10,
  })
  seriesCount: number = 1;
}

interface ConditionMetadata {
  from: number;
  to: number;
}

function Condition(data: ConditionMetadata) {
  return function (obj: Object, propertyName: string) {
    Reflect.defineMetadata(
      `propertyCondition_${propertyName}`,
      data,
      obj.constructor
    );
  };
}

function validate<Entity extends {}>(entity: Entity): boolean {
  return Object.getOwnPropertyNames(entity).every((propertyName) => {
    const metadata: unknown = Reflect.getMetadata(
      `propertyCondition_${propertyName}`,
      entity.constructor
    );

    return true;
  });
}
