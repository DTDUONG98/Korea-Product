import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Col, Row } from 'reactstrap'
import { Container, Button } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import moment from 'moment'
import FileBase64 from 'react-file-base64'
import Header from '../Component/Header'
import { I18n } from 'react-redux-i18n'
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
        const { id, url, title, content, date, price, cost, status, type, name } = this.state
        let dem = 0
        if (name == undefined || name.length == 0) {
            dem = parseInt(dem) + 1
            this.setState({
                erName: true,
                messName: I18n.t("Vui lòng nhập đầy đủ thông tin")
            })
        } else {
            dem = parseInt(dem) - 1
            this.setState({
                erName: false,
                messName: '',
            })
        }
        if (title == undefined || title.length == 0) {
            dem = parseInt(dem) + 1
            this.setState({
                erTitle: true,
                messTitle: I18n.t("Vui lòng nhập đầy đủ thông tin")
            })
        } else {
            dem = parseInt(dem) - 1
            this.setState({
                erTitle: false,
                messTitle: '',
            })
        }
        if (type == undefined || type.length == 0) {
            dem = parseInt(dem) + 1
            this.setState({
                erType: true,
                messType: I18n.t("Vui lòng nhập đầy đủ thông tin")
            })
        } else {
            dem = parseInt(dem) - 1
            this.setState({
                erType: false,
                messType: '',
            })
        }
        if (content == undefined || content.length == 0) {
            dem = parseInt(dem) + 1
            this.setState({
                erContent: true,
                messContent: I18n.t("Vui lòng nhập đầy đủ thông tin")
            })
        } else {
            dem = parseInt(dem) - 1
            this.setState({
                erContent: false,
                messContent: '',
            })
        }
        if (price == undefined || price.length == 0) {
            dem = parseInt(dem) + 1
            this.setState({
                erPrice: true,
                messPrice: I18n.t("Vui lòng nhập đầy đủ thông tin")
            })
        } else {
            dem = parseInt(dem) - 1
            this.setState({
                erPrice: false,
                messPrice: '',
            })
        }
        if (cost == undefined || cost.length == 0) {
            dem = parseInt(dem) + 1
            this.setState({
                erCost: true,
                messCost: I18n.t("Vui lòng nhập đầy đủ thông tin")
            })
        } else {
            dem = parseInt(dem) - 1
            this.setState({
                erCost: false,
                messCost: '',
            })
        }
        if (dem == -6) {
            fetch(`http://localhost:3333/Products`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "id": id,
                    "url": url,
                    "name": name,
                    "title": title, // thông tin khái quát của sản phẩm
                    "content": content, // thông tin tổng quát của sản phẩm
                    "date": moment().format('YYYY-MM-DD'),
                    "price": price, // Giá bán của sản phẩm
                    "cost": cost, // Giá thị trường của sản phẩm
                    "status": "Còn hàng",
                    "type": type,
                })
            })
            window.location.reload(
                this.props.history.push('/HelthyFood/02')
            )
        }
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
                        <Col xs={{ size: 10, offset: 1 }} md={{ size: 4, offset: 1 }} style={{
                                marginTop: '20px'
                            }}>
                                { // upload image product
                                    <FileBase64
                                        multiple={true}
                                        onDone={this.getFiles.bind(this)} />
                                }
                            </Col>
                            <Col xs="12" md={{ size: 4, offset: 2 }}>
                                <TextField
                                    fullWidth
                                    id="outlined-name"
                                    label="Tên sản phẩm"
                                    className={classes.textField}
                                    value={this.state.name}
                                    onChange={(e) => this.setState({
                                        name: e.target.value,
                                        erName: undefined,
                                        messName: '',
                                    })}
                                    margin="normal"
                                    variant="outlined"
                                    error={this.state.erName}
                                    helperText={this.state.messName}
                                />
                            </Col>
                            <Col xs={{ size: 10, offset: 1 }} md={{ size: 4, offset: 7 }}>
                                <TextField
                                    fullWidth
                                    id="outlined-price"
                                    label="Giá bán"
                                    className={classes.textField}
                                    value={this.state.price}
                                    onChange={(e) => this.setState({
                                        price: e.target.value,
                                        erPrice: undefined,
                                        messPrice: '',
                                    })}
                                    margin="normal"
                                    variant="outlined"
                                    error={this.state.erPrice}
                                    helperText={this.state.messPrice}
                                />
                            </Col>
                            <Col xs={{ size: 10, offset: 1 }} md={{ size: 4, offset: 7 }}>
                                <TextField
                                    fullWidth
                                    id="outlined-cost"
                                    label="Giá thị trường"
                                    className={classes.textField}
                                    value={this.state.cost}
                                    onChange={(e) => this.setState({
                                        cost: e.target.value,
                                        erCost: undefined,
                                        messCost:'',
                                    })}
                                    margin="normal"
                                    variant="outlined"
                                    error={this.state.erCost}
                                    helperText={this.state.messCost}
                                />
                            </Col>
                            <Col xs={{ size: 10, offset: 1 }} md={{ size: 4, offset: 7 }}>
                                <TextField
                                    fullWidth
                                    id="outlined-type"
                                    label="Loại sản phẩm"
                                    className={classes.textField}
                                    value={this.state.type}
                                    onChange={(e) => this.setState({
                                        type: e.target.value,
                                        erType: undefined,
                                        messType: ''
                                    })}
                                    margin="normal"
                                    variant="outlined"
                                    error={this.state.erType}
                                    helperText={this.state.messType}
                                />
                            </Col>
                            <Col xs={{ size: 10, offset: 1 }} md={{ size: 10, offset: 1 }}>
                                <TextField
                                    fullWidth
                                    id="outlined-title"
                                    label="Thông tin khái quát"
                                    className={classes.textField}
                                    value={this.state.title}
                                    onChange={(e) => this.setState({
                                        title: e.target.value,
                                        erTitle: undefined,
                                        messTitle: '',
                                    })}
                                    margin="normal"
                                    variant="outlined"
                                    error={this.state.erTitle}
                                    helperText={this.state.messTitle}
                                />
                            </Col>
                            <Col xs={{ size: 10, offset: 1 }} md={{ size: 10, offset: 1 }}>
                                <TextField
                                    fullWidth
                                    id="outlined-content"
                                    label="Thông tin tổng quát"
                                    className={classes.textField}
                                    value={this.state.content}
                                    onChange={(e) => this.setState({
                                        content: e.target.value,
                                        erContent: undefined,
                                        messContent: '',
                                    })}
                                    multiline rows="4"
                                    margin="normal"
                                    variant="outlined"
                                    error={this.state.erContent}
                                    helperText={this.state.messContent}
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