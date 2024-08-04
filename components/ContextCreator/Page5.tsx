
type ContextData = {
  fields: Field[];
  fieldDefaults: FieldWithDefault[];
  dependencies: Dependency;
  additionalFunctions: AdditionalFunctions;
};

type Page5Props = {
  contextData: ContextData;
  onGenerate: (contextData: ContextData) => void;
};

const Page5: React.FC<Page5Props> = ({ contextData, onGenerate }) => {
  return (
    <div>
      <h1>Page 5: Review</h1>
      <pre>{JSON.stringify(contextData, null, 2)}</pre>
      <button onClick={() => onGenerate(contextData)}>Generate Context</button>
    </div>
  );
};

export default Page5;