import React, { Component } from 'react';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';

class LoginButton extends Component {
    constructor(props) {
        super(props);   
    }
    
    render() {
        return (
            <div>
                {/* If there is a user logged in, display the login button and popover */}
                {this.props.user === null &&
                    <div>
                        <Button onClick={this.props.handleClick} color="contrast">Login</Button>
                        <Menu
                            open={this.props.open}
                            anchorEl={this.props.anchorEl}
                            //Handles close requests, such as clicking outside the menu
                            onRequestClose={this.props.handleClose} >
                                <MenuItem onClick={() => this.props.handleAuthClick('Technician')}>Technician</MenuItem>
                                <MenuItem onClick={() => this.props.handleAuthClick('Helpdesk')}>Helpdesk</MenuItem>
                        </Menu>
                    </div>
                }
                {/*If there isn't a user logged in, display a logout button */}
                {this.props.user !== null &&
                    <Button onClick={this.props.handleSignoutClick} color="contrast">Logout</Button>
                }
            </div>
        );
    }
}

export default LoginButton;