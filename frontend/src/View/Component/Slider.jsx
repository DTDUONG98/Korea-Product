import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import Avatar from '@material-ui/core/Avatar'
import Slider from "react-slick"
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import { red } from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import AttachMoney from '@material-ui/icons/AttachMoney'
import { IconButton, Tooltip } from '@material-ui/core'


const style = theme => ({
    card: {
        maxWidth: 300,
        marginLeft: '30px',
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
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    Details(e) {
        let name = e.currentTarget.value
        this.props.link.history.push(`/Details/${name}`)
    }
    Bills(e) { // Bill mua một sản phẩm khi onClick vào sản phẩm đó
        let soluong = 1
        let name = e.currentTarget.value
        let title = name + "-" + soluong
        this.props.link.history.push(`/Bills/${title}`)
    }
    render() {
        const { classes } = this.props;
        const data = this.props.data || []
        var settings = {
            dots: true,
            infinite: true,
            speed: 1500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
        };
        return (
            <div className={classes.fixOverFolow}>
                <Slider {...settings}>
                    {data.map((item, index) => {
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
        )
    }
}
export default withStyles(style)(Index);