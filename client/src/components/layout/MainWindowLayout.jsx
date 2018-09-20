import React from 'react';
import MainWindow from '../main_window/MainWindow';
import { Route } from 'react-router-dom'
import ActionDetermination from '../main_window/ActionDetermination';

const MainWindowLayout = () => {
    return (
        <React.Fragment>
            
            <Route exact path="/main" component={MainWindow} />
            <Route exact path="/main/action" component={ActionDetermination} />
            
        </React.Fragment>
    )
};

export default MainWindowLayout; 