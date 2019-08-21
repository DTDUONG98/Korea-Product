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
// import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import { Container } from '@material-ui/core'
import { IconButton, Icon, Tooltip, Button } from '@material-ui/core'

const style = theme => ({
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
            vasible: 4,
            hidden: false,
        }
    }

    Home() {
        this.props.history.push('/')
    }
    Details(e) {
        let name = e.currentTarget.value
        this.props.history.push(`/Details/${name}`)
    }
    componentDidMount() {
        fetch(`http://localhost:3333/Products`)
            .then(response => response.json())
            .then((data) => {
                let arrData = []
                data.map((e) => {
                    if (e.type == "Cosmetics") {
                        arrData.push(e)
                    }
                })
                this.setState({ items: arrData })
            })
            .catch(error => console.log('error ', error));
    }
    HelthyFood() {
        this.props.history.push('/HelthyFood/02')
    }
    AddCosmetics(){
        this.props.history.push('/CreateCosmetics/03')
    }
    render() {
        const { classes } = this.props
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
                                <a>MỸ PHẨM</a>
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
                <Col xs={{size: 1, offset: 11}} md={{size: 1 ,offset: 11}} style={{fontSize: '30px', marginTop: '20px'}}>
                        <IconButton hidden={this.state.hidden} onClick={() => this.AddCosmetics()}>
                                <AddCircleOutlineIcon style={{fontSize: '30px'}} />
                        </IconButton>
                </Col>
                <Col xs="12" md="12" className={classes.lipstick}>
                    <Row>
                        {this.state.items.slice(0, this.state.visible).map((item, index) =>
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
                        )}
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
export default withStyles(style)(Index);