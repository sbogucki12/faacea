import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const Warning = () => <h2>Warning!</h2>;
const Home = () => <h2>Home</h2>;
const ActionDetermination = () => <h2>Action Determination</h2>;
const InformalAction = () => <h2>Informal Action</h2>;
const FormalAction = () => <h2>Formal Action</h2>;
const LegalAction = () => <h2>Legal Action</h2>;
const DeviationRequest = () => <h2>Deviation Request</h2>; 
const VoluntaryDisclosure = () => <h2>VDR</h2>;

const App = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <div>
                    <Warning />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/actiondetermination" component={ActionDetermination} />
                    <Route exact path="/informalaction" component={InformalAction} />
                    <Route exact path="/formalaction" component={FormalAction} />
                    <Route exact path="/legalaction" component={LegalAction} />
                    <Route exact path="/deviationrequest" component={DeviationRequest} />
                    <Route exact path="/voluntarydisclosure" component={VoluntaryDisclosure} />
                </div>
            </BrowserRouter>
        </React.Fragment>
    )
};

export default App; 