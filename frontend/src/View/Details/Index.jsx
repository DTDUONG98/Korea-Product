import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Col, Row } from 'reactstrap'
import { Paper, Container } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Rating from '../Component/Rating'
import Footer from '../Component/Footer'
import Header from '../Component/Header'
import TabsDetail from '../Component/TabsDetail'
import moment from 'moment'
const style = theme => ({
    card: {
        maxWidth: 290,
        marginLeft: '40px',
        marginTop: '30px'
    },
    media: {
        width: '100%',
        height: 0,
        paddingTop: '56.25%', // 16:9
        transition: '0,3',
        "&:hover": {
            transform: 'scale(1.1)',
        }
    },
    paper: {
        widht: '100%',
        height: 'auto',
        marginTop: '50px',
        marginLeft: '20px',
    },
    comtents: {
        marginLeft: '40px',
        marginBottom: '20px'
    },
    title: {
        background: '#adc1eb',
        width: '100%',
        height: '80px'
    },
    icon: {
        margin: theme.spacing(2),
    },
})
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            soluong: '1',
        }
    }
    Home() {
        this.props.history.push('/')
    }
    HelthyFood() {
        this.props.history.push('/HelthyFood/02')
    }
    Cosmetics() {
        this.props.history.push('/Cosmetics/01')
    }
    Soluong(e) {
        let soluong = e.currentTarget.value
        this.setState({
            soluong: parseInt(soluong) + parseInt(this.state.soluong)
        })
    }
    Details(e) {
        let name = e.currentTarget.value
        this.props.history.push(`/Details/${name}`)
    }
    Bills(e) {
        let name = e.title
        let soluong = this.state.soluong
        let title = name + "-" + soluong
        this.props.history.push(`/Bills/${title}`)
    }
    componentDidMount() {
        fetch(`http://localhost:3333/Products`)
            .then(response => response.json())
            .then(data =>
                this.setState({ items: data })
            )
            .catch(error => console.log('error ', error));
    }
    render() {
        const { classes } = this.props
        let data = this.props.match.params.id
        return (
            <div>
                <Header
                    link={this.props}
                />
                <Col xs={12} md={12}>
                    <Row>
                        {this.state.items.slice(0, this.state.visible).map((e, index) => {
                            if (e.name == data) {
                                return (
                                    <div key={index}>
                                        <Col xs="12" md="12">
                                            <Container>
                                                <Row>
                                                    <Col xs="12" md="6">
                                                        <Paper className={classes.paper}>
                                                            <img src={e.url} style={{ width: '100%', height: '400px' }} />
                                                        </Paper>
                                                    </Col>
                                                    <Col xs="12" md="6">
                                                        <Row>
                                                            <Col xs="12" md="12" className={classes.comtents} style={{
                                                                marginTop: '40px',
                                                            }}>
                                                                <h2>{e.name}</h2>
                                                            </Col>
                                                            <Col xs="12" md="12" className={classes.comtents}>
                                                                <h2><Rating /></h2>
                                                            </Col>
                                                            <Col xs="12" md="12" className={classes.comtents}>
                                                                Thương hiệu: {e.name}
                                                            </Col>
                                                            <Col xs={{ size: 12 }} md={{ size: 12 }}>
                                                                <p
                                                                    style={{
                                                                        border: '1px solid red',
                                                                    }}
                                                                ></p>
                                                            </Col>
                                                            <Col xs="12" md="12" className={classes.comtents}>
                                                                <h3 style={{ color: 'red' }}>{e.price} đ</h3>
                                                            </Col>
                                                            <Col xs="12" md="12" className={classes.comtents}>
                                                                Tiết kiệm lên đến: {parseInt((parseInt(e.cost) - parseInt(e.price)) / parseInt(e.cost) * 100)} %
                                                            </Col>
                                                            <Col xs="12" md="12" className={classes.comtents}>
                                                                Giá thị trường : {e.cost} đ
                                                            </Col>
                                                            <Col xs={{ size: 12 }} md={{ size: 12 }}>
                                                                <p
                                                                    style={{
                                                                        border: '1px solid red',
                                                                    }}
                                                                ></p>
                                                            </Col>
                                                            <Col xs="12" md="12"
                                                                className={classes.title}
                                                            >
                                                                <Row>
                                                                    <Col xs="12" md="4" style={{
                                                                        marginTop: '20px'
                                                                    }}>
                                                                        <Button
                                                                            value="-1"
                                                                            variant="contained"
                                                                            onClick={(e) => this.Soluong(e)}
                                                                        >-</Button>
                                                                        <span style={{
                                                                            margin: '15px'
                                                                        }}
                                                                        >
                                                                            {this.state.soluong}
                                                                        </span>
                                                                        <Button
                                                                            value="1"
                                                                            variant="contained"
                                                                            onClick={(e) => this.Soluong(e)}
                                                                        >+</Button>
                                                                    </Col>
                                                                    <Col xs="12" md={{ size: 4, offset: 2 }}
                                                                        style={{
                                                                            marginTop: '20px'
                                                                        }}
                                                                    >
                                                                        <Button
                                                                            variant="contained"
                                                                            color="secondary"
                                                                            size="large"
                                                                            value={e.name}
                                                                            onClick={() => this.Bills(e)}
                                                                        >Đặt hàng ngay</Button>
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Col>
                                        <Col xs="12" md="12">
                                            <p style={{
                                                textAlign: 'center',
                                                color: 'red',
                                                fontSize: '40px',
                                                marginTop: '40px',
                                                marginBottom: '30px'
                                            }}
                                            >Thông tin chi tiết</p>
                                        </Col>
                                        <Col xs="12" md="12" >
                                            {e.content}<br /><br />
                                        </Col>
                                        <Col xs="12" md="12">
                                            <p
                                                style={{
                                                    border: '1px solid red',
                                                }}
                                            ></p>
                                        </Col>
                                        <Col xs="12" md="12">
                                        <TabsDetail 
                                            link={this.props}
                                            data = {e}
                                        />
                                        </Col>
                                    </div>
                                )
                            }
                        })}
                    </Row>
                </Col>
                <Footer 
                    link={this.props}
                />
            </div>
        )
    }
}
export default withStyles(style)(Details);