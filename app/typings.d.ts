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
  }