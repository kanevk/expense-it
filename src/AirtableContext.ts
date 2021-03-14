import React, { useContext } from 'react';

const AirtableContext = React.createContext<
  { airbase: Airtable.Base } | undefined
>(undefined);

const useAirtable = () => {
  return useContext(AirtableContext) as { airbase: Airtable.Base };
};

export { AirtableContext, useAirtable };
