import React , {Component} from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import {Col, Row} from 'reactstrap'

const style = theme => ({
    title: {
        textAlign: 'center',
    }
})

class Index extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    DeleteJson(event){ // xóa database đi 
        fetch('/user', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstname: this.state.firstname,
                lastname: this.state.lastname,

            })
        }).then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                showUsers: false,
                users: responseJson
            });
            return;
        })
        .catch((error) => {
            throw (error);
        });
    event.preventDefault();
    }
    render(){
        const title = this.props
        console.log('title', title)
        return(
            <div>
                <Header />
                <Col xs="12" md="12">
                
                </Col>
                <Footer 
                    link={this.props}
                />
            </div>
        )
    }
}
export default withStyles(style)(Index)