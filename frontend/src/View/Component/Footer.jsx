import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Col, Row } from 'reactstrap'
import { Container } from '@material-ui/core'
const style = theme => ({
    footer: {
        background: '#adc1eb',
        marginTop: '20px',
    },
    service: {
        marginTop: '20px',
        marginBottom: '10px',
    },
})
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const { classes } = this.props
        return (
            <div>
                <Col md="12" xs="12" className={classes.footer}>
                    <Container>
                        <Row>
                            <Col md={4} xs={{ size: 12 }}>
                                <h2 className={classes.service}>Thống Kê</h2>
                                <p style={{ border: '1px solid black' }}></p>
                                <p>Tổng số sản phẩm bán ra : </p>
                                <p style={{ marginBottom: '20px' }}>Số sản phẩm đang còn: </p>
                            </Col>
                            <Col md={4} xs={{ size: 12 }}>
                                <h2 className={classes.service} >Liên hệ</h2>
                                <p style={{ border: '1px solid black' }}></p>
                                <p>FaceBook: Đỗ Tiến Dương</p>
                                <p style={{ marginBottom: '20px' }}>SĐT: 0326609183</p>
                            </Col>
                            <Col md={4} xs={{ size: 12 }}>
                                <h2 className={classes.service} >Dịch vụ khác</h2>
                                <p style={{ border: '1px solid black' }}></p>
                                <p></p>
                                <p style={{ marginBottom: '20px' }}></p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </div>
        )
    }
}
export default withStyles(style)(Footer);