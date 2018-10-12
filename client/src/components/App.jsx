import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import WarningBar from './layout/WarningBar';
import Main from './layout/Main';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
import Landing from './Landing';
import 'typeface-roboto';

const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: grey
      },
});

class App extends React.Component{
    componentDidMount(){
        this.props.fetchUser();
    };

    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <MuiThemeProvider theme={theme}>
                    <BrowserRouter>
                        <div>
                            <WarningBar />
                            <Route exact path="/" component={Landing} />
                            <Route path="/main" component={Main} />                             
                        </div>
                    </BrowserRouter>
                </MuiThemeProvider>
            </React.Fragment>
        )
    }
};
    


export default connect(null, actions)(App); 