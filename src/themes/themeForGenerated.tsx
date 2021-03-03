import { Button, Input, Checkbox, Header, Form } from 'semantic-ui-react';
import { ApolloFormConfigureTheme } from 'react-apollo-form';

type FieldProps = any;

const theme: ApolloFormConfigureTheme = {
  templates: {
    FieldTemplate: (props): any => {
        const { classNames, help, description, errors, children, rawErrors, label } = props;
        return (
            <Form.Field>
                <label
                    style={label === 'data' || label === 'where' ? {
                        color: 'gray',
                        textDecoration: 'underline'
                    } : {
                        paddingBottom: '12px' // Not working(
                    }}
                >{label}{props.required && '*'}</label>
                {children}
                <span>{description}</span>
                <span className={'error'}>{rawErrors}</span>
            </Form.Field>
        );
    },
    ObjectFieldTemplate: props => {
        return (
            <div>
                {props.properties.map((p: any) => p.content)}
            </div>
        );
    }
  },
  fields: {
    StringField: (p: FieldProps): any => (
        <Input value={p.formData} error={true} onChange={
            (e: React.SyntheticEvent<HTMLInputElement>) => p.onChange(e.currentTarget.value)
        } />
    ),
    BooleanField: (p: FieldProps) => (
        <Checkbox label={p.title} checked={p.formData} onChange={
            (e: React.SyntheticEvent<HTMLInputElement>, data: object) => {
                // tslint:disable-next-line:no-any
                p.onChange((data as any).checked);
            }
        } />
    ),
    DateTimeField: (p: FieldProps): any => (
        <Input value={p.formData} error={true} onChange={
            (e: React.SyntheticEvent<HTMLInputElement>) => p.onChange(e.currentTarget.value)
        } />
    ),
  },
  renderers: {
      saveButton: (p) => {     
        return (
            <Button className="button" disabled={p.isSaved} onClick={p.save} primary={true}>
                {p.isSaved ? 'Saved' : 'Save'}
            </Button>
          );
      },
      cancelButton: p => (
          <Button className="button" onClick={p.cancel}>
              Cancel
          </Button>
      ),
      header: p => (
          <Header as="h1">{p.title}</Header>
      ),
  }
};

export default theme;