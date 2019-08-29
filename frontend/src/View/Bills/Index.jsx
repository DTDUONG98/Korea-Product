import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Col, Row } from 'reactstrap'
import { Paper, Container } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
const style = theme => ({
    paper: {
        widht: '100%',
        height: 'auto',
        marginTop: '50px',
        marginLeft: '20px',
    },
    comtents: {
        marginLeft: '40px',
        marginBottom: '20px'
    }
})
class Bills extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            soluong: '1'
        }
    }

    Home() {
        this.props.history.push('/')
    }
    Cosmetics() {
        this.props.history.push('/Cosmetics/01')
    }
    HelthyFood() {
        this.props.history.push('/HelthyFood/02')
    }
    OK(){
        alert('Cảm ơn bạn đã ủng hộ chũng tôi .')
    }
    componentDidMount() {
        fetch(`http://192.168.6.76:3333/Products`)
            .then(response => response.json())
            .then(data =>
                this.setState({ items: data })
            )
            .catch(error => console.log('error ', error));
    }
    render() {
        const { classes } = this.props
        let data = this.props.match.params.id
        let name = data.split('-')[0]
        let soluong = data.split('-')[1]
        return (
            <div>
                <Header 
                    link = {this.props}
                />
                <Col xs={12} md={12}>
                    <Row>
                        {this.state.items.slice(0, this.state.visible).map((item, index) => {
                            if (item.title == name) {
                                return (
                                    <div key={index}>
                                        <Col xs="12" md="12">
                                            <Container>
                                                <Row>
                                                    <Col xs="12" md="6">
                                                        <Paper className={classes.paper}>
                                                            <img src={item.url} style={{ width: '100%', height: 'auto' }} />
                                                        </Paper>
                                                    </Col>
                                                    <Col xs="12" md="6">
                                                        <Row>
                                                            <Col xs="12" md="12" className={classes.comtents} style={{
                                                                marginTop: '40px',
                                                            }}>
                                                                <h2>Thông tin khách hàng</h2>
                                                            </Col>
                                                            <Col xs={{ size: 10, offset: 1 }} md={{ size: 10, offset: 1 }} className={classes.comtents}>
                                                                <TextField
                                                                    fullWidth
                                                                    id="outlined-Name"
                                                                    label="Tên người dùng"
                                                                    className={classes.textField}
                                                                    value={this.state.Name}
                                                                    onChange={(e) => this.setState({
                                                                        Name: e.target.value
                                                                    })}
                                                                    margin="normal"
                                                                    variant="outlined"
                                                                />
                                                            </Col>
                                                            <Col xs={{ size: 10, offset: 1 }} md={{ size: 10, offset: 1 }} className={classes.comtents}>
                                                                <TextField
                                                                    fullWidth
                                                                    id="outlined-Phone"
                                                                    label="Số điện thoại"
                                                                    className={classes.textField}
                                                                    value={this.state.Phone}
                                                                    onChange={(e) => this.setState({
                                                                        Phone: e.target.value
                                                                    })}
                                                                    margin="normal"
                                                                    variant="outlined"
                                                                />
                                                            </Col>
                                                            <Col xs={{ size: 10, offset: 1 }} md={{ size: 10, offset: 1 }} className={classes.comtents}>
                                                                <TextField
                                                                    fullWidth
                                                                    id="outlined-Address"
                                                                    label="Địa chỉ nhân hàng"
                                                                    className={classes.textField}
                                                                    value={this.state.Address}
                                                                    onChange={(e) => this.setState({
                                                                        Address: e.target.value
                                                                    })}
                                                                    margin="normal"
                                                                    variant="outlined"
                                                                />
                                                            </Col>
                                                            <Col xs={{ size: 12 }} md={{ size: 12 }}>
                                                                <p
                                                                    style={{
                                                                        border: '1px solid red',
                                                                    }}
                                                                ></p>
                                                            </Col>
                                                            <Col xs="12" md="12" className={classes.comtents}>
                                                                Đơn giá: {item.price}đ
                                                            </Col>
                                                            <Col xs="12" md="12" className={classes.comtents}>
                                                                Số Lượng : {`${soluong}`}
                                                            </Col>
                                                            <Col xs="12" md="12" className={classes.comtents}>
                                                            <h3 style={{color: 'red'}}>Tổng: {`${item.price * soluong}`}.000 đ</h3>
                                                            </Col>
                                                            <Col xs={{ size: 12 }} md={{ size: 12 }}>
                                                                <p
                                                                    style={{
                                                                        border: '1px solid red',
                                                                    }}
                                                                ></p>
                                                            </Col>
                                                            <Col xs={{size: 4, offset:4 }} md={{size: 4, offset: 4}}>
                                                                <Button
                                                                    variant="contained"
                                                                    color="secondary"
                                                                    size="large"
                                                                    value={item.title}
                                                                    onClick={() => this.OK()}
                                                                >
                                                                    Đặt hàng
                                                                </Button>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>
                                    </div>
                                )
                            }
                        })}
                    </Row>
                </Col>
                <Footer />
            </div>
        )
    }
}
export default withStyles(style)(Bills);