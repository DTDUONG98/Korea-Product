import React, { Component } from 'react'
import withStyle from '@material-ui/core/styles/withStyles'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { Col, Row } from 'reactstrap'
import Print from '@material-ui/icons/Print'
import { IconButton, Tooltip } from '@material-ui/core'
import TableToExcel from "@linways/table-to-excel"
const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
        marginTop: '10px',
        marginBottom: '50px'
    },
    print: {
        fontSize: '30px'
    }
})
class ListOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
    }
    componentDidMount() {
        fetch(`http://localhost:3333/ListOrder`)
            .then(response => response.json())
            .then(data =>
                this.setState({ items: data })
            )
            .catch(error => console.log('error ', error));
    }
    printTblToEx(){
        let table = document.querySelector('table')
        TableToExcel.convert(table)
    }
    render() {
        const { classes } = this.props
        return (
            <div>
                <Header 
                    link = {this.props}
                />
                <Col xs="12" md="12">
                    <h2 style={{textAlign: "center"}}>Danh sách Order</h2>
                </Col>
                <Col xs={{ size: 1, offset: 11 }} md={{ size: 1, offset: 11 }}>
                    <Tooltip title="Print to Excel" key="Print">
                        <IconButton aria-label="print to excel" onClick={() => this.printTblToEx()}>
                            <Print className={classes.print} />
                        </IconButton>
                    </Tooltip>
                </Col>
                <Table className={classes.table} data-cols-width="5,30,30,15,10,20,20,40">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">STT</TableCell>
                            <TableCell align="left">Tên Mặt Hàng</TableCell>
                            <TableCell align="left">Tên Khách Hàng</TableCell>
                            <TableCell align="left">Số Điện Thoại</TableCell>
                            <TableCell align="left">Số lượng sản phẩm</TableCell>
                            <TableCell align="left">Giá ( tổng )</TableCell>
                            <TableCell align="left">Ngày Đặt Hàng</TableCell>
                            <TableCell align="left">Địa chỉ nhận hàng</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.items.map((item, index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">{item.id}</TableCell>
                                <TableCell align="left">Chưa lấy được</TableCell>
                                <TableCell align="left">{item.userName}</TableCell>
                                <TableCell align="left">{item.phone}</TableCell>
                                <TableCell align="left">{item.quantity}</TableCell>
                                <TableCell align="left">Chưa lấy được</TableCell>
                                <TableCell align="left">{item.date}</TableCell>
                                <TableCell align="left">{item.address}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Footer 
                    link={this.props}
                />
            </div>
        )
    }
}
export default withStyle(styles)(ListOrder)