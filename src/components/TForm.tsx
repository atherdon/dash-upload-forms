// eslint-disable-next-line no-use-before-define
import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { useRegistrationMutation } from './core/index'

function TForm() {
  const [ registration, { data } ] = useRegistrationMutation();
  return <button onClick={() => {
    registration({
      variables: {
        data: {
          name: 'das',
          password: '111111',
          passwordRepeat: '111111',
          email: 'dass@das.ds'
        }
      }
    })
      .then(d => {
        console.log(0, d)
      })
      .catch(e => {
      console.log(1, e)
    })
  }}>click</button>;
}

export default TForm;