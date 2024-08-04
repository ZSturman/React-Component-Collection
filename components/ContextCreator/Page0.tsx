import React, { useState } from 'react';

type Page0Props = {
  onNext: (dataName: string) => void;
};

const Page0: React.FC<Page0Props> = ({ onNext }) => {
  const [dataName, setDataName] = useState<string>("");

  return (
    <div>
      <h1>Name of Data</h1>
      <input
        type="text"
        placeholder="Data Name"
        value={dataName}
        onChange={(e) => setDataName(e.target.value)}
      />
      <button onClick={() => onNext(dataName)}>Next</button>
    </div>
  );
};

export default Page0;