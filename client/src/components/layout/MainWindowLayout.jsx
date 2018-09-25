import React, { mapDispatchToProps } from 'react';
import MainWindow from '../main_window/MainWindow';
import PleaseLogIn from '../layout/PleaseLogIn';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import ActionDetermination from '../action_determination/ActionDetermination';
import { connect } from 'react-redux';
import ActionDeterminationInformal from '../action_determination/ActionDeterminationInformal';
import MainWindowLogin from '../main_window/MainWindowLogin';

class MainWindowLayout extends React.Component {
   
    ifAuth(){
        const { classes } = this.props;
        if(this.props.auth){
            return (
                    <React.Fragment>
                        <BrowserRouter>
                            <Switch>
                                <Route exact path="/main/action" component={ActionDetermination} />
                                <Route exact path="/main/action/informal" component={ActionDeterminationInformal} />
                                <Route exact path="/main" component={MainWindow} />
                            </Switch>
                        </BrowserRouter>
                    </React.Fragment>  
                )
            } else {
                return (
                    <React.Fragment>
                        <BrowserRouter>
                            <Switch>
                                <Route exact path="/main/action" component={PleaseLogIn} />
                                <Route exact path="/main/action/informal" component={PleaseLogIn} />
                                <Route exact path="/main" component={MainWindowLogin} />
                            </Switch>
                        </BrowserRouter>
                    </React.Fragment>
                )
            }
        };    

    render(){
        return (
            <React.Fragment>                
                {this.ifAuth()}
            </React.Fragment>
        )
    }
};

function mapStateToProps({ auth }){
    return { auth };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(MainWindowLayout)