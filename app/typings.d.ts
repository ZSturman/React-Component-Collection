// Form Wizard
type InputData = {
    firstName: string;
    lastName: string;
    email: string;
  };

  type SavedData = InputData & { dateCreated: string };

  type ComponentsToDisplay = {
    name: string;
    link: string;
    thumbnail: string;
    description: string;
    comingSoon?: boolean;
  }


// Context Creator
type Field = {
  name: string;
  type: 'string' | 'number' | 'boolean';
};

type Constraint = {
  min?: number;
  max?: number;
  required: boolean;
};

type FieldWithDefault = {
  name: string;
  type: 'string' | 'number' | 'boolean';
  defaultValue: string | number | boolean;
  constraint: Constraint;
};

type Dependency = {
  useExisting: boolean;
  existingData: any | null;
};

type AdditionalFunctions = {
  [key: string]: Function;
};

type ContextData = {
  dataName: string;
  fields: Field[];
  fieldDefaults: FieldWithDefault[];
  dependencies: Dependency;
  additionalFunctions: AdditionalFunctions;
};