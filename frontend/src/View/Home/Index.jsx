import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Col, Row } from 'reactstrap'
import { Paper, Container, Grid } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import img from '../../../src/PTIT.png'
import { FaBars } from "react-icons/fa"
import { FaSistrix } from "react-icons/fa"
import InputBase from '@material-ui/core/InputBase'
import { fade } from '@material-ui/core/styles'
import Footer from '../Component/Footer'
import Slider from "react-slick"
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import AttachMoney from '@material-ui/icons/AttachMoney'
import { IconButton, Icon, Tooltip, Button } from '@material-ui/core'


const style = theme => ({
    header: {
        background: "url(./background/homebgr.jpg)",
        position: 'relative',
        backgroundSize: 'cover',
        height: '600px',
        backgroundAttachment: 'fixed'
    },
    cosmetics: {
        background: "url(./background/stylesbgr.jpg)",
        position: 'relative',
        backgroundSize: 'cover',
        height: '200px',
        backgroundAttachment: 'fixed'
    },
    helthyFood: {
        background: "url(./background/tpcnbgr.jpg)",
        position: 'relative',
        backgroundSize: 'cover',
        height: '200px',
        backgroundAttachment: 'fixed'
    },
    body: {
        textAlign: 'center',
        width: '100%',
        height: 'auto'
    },
    paper: {
        widht: '100%',
        height: 'auto',
        marginTop: '20px',
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
    fixPaddingProMain: {
        padding: '24px'
    },
    backgroundWidthProItemBlog3: {
        background: 'white',
        textAlign: 'center',
        padding: '10px 0px',
        marginTop: '35px'
    },
    fixWidthImgProMainItem3: {
        width: '100%',
        height: '270px',
        marginTop: '-10px',

    },
    card: {
        maxWidth: 290,
        marginLeft: '80px',
        marginTop: '30px',
        marginBottom: '20px'
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
    avatarCard: {
        backgroundColor: red[500],
    },
    fixOverFolow: {
        overflow: 'hidden'
    }
})
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Cosmetics: [],
            HelthyFood: [],
            items: [],
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
    Signin() {
        this.props.history.push('/login/11')
    }
    SignUp() {
        this.props.history.push('/Create/12')
    }
    Details(e) {
        let name = e.currentTarget.value
        this.props.history.push(`/Details/${name}`)
    }
    Bills(e) {
        let soluong = 1
        let name = e.currentTarget.value
        let title = name + "-" + soluong
        this.props.history.push(`/Bills/${title}`)
    }
    // để chạy db.json/database :  json-server --watch db.json --port 3333
    // Khai báo data Products ở file datanbase/db.json
    componentDidMount() {
        fetch(`http://localhost:3333/Products`)
            // We get the API response and receive data in JSON format...
            .then(response => response.json())
            // ...then we update the users state
            .then(data => {
                let Data = []
                let DataCosmetics = []
                let DataHelthyFood = []
                data.map((e) => {
                    if (e.status == "New") {
                        Data.push(e)
                    }
                    if (e.type == "Cosmetics") {
                        DataCosmetics.push(e)
                    }
                    if (e.type !== "Cosmetics") {
                        DataHelthyFood.push(e)
                    }
                })
                this.setState({
                    items: Data,
                    Cosmetics: DataCosmetics,
                    HelthyFood: DataHelthyFood,
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
        var settings = {
            dots: true,
            infinite: true,
            speed: 1500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
        };
        return (
            <div>
                <Col xs="12" md="12" className={classes.title}>
                    <Row>
                        <Col xs="1" md="1">
                            <FaBars style={{ fontSize: '40px', margin: '20px', cursor: 'pointer' }} />
                        </Col>
                        <Col xs="1" md="1" style={{ marginTop: '25px', cursor: 'pointer' }}>
                            <a
                                onClick={() => this.Home()}
                            >HOME</a>
                        </Col>
                        <Col xs="1" md="1" style={{ marginTop: '25px', cursor: 'pointer' }}>
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
                            <a
                                onClick={() => this.SignUp()}
                            >Đăng Ký </a>
                        </Col>
                    </Row>
                </Col>
                <Col xs="12" md="12" className={classes.header}>
                    <Row>
                        <Col xs="12" md="12" style={{
                             textAlign: 'center',
                             fontSize: '40px',
                             marginTop: '50px',
                             color: 'yellow',
                        }}>
                            Các Sản Phẩm Mới
                        </Col>
                        <Col xs="12" md="12">
                            <div className={classes.fixOverFolow}>
                                <Slider {...settings}>
                                    {this.state.items.map((item, index) => {
                                        return (
                                            <div className={classes.fixPaddingProMain} key={index}>
                                                <div className={classes.backgroundWidthProItemBlog3}>
                                                    <img src={item.url} alt="" className={classes.fixWidthImgProMainItem3} />
                                                    <Typography variant="h5">{item.title}</Typography>
                                                    <Typography variant="body1">{item.content}</Typography>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Grid container className={classes.Grid}>
                            <Grid item md={4}>
                                <Paper className={classes.paper}>
                                    <p>
                                        Dịch Vụ
                                    </p>
                                </Paper>
                            </Grid>
                            <Grid item md={4} className={classes.paper}>
                                <Paper>
                                    <p>
                                        Sản PHẨM
                                    </p>
                                </Paper>
                            </Grid>
                            <Grid item md={4} className={classes.paper}>
                                <Paper>
                                    <p>
                                        Vận chuyển
                                    </p>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Row>
                </Col>
                <Col xs="12" md="12" className={classes.cosmetics}>
                    <Row>
                        <Col xs="12" md="12" style={{
                            textAlign: 'center',
                            fontSize: '40px',
                            marginTop: '20px',
                            color: 'red'
                        }}>
                            Mỹ Phẩm
                        </Col>
                    </Row>
                </Col>
                <Col xs="12" md="12">
                    <Row>
                        <Col xs="12" md="12">
                            <Row>
                                {this.state.Cosmetics.slice(0, 4).map((item, index) =>
                                    <Card className={classes.card} key={index}>
                                        <CardHeader avatar={<Avatar aria-label="recipe" className={classes.avatarCard}>
                                            {item.title}
                                        </Avatar>
                                        }
                                            action={
                                                <IconButton aria-label="settings">
                                                    <MoreVertIcon />
                                                </IconButton>
                                            }
                                            title={item.title}
                                            subheader={item.date}
                                        />
                                        <CardMedia className={classes.media} image={item.url} title={item.title} />
                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {item.content}
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            <Tooltip title="Detail Product" key="Detail">
                                                <IconButton aria-label="add to favorites" value={item.title} onClick={(e) => this.Details(e)}>
                                                    <FavoriteIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Buy now" key="Buy">
                                                <IconButton aria-label="share" value={item.title} onClick={(e) => this.Bills(e)}>
                                                    <AttachMoney />
                                                </IconButton>
                                            </Tooltip>
                                        </CardActions>
                                    </Card>
                                )}
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col xs="12" md="12" className={classes.helthyFood}>
                    <Row>
                        <Col xs="12" md="12" style={{
                            textAlign: 'center',
                            fontSize: '40px',
                            marginTop: '50px',
                        }}>
                            <p>Thực Phẩn Chức Năng</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs="12" md="12">
                    <Row>
                        <Col xs="12" md="12">
                            <Row>
                                {this.state.HelthyFood.slice(0, 4).map((item, index) =>
                                    <Card className={classes.card} key={index}>
                                        <CardHeader avatar={<Avatar aria-label="recipe" className={classes.avatarCard}>
                                            {item.title}
                                        </Avatar>
                                        }
                                            action={
                                                <IconButton aria-label="settings">
                                                    <MoreVertIcon />
                                                </IconButton>
                                            }
                                            title={item.title}
                                            subheader={item.date}
                                        />
                                        <CardMedia className={classes.media} image={item.url} title={item.title} />
                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {item.content}
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            <Tooltip title="Detail Product" key="Detail">
                                                <IconButton aria-label="add to favorites" value={item.title} onClick={(e) => this.Details(e)}>
                                                    <FavoriteIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Buy now" key="Buy">
                                                <IconButton aria-label="share" value={item.title} onClick={(e) => this.Bills(e)}>
                                                    <AttachMoney />
                                                </IconButton>
                                            </Tooltip>
                                        </CardActions>
                                    </Card>
                                )}
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Footer />
            </div>
        )
    }
}
export default withStyles(style)(Home);