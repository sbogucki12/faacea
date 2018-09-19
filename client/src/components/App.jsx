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

// const Warning = () => <h2>Warning!</h2>;
const Home = () => <h2>Home</h2>;
const ActionDetermination = () => <h2>Action Determination</h2>;
const InformalAction = () => <h2>Informal Action</h2>;
const FormalAction = () => <h2>Formal Action</h2>;
const LegalAction = () => <h2>Legal Action</h2>;
const DeviationRequest = () => <h2>Deviation Request</h2>; 
const VoluntaryDisclosure = () => <h2>VDR</h2>;

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
                            <Route exact path="/" component={Main} />
                            <Route exact path="/main" component={Main} />
                            <Route exact path="/actiondetermination" component={ActionDetermination} />
                            <Route exact path="/informalaction" component={InformalAction} />
                            <Route exact path="/formalaction" component={FormalAction} />
                            <Route exact path="/legalaction" component={LegalAction} />
                            <Route exact path="/deviationrequest" component={DeviationRequest} />
                            <Route exact path="/voluntarydisclosure" component={VoluntaryDisclosure} />
                        </div>
                    </BrowserRouter>
                </MuiThemeProvider>
            </React.Fragment>
        )
    }
};
    


export default connect(null, actions)(App); 