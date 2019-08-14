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
import Card from '@material-ui/core/Card'

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
    paper:{
        widht: '90%',
        height: '100px',
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

    Cusmetics() {
        this.props.history.push('/Cusmetics/001')
    }
    render() {
        const { classes } = this.props
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
                    <Grid container item md={12} spacing={0}>
                        <Grid item md={6}>
                            <Paper className={classes.paper}>
                                    <h1>AAAAAAA</h1>
                            </Paper>
                        </Grid>
                        <Grid item md={6}>
                            <Paper  className={classes.paper}>
                                    <h1>BBBBBBBB</h1>
                            </Paper>
                        </Grid>
                    </Grid>
                </Col>
                <Col xs={{ size: 12 }} md={{ size: 12 }} className={classes.header}>
                    <Grid container item md={12} spacing={0}>
                        <Grid item md={6}>
                            <Paper className={classes.paper}>
                                    <h1>C</h1>
                            </Paper>
                        </Grid>
                        <Grid item md={6}>
                            <Paper  className={classes.paper}>
                                    <h1>D</h1>
                            </Paper>
                        </Grid>
                    </Grid>
                </Col>
            </div>
        )
    }
}
export default withStyles(style)(Home);