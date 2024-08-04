type Page4Props = {
  dataName: string;
  onNext: (additionalFunctions: AdditionalFunctions) => void;
};

const Page4: React.FC<Page4Props> = ({ dataName, onNext }) => {
  const additionalFunctions: AdditionalFunctions = {
    [`update${dataName}`]: (id: string, updatedData: any) => {
      // Implementation for updating data
    },
    [`delete${dataName}`]: (id: string) => {
      // Implementation for deleting data
    }
  };

  return (
    <div>
      <h1>Page 4: CRUD Operations for {dataName}</h1>
      <button onClick={() => additionalFunctions[`update${dataName}`](`123`, { name: `Updated ${dataName}`, price: 199.99 })}>
        Update {dataName}
      </button>
      <button onClick={() => additionalFunctions[`delete${dataName}`](`123`)}>
        Delete {dataName}
      </button>
      <button onClick={() => onNext(additionalFunctions)}>Next</button>
    </div>
  );
};

export default Page4;