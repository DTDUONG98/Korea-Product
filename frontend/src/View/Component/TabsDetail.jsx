import React, { Component } from "react"
import withStyles from '@material-ui/core/styles/withStyles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import SwipeableViews from "react-swipeable-views"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Avatar from '@material-ui/core/Avatar'
import { Col, Row } from 'reactstrap'
import Evaluete from './Evaluete'
import Feedback from './Feedback'

// TabsDetail chỉ Add được vào Detail/Index
const style = theme => ({
    container: {
        margin: 'auto',
        width: "100%",
        maxWidth: "1440px",
        overflow: "hidden"
    },
    card: {
        maxWidth: 270,
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
    }
})
class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            tabValue: 0, //Khai báo thứ tự active pagination
        }
    }
    componentDidMount() {
        const dataProps = this.props.data
        fetch(`http://localhost:3333/Products`)
            .then(response => response.json())
            .then(data =>{
                let Data = []
                data.map((item) => {
                    if(item.type == dataProps.type){
                        Data.push(item)
                    }
                })
                this.setState({
                    items: Data
                })
            })
            .catch(error => console.log('error ', error));
    }
    TabContainer = ({ children, dir }) => {
        return (
            <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
                {children}
            </Typography>
        );
    }
    handleChangeTab = (event, newValue) => {
        this.setState({ tabValue: newValue })
    }
    Details(e) {
        let name = e.currentTarget.value
        this.props.link.history.push(`/Details/${name}`)
    }
    render() {
        // let dataProps = this.props.data
        const {items} = this.state || []
        let { classes, theme } = this.props
        const TabContainer = this.TabContainer
        return (
            <div className={classes.container}>
                {/* Pagination slider product gợi ý và review */}
                <Grid item xs={9} sm={12} md={12} lg={12}>
                    <div>
                        <AppBar position="static" color="default">
                            <Tabs
                                value={this.state.tabValue}
                                onChange={this.handleChangeTab}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="fullWidth"
                            >
                                <Tab label="Sản phẩm gợi ý" />
                                <Tab label="Đánh giá sản phẩm" />
                                <Tab label="Feedback khách hàng" />
                            </Tabs>
                        </AppBar>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={this.state.tabValue}
                        >
                            <TabContainer dir={theme.direction}>
                                <Col xs="12" md="12">
                                    <Row>
                                        {items.slice(0,4).map((item, index) => 
                                                    <Card className={classes.card} key={index}>
                                                        <CardHeader avatar={<Avatar aria-label="recipe" className={classes.avatarCard}>
                                                            {item.name}
                                                        </Avatar>
                                                        }
                                                            action={
                                                                <IconButton aria-label="settings">
                                                                    <MoreVertIcon />
                                                                </IconButton>
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
                                                            <IconButton aria-label="add to favorites" value={item.name} onClick={(e) => this.Details(e)}>
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
                            </TabContainer>
                            <TabContainer dir={theme.direction}>
                                <Evaluete 
                                    link={this.props}
                                />
                            </TabContainer>
                            <TabContainer dir={theme.direction}>
                                <Feedback />
                            </TabContainer>
                        </SwipeableViews>
                    </div>
                </Grid>
            </div>
        )
    }
}
export default withStyles(style, { withTheme: true })(Index)

