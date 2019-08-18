import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Avatar from '@material-ui/core/Avatar'
import img from '../../../src/PTIT.png'
import { FaBars } from "react-icons/fa"
import { Col, Row } from 'reactstrap'
import { FaSistrix } from "react-icons/fa"
import InputBase from '@material-ui/core/InputBase'
import { fade } from '@material-ui/core/styles'
import { Grid, Paper, Container } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Rating } from 'material-ui-rating'
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
    fadeProperties: {
        duration: 5000,
        transitionDuration: 500,
        infinite: false,
        indicators: true
    },
    card: {
        maxWidth: 290,
        marginLeft: '40px',
        marginTop: '30px'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
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
    }
})
class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            soluong: '1'
        }
    }

    Home() {
        this.props.history.push('/Trangchu/00')
    }
    Cosmetics() {
        this.props.history.push('/Cosmetics/001')
    }
    HelthyFood() {
        this.props.history.push('/HelthyFood/002')
    }
    Soluong(e) {
        let soluong = e.currentTarget.value
        console.log('value', soluong)
        this.setState({
            soluong: parseInt(soluong) + parseInt(this.state.soluong)
        })
    }
    Details(e) {
        let name = e.currentTarget.value
        this.props.history.push(`/Details/${name}`)
    }
    // để chạy db.json/database :  json-server --watch db.json --port 3333
    // Khai báo data Cosmetics ở file datanbase/db.json
    componentDidMount() {
        fetch(`http://localhost:3333/Products`)
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
    render() {
        const { classes } = this.props
        let data = this.props.match.params.id
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
                            <a
                                onClick={() => this.Cosmetics()}
                            >MỸ PHẨM</a>
                        </Col>
                        <Col xs="2" md="2" style={{ marginTop: '25px' }}>
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
                <Col xs={12} md={12}>
                    <Row>
                        {this.state.items.slice(0, this.state.visible).map((e, index) => {
                            if (e.title == data) {
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
                                                                <h2>{e.title}</h2>
                                                            </Col>
                                                            <Col xs="12" md="12" className={classes.comtents}>
                                                                Đánh giá : 
                                                            </Col>
                                                            <Col xs="12" md="12" className={classes.comtents}>
                                                                Thương hiệu: {e.title}
                                                            </Col>
                                                            <Col xs={{ size: 12 }} md={{ size: 12 }}>
                                                                <p
                                                                    style={{
                                                                        border: '1px solid red',
                                                                    }}
                                                                ></p>
                                                            </Col>
                                                            <Col xs="12" md="12" className={classes.comtents}>
                                                                <h3 style={{ color: 'red' }}>{e.price}</h3>
                                                            </Col>
                                                            <Col xs="12" md="12" className={classes.comtents}>
                                                                Tiết kiệm lên đến 16,7%
                                                            </Col>
                                                            <Col xs="12" md="12" className={classes.comtents}>
                                                                Giá thị trường : 300.000 đ
                                                            </Col>
                                                            <Col xs={{ size: 12 }} md={{ size: 12 }}>
                                                                <p
                                                                    style={{
                                                                        border: '1px solid red',
                                                                    }}
                                                                ></p>
                                                            </Col>
                                                            <Col xs="12" md="12"
                                                                className={classes.comtents}>
                                                                <Row>
                                                                    <Col xs="12" md="4">
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
                                                                    <Col xs="12" md={{ size: 4, offset: 2 }}>
                                                                        <Button
                                                                            variant="contained"
                                                                            color="secondary"
                                                                            size="large"
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
                                            >Thông tin tổng quát</p>
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
                                            <p>Các sản phẩm khác</p>
                                        </Col>
                                        <Col xs="12" md="12">
                                            <Row>
                                                {this.state.items.slice(0, 4).map((item, index) => {
                                                    if (item.type == e.type) {
                                                        return (
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
                                                                    <IconButton aria-label="add to favorites" value={item.title} onClick={(e) => this.Details(e)}>
                                                                        <FavoriteIcon />
                                                                    </IconButton>
                                                                    <IconButton aria-label="share">
                                                                        <ShareIcon />
                                                                    </IconButton>
                                                                </CardActions>
                                                            </Card>
                                                        )
                                                    }
                                                })}
                                            </Row>
                                        </Col>
                                    </div>
                                )
                            }
                        })}
                    </Row>
                </Col>
                <Col md="12" xs="12" className={classes.footer}>
                    <Container>
                        <Row>
                            <Col md={4} xs={{ size: 12 }}>
                                <h2 className={classes.service}>Thống Kê</h2>
                                <p style={{ border: '1px solid black' }}></p>
                                <p>Tổng số sản phẩm bán ra : </p>
                                <p style={{ marginBottom: '20px' }}>Số sản phẩm đang còn: </p>
                            </Col>
                            <Col md={4} xs={{ size: 12 }}>
                                <h2 className={classes.service} >Liên hệ</h2>
                                <p style={{ border: '1px solid black' }}></p>
                                <p>FaceBook: Đỗ Tiến Dương</p>
                                <p style={{ marginBottom: '20px' }}>SĐT: 0326609183</p>
                            </Col>
                            <Col md={4} xs={{ size: 12 }}>
                                <h2 className={classes.service} >Dịch vụ khác</h2>
                                <p style={{ border: '1px solid black' }}></p>
                                <p></p>
                                <p style={{ marginBottom: '20px' }}></p>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </div>
        )
    }
}
export default withStyles(style)(Details);