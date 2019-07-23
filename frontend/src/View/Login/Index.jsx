import React, { Component } from '../../../node_modules/react'
import withStyles from '@material-ui/core/styles/withStyles';
import '../../App.css'
import Grid from '@material-ui/core/Grid';
import { Paper, Button } from '@material-ui/core';
import { IoIosLock } from "react-icons/io";
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const style = theme => ({
    root: {
        flexGrow: 1,
    },
    login: {
        width: '80%',
        height: '400px',
        marginTop: '100px',
        marginLeft: '10%',
        textAlign: 'center'
    },
    logo: {
        width: '100%',
        height: '50px',
    },
    textField: {
        marginLeft: '10%',
        marginRight: '10%',
        width: '80%',
      },
})
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedA: true,
        }
    }
createUser(){
    this.props.history.push('Create/1')
}

    render() {
        const { classes } = this.props
        const handleChange = name => event => {
            this.setState({ ...this.state, [name]: event.target.checked });
          };
        return (
            <div>
                <Grid container className={classes.root} spacing={0}>
                    <Grid item xs={1} md={4}>
                    </Grid>
                    <Grid item xs={10} md={4} >
                        <Paper className={classes.login}>
                            <IoIosLock style={{marginTop: '10px', fontSize: '50px', color: 'blue'}} /> <br />
                            <span style={{fontSize: '20px' , textAlign: 'center'}}>Đăng Nhập</span>
                           <TextField
                                id="UserName"
                                label="Tài Khoản"
                                className={classes.textField}
                                margin="normal"
                            />
                            <TextField
                                id="Password"
                                label="Mật Khẩu"
                                className={classes.textField}
                                margin="normal"
                                type="password"
                            />
                              <FormControlLabel
                                control={
                                <Checkbox
                                    style={{marginBottom: '10px'}}
                                    checked={this.state.checkedA}
                                    onChange={handleChange('checkedA')}
                                    value="checkedA"
                                    color="Secondary"
                                />
                                }
                                label="Ghi nhớ tài khoản"
                            />
                            <br />
                            <Button
                                variant="contained" 
                                color="primary"
                            >
                                Đăng Nhập
                            </Button>
                            <a onClick={() => this.createUser()} style={{ color: "black" }}>
                                <p>Tạo tài khoản</p>
                            </a>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(style)(index);