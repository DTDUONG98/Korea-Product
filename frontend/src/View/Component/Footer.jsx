import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Col, Row } from 'reactstrap'
import Grid from '@material-ui/core/Grid'
import Map from './Map'
const style = theme => ({
    footer: {
        background: '#3f51b5',
        marginTop: '20px',
    },
    service: {
        marginTop: '20px',
        marginBottom: '10px',
        cursor: 'pointer'
    },
    root: {
        flexGrow: 1,
      },
    grid:{
        marginLeft: '15px',
        marginTop: '20px'
    }
})
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    Send(){
        this.props.link.history.push('/Send/123')
    }
    Questions(){
        this.props.link.history.push('/Questions/124')
    }
    render() {
        const { classes } = this.props
        return (
            <div>
                <Col md="12" xs="12" className={classes.footer}>
                    <Grid container className={classes.root} spacing={2} >
                        <Grid item xs={0} md={3}>
                            <h4>Hỗ Trợ Khách Hàng</h4>
                            <h6 style={{color: 'red', marginTop: '20px'}}>Hotline đặt hàng: 0326609183</h6>
                            <span>(Hỗ trợ từ thứ 2 đến thứ 7)</span>
                            <h6 style={{color: 'red', marginTop: '10px'}}>Hotline chăm sóc khách hàng: 0326609183</h6>
                            <p>(Hỗ trợ từ thứ 2 đến thứ 7)</p>
                            <p><a onClick={() => this.Questions()} className={classes.service}>Các câu hỏi thường gặp</a></p>
                            <p className={classes.service}><a onClick={() => this.Send()}>Gửi yêu cầu hỗ trợ</a></p>
                            <p className={classes.service}><a onClick={() => this.Questions()}>Hướng dẫn đặt hàng</a></p>
                            <p className={classes.service}><a onClick={() => this.Questions()}>Phương thức vận chuyển</a></p>
                            <p className={classes.service}><a onClick={() => this.Questions()}>Chính sách đổi trả</a></p>
                            <p className={classes.service}><a onClick={() => this.Questions()}>Chính sách khách hàng</a></p>
                            <p>Hỗ trợ khách hàng :admin@pro.com</p>
                            <p>Báo lỗi bảo mật : sercurty@pro.com</p>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <h4>Về PRO</h4>
                            <p style={{marginTop: '20px'}} className={classes.service}><a onClick={() => this.Questions()}>Giới thiệu về PRO</a></p>
                            <p className={classes.service}><a onClick={() => this.Questions()}>Chính sách bảo mật thanh toán</a></p>
                            <p className={classes.service}><a onClick={() => this.Questions()}>Chính sách bảo mật thông tin cá nhân</a></p>
                            <p className={classes.service}><a onClick={() => this.Questions()}>Chính sách giải quyết khiếu nại</a></p>
                            <p className={classes.service}><a onClick={() => this.Questions()}>Điều khoản sử dụng</a></p>
                            <p className={classes.service}><a onClick={() => this.Questions()}>PRO tư vấn</a></p>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Map />
                        </Grid>
                    </Grid>
                </Col>
            </div>
        )
    }
}
export default withStyles(style)(Footer);