import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Col, Row } from 'reactstrap'
import Grid from '@material-ui/core/Grid'
const style = theme => ({
    footer: {
        background: '#3f51b5',
        marginTop: '20px',
    },
    service: {
        marginTop: '20px',
        marginBottom: '10px',
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
                            <p>Các câu hỏi thường gặp</p>
                            <p>Gửi yêu cầu hỗ trợ</p>
                            <p>Hướng dẫn đặt hàng</p>
                            <p>Phương thức vận chuyển</p>
                            <p>Chính sách đổi trả</p>
                            <p>Chính sách khách hàng</p>
                            <p>Hỗ trợ khách hàng :admin@pro.com</p>
                            <p>Báo lỗi bảo mật : sercurty@pro.com</p>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <h4>Về PRO</h4>
                            <p style={{marginTop: '20px'}}>Giới thiệu về PRO</p>
                            <p>Chính sách bảo mật thanh toán</p>
                            <p>Chính sách bảo mật thông tin cá nhân</p>
                            <p>Chính sách giải quyết khiếu nại</p>
                            <p>Điều khoản sử dụng</p>
                            <p>PRO tư vấn</p>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <h4>Phương Thức Thanh Toán</h4>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <h4>Liên hệ với chúng tôi</h4>
                        </Grid>
                    </Grid>
                </Col>
            </div>
        )
    }
}
export default withStyles(style)(Footer);