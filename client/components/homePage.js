import React from 'react';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';


class GameClass extends React.Component {

    /*shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.User.username !== "") {
            return true;
        }
    }*/

    render() {
        return (<div id="PageView" >
            <header>
                <div id="headerPage">
                    <div className="headerContainer" >
                        <div className="greeting1"><div className="text">Wellcome,</div></div>
                        <div className="greeting2"><div className="text">{this.props.User.username} !!!</div></div>
                        <div className="navig">
                            <NavLink to="/records" id="nav1">Records</NavLink>
                            <NavLink to="/" id="nav1">Logout</NavLink>
                        </div>
                    </div>
                </div>
            </header>
            <main>
            </main>
        </div >);

    }
}

export default connect(state => ({ User: state.User }))(GameClass);


