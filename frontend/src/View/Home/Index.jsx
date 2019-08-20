import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Col, Row } from 'reactstrap'
import { Paper, Container } from '@material-ui/core'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Zoom } from 'react-slideshow-image'
// import Header from '../Component/Header'
import Avatar from '@material-ui/core/Avatar'
import img from '../../../src/PTIT.png'
import { FaBars } from "react-icons/fa"
import { FaSistrix } from "react-icons/fa"
import InputBase from '@material-ui/core/InputBase'
import { fade } from '@material-ui/core/styles'
import Footer from '../Component/Footer'

const style = theme => ({
    header: {
        textAlign: 'center',
        width: '100%',
        height: 'auto'
    },
    card: {
        maxWidth: 345,
        marginLeft: '40px',
    },
    paper: {
        widht: '100%',
        height: 'auto',
        marginTop: '20px',
        marginLeft: '10px',
    },
    zoomOutProperties: {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        scale: 0.4,
        arrows: true
    },
    title: {
        background: '#adc1eb',
        width: '100%',
        height: '80px'
    },
    avatar: {
        margin: 20,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        marginTop: '20px',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
})
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Cosmetics: [],
            HelthyFood: [],
        }
    }
    Home() {
        this.props.history.push('/')
    }
    HelthyFood(){
        this.props.history.push('/HelthyFood/02')
    }
    Cosmetics() {
        this.props.history.push('/Cosmetics/01')
    }
    Signin(){
        this.props.history.push('/login/11')
    }
    // để chạy db.json/database :  json-server --watch db.json --port 3333
    // Khai báo data Cosmetics ở file datanbase/db.json
    componentDidMount() {
        fetch(`http://localhost:3333/Products`)
            // We get the API response and receive data in JSON format...
            .then(response => response.json())
            // ...then we update the users state
            .then(data => {
                let DataCosmetics = []
                let DataFelthyFood = []
                data.map((e) => {
                    if (e.type == "Cosmetics") {
                        DataCosmetics.push(e)
                    }
                    else {
                        DataFelthyFood.push(e)
                    }
                })
                this.setState({
                    Cosmetics: DataCosmetics,
                    HelthyFood: DataFelthyFood,
                })
            })
            // Catch any errors we hit and update the app
            .catch(error => console.log('error ', error));
        // console.log('result ', result)
    }
    Details(e) {
        let name = e.currentTarget.value
        this.props.history.push(`/Details/${name}`)
    }
    render() {
        const { classes } = this.props;
        let data = this.props.match.params.id
        console.log('data', data)
        return (
            <div>
                {/* <Header /> */}
                <Col xs="12" md="12" className={classes.title}>
                    <Row>
                        <Col xs="1" md="1">
                            <FaBars style={{ fontSize: '40px', margin: '20px' , cursor: 'pointer'}} />
                        </Col>
                        <Col xs="1" md="1" style={{ marginTop: '25px', cursor: 'pointer' }}>
                            <a
                                onClick={() => this.Home()}
                            >HOME</a>
                        </Col>
                        <Col xs="1" md="1" style={{ marginTop: '25px' , cursor: 'pointer'}}>
                            <a
                                onClick={() => this.Cosmetics()}
                            >MỸ PHẨM</a>
                        </Col>
                        <Col xs="2" md="2" style={{ marginTop: '25px', cursor: 'pointer' }}>
                            <a onClick={() => this.HelthyFood()}>
                                THỰC PHẨM CHỨC NĂNG
                            </a>
                        </Col>
                        <Col xs="3" md={{ size: 3, offset: 2 }}>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <FaSistrix style={{ fontSize: '25px' }} />
                                </div>
                                <InputBase placeholder="Search…" classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }} inputProps={{ 'aria-label': 'Search' }} />
                            </div>
                        </Col>
                        <Col xs="1" md="1" style={{ marginTop: '25px', cursor: 'pointer' }}>
                            {/* <Avatar alt="PTIT" src={img} className={classes.avatar} /> */}
                            <a
                                onClick={() => this.Signin()}
                            >Đăng nhập </a>
                        </Col>
                        <Col xs="1" md="1" style={{ marginTop: '25px', cursor: 'pointer' }}>
                            {/* <Avatar alt="PTIT" src={img} className={classes.avatar} /> */}
                            <a>Đăng Ký </a>
                        </Col>
                    </Row>
                </Col>
                <Col xs={{ size: 12 }} md={{ size: 12 }} className={classes.header}>
                    <p
                        style={{
                            textAlign: 'center',
                            fontSize: '30px',
                            marginTop: '20px',
                        }}
                    >
                        Mỹ Phẩm
                    </p>
                    <Row>
                        <Col md={6} xs={{ size: 12 }}>
                            <Paper className={classes.paper}>
                                <Col xs={12} md={12} style={{ textAlign: 'center', backgroundColor: '#F57249', padding: '10px' }}>
                                    Giao dich gần đây
                               </Col>
                                <Col xs={12} md={12}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="left">Tên sản phẩm</TableCell>
                                                <TableCell align="left">Số Lượng</TableCell>
                                                <TableCell align="left">Đơn giá(vnđ)</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>Đông trùng hạ thảo</TableCell>
                                                <TableCell>2</TableCell>
                                                <TableCell>250.000</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Nước hoa hồng laneige</TableCell>
                                                <TableCell>3</TableCell>
                                                <TableCell>250.000</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </Col>
                            </Paper>
                        </Col>
                        <Col md={6} xs={{ size: 12 }}>
                            <Paper className={classes.paper}>
                                <Col xs={12} md={12} style={{ textAlign: 'center', backgroundColor: '#F57249', padding: '10px' }}>
                                    Những sản phẩm mới gần đây
                                </Col>
                                <Col xs={12} md={12}>
                                    <Zoom className={classes.zoomOutProperties}>
                                        {
                                            this.state.Cosmetics.slice(0, this.state.visible).map((e, index) => (
                                                <img
                                                    key={index}
                                                    src={e.url}
                                                    style={{ width: '100%', height: '400px' }}
                                                />
                                            ))
                                        }
                                    </Zoom>
                                </Col>
                            </Paper>
                        </Col>
                    </Row>
                    <p
                        style={{
                            textAlign: 'center',
                            fontSize: '30px',
                            marginTop: '20px',
                        }}
                    >
                        Thực phẩm chức năng
                    </p>
                    <Row>
                        <Col md={6} xs={{ size: 12 }}>
                            <Paper className={classes.paper}>
                                <Col xs={12} md={12} style={{ textAlign: 'center', backgroundColor: '#F57249', padding: '10px' }}>
                                    Những sản phẩm mới gần đây
                                </Col>
                                <Col xs={12} md={12}>
                                    <Zoom className={classes.zoomOutProperties}>
                                        {
                                            this.state.HelthyFood.slice(0, this.state.visible).map((e, index) => (
                                                <img key={index} src={e.url} style={{ width: '100%', height: '400px' }} />
                                            ))
                                        }
                                    </Zoom>
                                </Col>
                            </Paper>
                        </Col>
                        <Col md={6} xs={{ size: 12 }}>
                            <Paper className={classes.paper}>
                                <Col xs={12} md={12} style={{ textAlign: 'center', backgroundColor: '#F57249', padding: '10px' }}>
                                    Giao dich gần đây
                               </Col>
                                <Col xs={12} md={12}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="left">Tên sản phẩm</TableCell>
                                                <TableCell align="left">Số Lượng</TableCell>
                                                <TableCell align="left">Đơn giá(vnđ)</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>Đông trùng hạ thảo</TableCell>
                                                <TableCell>2</TableCell>
                                                <TableCell>250.000</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Lợi sữa ITOH</TableCell>
                                                <TableCell>3</TableCell>
                                                <TableCell>250.000</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </Col>
                            </Paper>
                        </Col>
                    </Row>
                </Col>
                <Footer />
            </div>
        )
    }
}
export default withStyles(style)(Home);