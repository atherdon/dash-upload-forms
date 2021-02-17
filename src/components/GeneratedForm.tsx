// eslint-disable-next-line no-use-before-define
import * as React from 'react';
import { configure } from 'react-apollo-form';
import type { DocumentNode } from '@apollo/client';
import client from '../clients/apollo';
import theme from '../clients/themeForGenerated';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const jsonSchema = require('../generatedForm/apollo-form-json-schema.json');

const ReactApolloForm = configure<ApolloFormMutationNames>({
  // tslint:disable-next-line:no-any
  client: client as any,
  jsonSchema,
  theme,
});

interface GeneratedFormProps {
  document: DocumentNode;
  name: ApolloFormMutationNames;
}

const GeneratedForm = (props: GeneratedFormProps): React.ReactElement => {
  const { document, name } = props;
  return (
    <ReactApolloForm
      title={name}
      ui={{ showErrorsInline: true }}
      config={{
        mutation: {
          name,
          document,
        },
      }}
      data={{}}
    />
  );
};

export default GeneratedForm;
