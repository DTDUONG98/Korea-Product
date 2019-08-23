import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Col, Row } from 'reactstrap'

const style = theme => ({
    backGroundImages: {
        background: 'url(/img/spacebg.jpg)',
        position: 'relative',
        backgroundSize: 'cover',
        height: '439px',
        backgroundAttachment: 'fixed'
      },
})
class Background extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Col className={classes.backGroundImages}>
                    
                </Col>
            </div>
        )
    }
}
export default withStyles(style)(Background);