import React, { Component } from "react"
import withStyles from '@material-ui/core/styles/withStyles'
import { Col, Row } from 'reactstrap'

const style = theme => ({
    title: {
        textAlign: 'center',
    }
})
class Method extends Component {
    constructor(props){
        super(props)
        this.state= {

        }
    }
    render(){
        let {classes} = this.props
        return(
            <div>
                <Col xs="12" md="12" className={classes.title}>
                    <Row>
                        HHHHHHHH
                    </Row>
                </Col>
            </div>
        )
    }
}
export default withStyles(style)(Method)

