import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Avatar from '@material-ui/core/Avatar'
import img from '../../../src/PTIT.png'
import { FaBars } from "react-icons/fa"
import { Col, Row } from 'reactstrap'
import { FaSistrix } from "react-icons/fa"
import InputBase from '@material-ui/core/InputBase'
import { fade } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import AttachMoney from '@material-ui/icons/AttachMoney'
import { Container } from '@material-ui/core'
import { IconButton, Icon, Tooltip, Button } from '@material-ui/core'
import Slider from "react-slick"
import Footer from '../Component/Footer'

const style = theme => ({
    header: {
        background: "url(/background/Cosmeticsbgr.jpg)",
        position: 'relative',
        backgroundSize: 'cover',
        height: '550px',
        backgroundAttachment: 'fixed'
    },
    title: {
        background: '#adc1eb',
        width: '100%',
        height: '80px',
    },
    avatar: {
        margin: 20,
    },
    footer: {
        background: '#adc1eb',
        marginTop: '20px',
    },
    service: {
        marginTop: '20px',
        marginBottom: '10px',
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
    card: {
        maxWidth: 290,
        minWidth: 290,
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
            items: [],
            dataSale: [],
            visible: 8,
            hidden: false,
        }
    }

    Home() {
        this.props.history.push('/')
    }
    Details(e) {
        let name = e.currentTarget.value // Tên sản phẩm bạn muốn xem chi tiết
        this.props.history.push(`/Details/${name}`)
    }
    HelthyFood() {
        this.props.history.push('/HelthyFood/02')
    }
    AddCosmetics() {
        this.props.history.push('/CreateCosmetics/03')
    }
    Bills(e) {
        let soluong = 1
        let name = e.currentTarget.value
        let title = name + "-" + soluong
        this.props.history.push(`/Bills/${title}`)
    }
    componentDidMount() {
        fetch(`http://localhost:3333/Products`)
            .then(response => response.json())
            .then((data) => {
                let DataSale = []
                let arrData = []
                data.map((e) => {
                    if (e.type == "Cosmetics") {
                        arrData.push(e)
                        if (e.status == "New") {
                            DataSale.push(e)
                        }
                    }
                })
                this.setState({ items: arrData, dataSale: DataSale })
            })
            .catch(error => console.log('error ', error));
    }
    render() {
        const { classes } = this.props
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
                            <a >MỸ PHẨM</a>
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
                        <Col>
                            <Avatar alt="PTIT" src={img} className={classes.avatar} />
                        </Col>
                    </Row>
                </Col>
                <Col xs="12" md="12" className={classes.header}>
                    <Row>
                        <Col xs="12" md="12" style={{
                            textAlign: 'center',
                            fontSize: '40px',
                            marginTop: '30px',
                            // color: 'Blue',
                        }}>
                            Những Sản Phẩm Giảm Giá
                        </Col>
                        <Col xs="12" md="12">
                            <div className={classes.fixOverFolow}>
                                <Slider {...settings}>
                                    {this.state.dataSale.map((item, index) => {
                                        return (
                                            <Card className={classes.card} key={index}>
                                                <CardHeader avatar={<Avatar aria-label="recipe" className={classes.avatarCard}>
                                                    {item.title}
                                                </Avatar>
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
                                        )
                                    })}
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xs={{ size: 1, offset: 11 }} md={{ size: 1, offset: 11 }} style={{ fontSize: '30px', marginTop: '20px' }}>
                    <Tooltip title="Create New Product" key="create">
                        <IconButton hidden={this.state.hidden} onClick={() => this.AddCosmetics()}>
                            <AddCircleOutlineIcon style={{ fontSize: '30px' }} />
                        </IconButton>
                    </Tooltip>
                </Col>
                <Col xs="12" md="12" className={classes.lipstick}>
                    <Row>
                        {this.state.items.slice(0, this.state.visible).map((item, index) =>
                            <Card className={classes.card} key={index}>
                                <CardHeader avatar={<Avatar aria-label="recipe" className={classes.avatarCard}>
                                    {item.title}
                                </Avatar>
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
                <Col xs="12" md="12">
                    <Row>
                        <Col xs={{ size: 4, offset: 4 }} md={{ size: 4, offset: 4 }} style={{textAlign: 'center'}}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                value="4"
                                onClick={(e) => this.setState({
                                    visible: parseInt(this.state.visible) + parseInt(e.target.value)
                                })}
                            >
                                Xem Thêm
                                </Button>
                        </Col>
                    </Row>
                </Col>
                <Footer />
            </div>
        )
    }
}
export default withStyles(style)(Index);