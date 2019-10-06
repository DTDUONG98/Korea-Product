import React, { Component } from "react"
import withStyles from '@material-ui/core/styles/withStyles'
import { Col, Row } from 'reactstrap'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import {Button} from '@material-ui/core'


const style = theme => ({
    formContentItemFeedback: {
        marginBottom: '-12px'
    },
    buttonSendMessager: {
        marginLeft: '12px',
        marginBottom: '15px',
    },
    card: {
        maxWidth: 300,
        marginTop: '30px',
        marginBottom: '20px'
    }
})
class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            visibale: 4,
        }
    }
    componentDidMount() {
        fetch(`http://localhost:3333/Feedback`)
            .then(response => response.json())
            .then((data) => {
                this.setState({ items: data })
            })
            .catch(error => console.log('error ', error));
    }
    render() {
        const { classes } = this.props
        const { visible, items } = this.state
        return (
            <div>
                <Row>
                    {items.slice(0, visible).map((item, index) =>
                        <Col xs="12" md="3">
                            <Card className={classes.card} key={index}>
                                <CardHeader
                                    title={item.Name}
                                    subheader={item.Date}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {item.Content}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Col>
                    )}
                    <Col xs="12" md="12">
                    <Row>
                        <Col xs={{ size: 4, offset: 4 }} md={{ size: 4, offset: 4 }} style={{ textAlign: 'center' }}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                value="4"
                                onClick={(e) => this.setState({
                                    visible: parseInt(this.state.visible) + parseInt(e.currentTarget.value)
                                })}
                            >
                                Xem Thêm
                                </Button>
                        </Col>
                    </Row>
                </Col>
                </Row>
            </div>
        )
    }
}
export default withStyles(style, { withTheme: true })(Index)

