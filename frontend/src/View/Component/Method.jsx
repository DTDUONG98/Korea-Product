import React, { Component } from "react"
import withStyles from '@material-ui/core/styles/withStyles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import SwipeableViews from "react-swipeable-views"


const style = theme => ({
    container: {
        margin: 'auto',
        width: "100%",
        maxWidth: "1440px",
        overflow: "hidden"
    }
})
class Method extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabValue: 0, //Khai báo thứ tự active pagination
        }
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
    render() {
        let { classes, theme } = this.props
        const TabContainer = this.TabContainer
        return (
            <div>
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
                            <TabContainer dir={theme.direction}>Item</TabContainer>
                            <TabContainer dir={theme.direction}>Item</TabContainer>
                            <TabContainer dir={theme.direction}>Item</TabContainer>
                        </SwipeableViews>
                    </div>
                </Grid>
            </div>
        )
    }
}
export default withStyles(style, { withTheme: true })(Method)

