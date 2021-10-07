import * as React from 'react';
import { store } from '../surveys';
import { Link } from 'react-router-dom';

const second = () => {
    const incMiddleware = (text) => {
        return {
          type: 'inc',
          text
        }
      }

    const onClick = (event) => {
        store.dispatch(incMiddleware(event.target.value));
        console.log(store.getState())
    }


    return (
        <>
            <input onClick={(event) => onClick(event)} />
            <Link to='/users/'>users</Link>
        </>
    )
}

export default second;