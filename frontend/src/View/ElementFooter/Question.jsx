import React, {Component} from 'react'
import Header from '../Component/Header'
import withStyles from '@material-ui/core/styles/withStyles'

const style = theme => ({
    update: {
        marginTop: '100px',
        marginLeft: '200px',
        color: 'red',
    }
})
class Question extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        const {classes} = this.props
        return(
            <div>
                <Header 
                    link={this.props}
                />
                <h1 className={classes.update}> Đăng chời UpDate</h1>
            </div>
        )
    }
}
export default withStyles(style)(Question);