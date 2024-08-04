import { saveAs } from 'file-saver';

const generateContextFile = (contextData: ContextData) => {
  const { dataName, fields, fieldDefaults, dependencies, additionalFunctions } = contextData;

  const stateType = fields.map((field) => `${field.name}: ${field.type};`).join("\n");
  const defaultValues = fieldDefaults.map((field) => `${field.name}: ${JSON.stringify(field.defaultValue)},`).join("\n");

  const contextType = `
import { createContext, useContext, useState } from 'react';

type ${dataName} = {
${stateType}
}

const default${dataName}: ${dataName} = {
${defaultValues}
}

type ${dataName}ContextType = {
  ${dataName.toLowerCase()}: ${dataName};
  set${dataName}: (data: ${dataName}) => void;
  ${Object.keys(additionalFunctions).map(func => `${func}: ${additionalFunctions[func].toString()};`).join("\n")}
};

const defaultValue: ${dataName}ContextType = {
  ${dataName.toLowerCase()}: default${dataName},
  set${dataName}: () => {},
  ${Object.keys(additionalFunctions).map(func => `${func}: ${additionalFunctions[func].toString()}`).join(",\n")}
};

export const ${dataName}Context = createContext<${dataName}ContextType>(defaultValue);

type ${dataName}ProviderProps = {
  children: React.ReactNode;
};

const ${dataName}Provider: React.FC<${dataName}ProviderProps> = ({ children }) => {
  const [${dataName.toLowerCase()}, set${dataName}] = useState<${dataName}>(default${dataName});

  return (
    <${dataName}Context.Provider value={{ ${dataName.toLowerCase()}, set${dataName}, ${Object.keys(additionalFunctions).join(", ")} }}>
      {children}
    </${dataName}Context.Provider>
  );
};

export const use${dataName}Context = () => {
  const context = useContext(${dataName}Context);
  if (!context) {
    throw new Error("use${dataName}Context must be used within a ${dataName}Provider");
  }
  return context;
};

export { ${dataName}Provider };
`;

  const blob = new Blob([contextType], { type: "text/plain;charset=utf-8" });
  //saveAs(blob, `${dataName}Context.tsx`);
  console.log("Save the file to be implemented");
};

export default generateContextFile;