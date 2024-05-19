interface NumberLabel {
  id: number;
}

interface StringLabel {
  name: string;
}

interface BooleanLabel {
  isTrue: boolean;
}

type NumberOrStringOrBooleanLabel<Value extends number | string | boolean> =
  Value extends number
    ? NumberLabel
    : StringOrBooleanLabel<Value & (string | boolean)>;

type StringOrBooleanLabel<Value extends string | boolean> = Value extends string
  ? StringLabel
  : BooleanLabel;

function createLabel<Value extends string | number>(
  value: Value
): NumberOrStringOrBooleanLabel<Value> {
  throw "";
}

const numberLabel = createLabel(123);
const stringLabel = createLabel("");
numberLabel.id;
stringLabel.name;
