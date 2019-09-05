import React, { Component } from 'react'
import withStyle from '@material-ui/core/styles/withStyles'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
const styles = theme => ({
    title: {
        textAlign: 'center'
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
    render() {
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableCell>Tên sản phẩm</TableCell>
                        <TableCell>Tên người mua</TableCell>
                        <TableCell>Số Điện Thoại</TableCell>
                        <TableCell>Số Lượng</TableCell>
                        <TableCell>Giá</TableCell>
                        <TableCell>Ngày mua</TableCell>
                        <TableCell>Địa chỉ nhận hàng</TableCell>
                    </TableHead>
                    {this.state.items.map((item, index) => {
                        <TableBody key={index}>
                            <TableRow>{item.product}</TableRow>
                            <TableRow>{item.Name}</TableRow>
                            <TableRow>{item.Phone}</TableRow>
                            <TableRow>{item.quatity}</TableRow>
                            <TableRow>{item.price}</TableRow>
                            <TableRow>{item.date}</TableRow>
                            <TableRow>{item.Address}</TableRow>
                        </TableBody>
                    })}
                </Table>
            </div>
        )
    }
}
export default withStyle(styles)(ListOrder)