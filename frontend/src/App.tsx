import * as React from 'react'; 
import { createStore } from 'redux'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Data from './redux/components/data';
import Surveys from './redux/pages/surveys';
import Users from './redux/pages/users';

import { store } from './redux/pages/surveys'

const App = () => {

    const [value, setValue] = React.useState('');

    store.subscribe(() => {
        setValue(store.getState());
    })
    
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/surveys/'>
                        <Data endpoint='surveys'>
                            <Surveys />
                        </Data>
                    </Route>
                    <Route exact path='/users/'>
                        <Data endpoint='users'>
                            <Users />
                        </Data>
                    </Route>
                    <Route exact path='/'>
                        <Link to='/surveys/'>
                            <div>surveys</div>
                        </Link>
                        <Link to='/users/'>
                            <div>users</div>
                        </Link>
                    </Route>
                </Switch>
            </Router>
            <div>{value}</div>
        </>
    )

    
}

export default App;

