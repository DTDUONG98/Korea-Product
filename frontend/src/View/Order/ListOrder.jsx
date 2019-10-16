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
import Calendar from 'react-calendar'
import moment from 'moment'
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
const columns = [
    { id: 'STT', label: 'STT', minWidth: 70 },
    { id: 'product', label: 'Tên mặt hàng', minWidth: 170 },
    { id: 'userName', label: 'Tên khách hàng', minWidth: 170 },
    {
        id: 'phone',
        label: 'Số điện thoại',
        minWidth: 170,
        align: 'left'
    },
    {
        id: 'quantity',
        label: 'Số lượng',
        minWidth: 100,
        align: 'left',
        format: value => value.toLocaleString(),
    },
    {
        id: 'cost',
        label: 'Tổng giá (vnd)',
        minWidth: 170,
        align: 'left',
        format: value => value.toLocaleString(),
    },
    {
        id: 'date',
        label: 'Ngày đặt hàng',
        minWidth: 170,
        align: 'left',
    },
    {
        id: 'address',
        label: 'Đại chỉ nhận hàng',
        minWidth: 270,
        align: 'left',
    },
];

class ListOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            date: new Date(),
            DateSelect: '',
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
    printTblToEx() {
        let table = document.querySelector('table')
        TableToExcel.convert(table)
    }
    onChange = (event) => {
        let date = moment(event).format('YYYY-MM-DD')
        console.log('date', date)
        this.setState({
            date: event,
            DateSelect: date,
        })
    }
    render() {
        const { classes } = this.props
        return (
            <div>
                <Header
                    link={this.props}
                />
                <Col xs="12" md="12">
                    <h2 style={{ textAlign: "center" }}>Danh sách Order</h2>
                </Col>
                <Col xs={{ size: 1, offset: 11 }} md={{ size: 1, offset: 11 }}>
                    <Tooltip title="Print to Excel" key="Print">
                        <IconButton aria-label="print to excel" onClick={() => this.printTblToEx()}>
                            <Print className={classes.print} />
                        </IconButton>
                    </Tooltip>
                </Col>
                <Col xs="12" md="12">
                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                </Col>
                <Table className={classes.table} data-cols-width="5,30,30,15,10,20,20,40">
                    <TableHead>
                        <TableRow>
                            {columns.map(column => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.items.map((item, index) => {
                            if (item.date == this.state.DateSelect) {
                                return (
                                    <TableRow key={index}>
                                        <TableCell component="th" scope="row">{item.id}</TableCell>
                                        <TableCell align="left">{item.product}</TableCell>
                                        <TableCell align="left">{item.userName}</TableCell>
                                        <TableCell align="left">{item.phone}</TableCell>
                                        <TableCell align="left">{item.quantity}</TableCell>
                                        <TableCell align="left">{item.price}</TableCell>
                                        <TableCell align="left">{item.date}</TableCell>
                                        <TableCell align="left">{item.address}</TableCell>
                                    </TableRow>
                                )
                            }
                        })}
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