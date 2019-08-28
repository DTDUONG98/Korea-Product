import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Avatar from '@material-ui/core/Avatar'
import img from '../../../src/PTIT.png'
import { FaBars } from "react-icons/fa"
import { Col, Row } from 'reactstrap'
import { FaSistrix } from "react-icons/fa"
import InputBase from '@material-ui/core/InputBase'
import { fade } from '@material-ui/core/styles'
import { Container, Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import moment from 'moment'
import FileBase64 from 'react-file-base64';
import Header from '../Component/Header'
const style = theme => ({
    title: {
        background: '#adc1eb',
        width: '100%',
        height: '80px'
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
})
class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
        }
    }
    // Khai báo upload images
    getFiles = (files) => {
        if (typeof files[0] === 'object') {
            this.setState({ url: files[0].base64 })
        }
    }
    onChange = (event) => {
        let { name, value } = event.target
        this.setState({ [name]: value })
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
    // POST product mới lên database
    AddProduct() {
        const { id, url, title, content, date, price, cost, status, type } = this.state
        fetch(`http://localhost:3333/Products`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "id": id,
                "url": url,
                "title": title,
                "content": content,
                "date": moment().format('YYYY-MM-DD'),
                "price": price,
                "cost": cost,
                "status": "Còn hàng",
                "type": 'Cosmetics',
            })
        })
        window.location.reload(
        this.props.history.push('/Cosmetics/01')
        )
    }
    render() {
        const { classes } = this.props
        return (
            <div>
                <Header
                    link={this.props}
                />
                <Col xs={{ size: 10, offset: 1 }} md={{ size: 10, offset: 1 }}
                    style={{
                        marginTop: '20px',
                        marginBottom: '20px',
                        color: 'red',
                    }}
                >
                    <Row>
                        <h2>Thêm sản phẩm</h2>
                    </Row>
                </Col>
                <Col xs="12" md="12">
                    <Container>
                        <Row>
                            <Col xs="12" md={{ size: 4, offset: 1 }}>
                                <TextField
                                    fullWidth
                                    id="outlined-title"
                                    label="Tên sản phẩm"
                                    className={classes.textField}
                                    value={this.state.title}
                                    onChange={(e) => this.setState({
                                        title: e.target.value
                                    })}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Col>
                            <Col xs={{ size: 10, offset: 1 }} md={{ size: 4, offset: 1 }} style={{
                                marginTop: '20px'
                            }}>
                                { // upload image product
                                    <FileBase64
                                        multiple={true}
                                        onDone={this.getFiles.bind(this)} />
                                }
                            </Col>
                            <Col xs={{ size: 10, offset: 1 }} md={{ size: 4, offset: 1 }}>
                                <TextField
                                    fullWidth
                                    id="outlined-price"
                                    label="Giá bán"
                                    className={classes.textField}
                                    value={this.state.price}
                                    onChange={(e) => this.setState({
                                        price: e.target.value
                                    })}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Col>
                            <Col xs={{ size: 10, offset: 1 }} md={{ size: 4, offset: 1 }}>
                            </Col>
                            <Col xs={{ size: 10, offset: 1 }} md={{ size: 4, offset: 1 }}>
                                <TextField
                                    fullWidth
                                    id="outlined-cost"
                                    label="Giá thị trường"
                                    className={classes.textField}
                                    value={this.state.cost}
                                    onChange={(e) => this.setState({
                                        cost: e.target.value
                                    })}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Col>
                            <Col xs={{ size: 10, offset: 1 }} md={{ size: 10, offset: 1 }}>
                                <TextField
                                    fullWidth
                                    id="outlined-content"
                                    label="Thông tin sản phẩm"
                                    className={classes.textField}
                                    value={this.state.content}
                                    onChange={(e) => this.setState({
                                        content: e.target.value
                                    })}
                                    margin="normal"
                                    variant="outlined"
                                />
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col xs={{ size: 2, offset: 5 }} md={{ size: 2, offset: 5 }}
                    style={{
                        textAlign: 'center',
                        marginTop: '30px'
                    }}
                >
                    <Row>
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={() => this.AddProduct()}
                        >
                            Thêm
                        </Button>
                    </Row>
                </Col>
            </div>
        )
    }
}
export default withStyles(style)(Create);