import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { FaBars } from "react-icons/fa"
import { Col, Row } from 'reactstrap'
import { FaSistrix } from "react-icons/fa"
import InputBase from '@material-ui/core/InputBase'
import { fade } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar';
import img from '../../../src/PTIT.png'
import { Fade } from 'react-slideshow-image';
import { Grid, Paper } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const style = theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        background: '#adc1eb',
        width: '100%',
        height: '80px'
    },
    header: {
        textAlign: 'center',
        width: '100%',
        height: '150px'
    },
    body: {
        textAlign: 'center',
        width: '100%',
        height: '150px',
        marginTop: '450px',
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
    fadeProperties: {
        duration: 5000,
        transitionDuration: 500,
        infinite: false,
        indicators: true
    },
    eachFade: {
        display: true,
    },
    card: {
        maxWidth: 345,
        marginLeft: '40px',
    },
    paper: {
        widht: '90%',
        height: 'auto',
        marginTop: '20px',
        marginLeft: '10px',
    },
})
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    // để chạy db.json/database :  json-server --watch db.json --port 3333
    // Khai báo data Cosmetics ở file datanbase/db.json
    componentDidMount() {
        fetch(`http://localhost:3333/Cusmetics`)
            // We get the API response and receive data in JSON format...
            .then(response => response.json())
            // ...then we update the users state
            .then(data =>
                this.setState({ items: data })
            )
            // Catch any errors we hit and update the app
            .catch(error => console.log('error ', error));
        // console.log('result ', result)
    }
    Cusmetics() {
        this.props.history.push('/Cusmetics/001')
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Col xs="12" md="12" className={classes.title}>
                    <Row>
                        <Col xs="1" md="1">
                            <FaBars style={{ fontSize: '40px', margin: '20px' }} />
                        </Col>
                        <Col xs="1" md="1" style={{ marginTop: '25px' }}>
                            <a>HOME</a>
                        </Col>
                        <Col xs="1" md="1" style={{ marginTop: '25px' }}>
                            <a onClick={() => this.Cusmetics()}>
                                MỸ PHẨM
                            </a>
                        </Col>
                        <Col xs="2" md="2" style={{ marginTop: '25px' }}>
                            <a>
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
                        <Col>
                            <Avatar alt="PTIT" src={img} className={classes.avatar} />
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
                        <Col md={6} xs={6}>
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
                                                <TableCell align="left">Tổng(vnđ)</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>SUM Time ENERGY</TableCell>
                                                <TableCell>2</TableCell>
                                                <TableCell>250.000</TableCell>
                                                <TableCell>500.000</TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>Nước hoa hồng laneige</TableCell>
                                                <TableCell>3</TableCell>
                                                <TableCell>250.000</TableCell>
                                                <TableCell>750.000</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </Col>
                            </Paper>
                        </Col>
                        <Col md={6} xs={6}>
                            <Paper className={classes.paper}>
                                <Col xs={12} md={12} style={{ textAlign: 'center', backgroundColor: '#F57249', padding: '10px' }}>
                                    Những sản phẩm mới gần đây
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
                </Col>
            </div>
        )
    }
}
export default withStyles(style)(Home);