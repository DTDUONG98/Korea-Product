import React, { Component } from "react"
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

// Hiện chỉ tabs được cho trang detail chứ chưa add được vào home
const style = theme => ({
    formContentItemFeedback: {
        marginBottom: '-12px'
    },
    buttonSendMessager: {
        marginLeft: '12px',
        marginBottom: '15px',
    },
})
class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        let { classes, theme } = this.props
        return (
                <div>
                    <form className={classes.container} noValidate autoComplete="off">
                        <Grid container spacing={3}>
                            <Grid item xs={12} lg={6}>
                                <TextField
                                    id="outlined-name"
                                    label="Họ và tên"
                                    className={classes.formContentItemFeedback}
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <TextField
                                    id="outlined-name"
                                    label="Số điện thoại"
                                    className={classes.formContentItemFeedback}
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <TextField
                                    id="outlined-name"
                                    label="Địa chỉ email"
                                    className={classes.textFformContentItemFeedbackield}
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <TextField
                                    id="outlined-name"
                                    label="Địa chỉ thường trú"
                                    className={classes.formContentItemFeedback}
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} lg={12}>
                                <TextField
                                    name="messager"
                                    id="outlined-multiline-static"
                                    label="Lời nhắn"
                                    multiline rows="4"
                                    className={classes.formMessagertItemFeedback}
                                    onChange={this.onChangeMesager}
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                />
                            </Grid>
                            <Button variant="contained" size="small" color="primary" className={classes.buttonSendMessager}>
                                PHẢN HỒI TIN NHẮN <SendIcon> send</SendIcon>
                            </Button>
                        </Grid>
                    </form>
                </div>
        )
    }
}
export default withStyles(style, { withTheme: true })(Index)

