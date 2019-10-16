import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Col, Row } from 'reactstrap'
import Avatar from '@material-ui/core/Avatar'
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
        width: '300px',
        height:'420px',
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
    }
})
class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    Bills(e) { // Bill mua một sản phẩm khi onClick vào sản phẩm đó
        let soluong = 1
        let name = e.currentTarget.value
        let title = name + "-" + soluong
        this.props.link.history.push(`/Bills/${title}`)
    }
    Details(e) {
        let name = e.currentTarget.value
        this.props.link.history.push(`/Details/${name}`)
    }
    render() {
        const { classes } = this.props;
        const data = this.props.data || []
        const visible = this.props.visible || ''
        return (
            <div>
                <Row>
                    {data.slice(0, visible).map((item, index) =>
                        <Col xs="12" md="3">
                            <Card className={classes.card} key={index}>
                                <CardHeader avatar={<Avatar aria-label="recipe" className={classes.avatarCard}>
                                    {item.name}
                                </Avatar>
                                }
                                    title={item.name}
                                    subheader={item.date}
                                />
                                <CardMedia className={classes.media} image={item.url} title={item.name} />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {item.title}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <Tooltip title="Detail Product" key="Detail">
                                        <IconButton aria-label="add to favorites" value={item.name} onClick={(e) => this.Details(e)}>
                                            <FavoriteIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Buy now" key="Buy">
                                        <IconButton aria-label="share" value={item.name} onClick={(e) => this.Bills(e)}>
                                            <AttachMoney />
                                        </IconButton>
                                    </Tooltip>
                                </CardActions>
                            </Card>
                        </Col>
                    )}
                </Row>
            </div>
        )
    }
}
export default withStyles(style)(Item);