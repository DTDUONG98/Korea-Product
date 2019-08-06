import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Avatar from '@material-ui/core/Avatar'
import img from '../../../src/PTIT.png'
import { FaBars } from "react-icons/fa"
import { Col, Row } from 'reactstrap'
import { FaSistrix } from "react-icons/fa"
import InputBase from '@material-ui/core/InputBase'
import { fade } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import slide1 from '../../Mypham/o_hui.jpg'
import slide2 from '../../Mypham/sulwhasoo.jpg'
import slide3 from '../../Mypham/SUM Time ENERGY.jpg'
import slide4 from '../../Mypham/Nước hoa hồng laneige.jpg'

const style = theme => ({
    root: {
        flexGrow: 1,
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
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    avatarCard: {
        backgroundColor: red[500],
    },
    lipstick: {
        padding: '20px'
    },
})
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

Home() {
        this.props.history.push('/Trangchu/00')
    }
Ohui(){
    this.props.history.push('/Ohui/1')
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
                            <a
                                onClick={() => this.Home()}
                            >HOME</a>
                        </Col>
                        <Col xs="1" md="1" style={{ marginTop: '25px' }}>
                            <a>MỸ PHẨM</a>
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
                <Col xs="12" md="12" className={classes.lipstick}>
                    <Row>
                        <p 
                            style={{
                                textAlign: 'center',
                                fontSize: '30px',
                                marginBottom: '20px'
                            }}
                        >O-Hui</p>
                    </Row>
                    <Row>
                        {
                            [slide1, slide2, slide3, slide4].map((e, index) => {
                                let name = (e.split('/')[3]).split('.')[0]
                                console.log('name', name)
                                return (
                                    <Card key={index} className={classes.card}>
                                        <CardHeader avatar={<Avatar aria-label="recipe" className={classes.avatarCard}>
                                            {name}
                                </Avatar>
                                        }
                                            action={
                                                <IconButton aria-label="settings">
                                                    <MoreVertIcon />
                                                </IconButton>
                                            }
                                            title={name}
                                            subheader="September 14, 2016"
                                        />
                                        <CardMedia className={classes.media} image={`${e}`} title={name} />
                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            <IconButton aria-label="add to favorites" onClick={() => this.Ohui()}>
                                                <FavoriteIcon />
                                            </IconButton>
                                            <IconButton aria-label="share">
                                                <ShareIcon />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                )
                            })
                        }
                    </Row>
                    <Row>
                        <p 
                            style={{
                                textAlign: 'center',
                                fontSize: '30px',
                                marginBottom: '20px',
                                marginTop: '20px',
                            }}
                        >
                            SamPoo
                        </p>
                    </Row>
                    <Row>
                        {
                            [slide1, slide2, slide3, slide4].map((e, index) => {
                                let name = (e.split('/')[3]).split('.')[0]
                                console.log('name', name)
                                return (
                                    <Card key={index} className={classes.card}>
                                        <CardHeader avatar={<Avatar aria-label="recipe" className={classes.avatarCard}>
                                            {name}
                                </Avatar>
                                        }
                                            action={
                                                <IconButton aria-label="settings">
                                                    <MoreVertIcon />
                                                </IconButton>
                                            }
                                            title={name}
                                            subheader="September 14, 2016"
                                        />
                                        <CardMedia className={classes.media} image={`${e}`} title={name} />
                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            <IconButton aria-label="add to favorites">
                                                <FavoriteIcon />
                                            </IconButton>
                                            <IconButton aria-label="share">
                                                <ShareIcon />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                )
                            })
                        }
                    </Row>
                </Col>
            </div>
        )
    }
}
export default withStyles(style)(Index);