import React, { mapDispatchToProps } from 'react';
import MainWindow from '../main_window/MainWindow';
import PleaseLogIn from '../layout/PleaseLogIn';
import { Route } from 'react-router-dom'
import ActionDetermination from '../action_determination/ActionDetermination';
import { connect } from 'react-redux';

class MainWindowLayout extends React.Component {
   
    ifAuth(){
        const { classes } = this.props;
        if(this.props.auth){
            return (
                    <Route exact path="/main/action" component={ActionDetermination} />  
                )
            } else {
                return (
                    <Route exact path="/main/action" component={PleaseLogIn} />
                )
            }
        };    

    render(){
        return (
            <React.Fragment>
                <Route exact path="/main" component={MainWindow} />            
                {this.ifAuth()}
            </React.Fragment>
        )
    }
};

function mapStateToProps({ auth }){
    return { auth };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(MainWindowLayout)