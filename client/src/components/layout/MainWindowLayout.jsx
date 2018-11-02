import React, { mapDispatchToProps } from 'react';
import MainWindow from '../main_window/MainWindow';
import PleaseLogIn from '../layout/PleaseLogIn';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import ActionDetermination from '../action_determination/ActionDetermination';
import { connect } from 'react-redux';
import ActionDeterminationInformal from '../action_determination/ActionDeterminationInformal';
import MainWindowLogin from '../main_window/MainWindowLogin';
import ActionDeterminationREInfo from '../action_determination/ActionDeterminationREInfo';
import CapMain from '../cap/CapMain';
import CapUploadMain from '../cap/CapUploadMain';
import ProcessMapMain from '../process_map/ProcessMapMain';
import SelectCorrespondenceMain from '../correspondence/SelectCorrespondenceMain';
import SummaryMain from '../summary/SummaryMain';
import UploadCorrespondenceMain from '../correspondence/UploadCorrespondenceMain';
import ContActionMain from '../continue_action/ContActionMain';
import ReportingMain from '../reporting/ReportingMain';

class MainWindowLayout extends React.Component {
   
    ifAuth(){
        const { classes } = this.props;
        if(this.props.auth){
            return (
                    <React.Fragment>
                        <BrowserRouter>
                            <Switch>
                                <Route exact path="/main/reporting" component={ReportingMain} />
                                <Route exact path="/main/openexisting/main" component={ContActionMain} />
                                <Route exact path="/main/action/uploadcorrespondence" component={UploadCorrespondenceMain} />
                                <Route exact path="/main/action/actionsummary" component={SummaryMain}  />
                                <Route exact path="/main/action/selectcorrespondence" component={SelectCorrespondenceMain}  />
                                <Route exact path="/main/action/processmap" component={ProcessMapMain}  />
                                <Route exact path="/main/action/capupload" component={CapUploadMain}  />
                                <Route exact path="/main/action/capmain" component={CapMain}  />
                                <Route exact path="/main/action/reinfo" component={ActionDeterminationREInfo}  />
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
                                <Route exact path="/main/reporting" component={PleaseLogIn} />
                                <Route exact path="/main/openexisting/main" component={PleaseLogIn} />
                                <Route exact path="/main/action/uploadcorrespondence" component={PleaseLogIn}  />
                                <Route exact path="/main/action/actionsummary" component={PleaseLogIn}  />
                                <Route exact path="/main/action/selectcorrespondence" component={PleaseLogIn}  />
                                <Route exact path="/main/action/processmap" component={PleaseLogIn}  />
                                <Route exact path="/main/action/capupload" component={PleaseLogIn}  />
                                <Route exact path="/main/action/capmain" component={PleaseLogIn} />
                                <Route exact path="/main/action" component={PleaseLogIn} />
                                <Route exact path="/main/action/informal" component={PleaseLogIn} />
                                <Route exact path="/main" component={MainWindowLogin} />
                                <Route exact path="/main/action/reinfo" component={PleaseLogIn}  />
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