import React, { Component } from 'react'
import withStyle from '@material-ui/core/styles/withStyles'
import Header from '../Component/Header'
import Footer from '../Component/Footer'
const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
      },
      table: {
      },
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
        const {classes} = this.props
        return (
            <div>
                <Header />
                <table striped bordered hover size="md">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên mặt hàng</th>
                            <th>Tên khách hàng</th>
                            <th>Số điện thoại</th>
                            <th>Số lượng</th>
                            <th>Giá</th>
                            <th>Ngày đặt hàng</th>
                            <th>Địa chỉ nhận hàng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.items.map((e, index) => (
                            <tr key={index}>
                                <td>{e.id}</td>
                                <td> chưa lấy được </td>
                                <td>{e.userName}</td>
                                <td>{e.phone}</td>
                                <td>{e.quantity}</td>
                                <td> chưa lấy được</td>
                                <td>{e.date}</td>
                                <td>{e.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Footer />
            </div>
        )
    }
}
export default withStyle(styles)(ListOrder)