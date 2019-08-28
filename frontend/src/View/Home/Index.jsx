import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Col, Row } from 'reactstrap'
import Footer from '../Component/Footer'
import TabsHome from '../Component/TabsHome'
import Header from '../Component/Header'
import Item from '../Component/Item'
import Sli from '../Component/Slider'

const style = theme => ({
    header: {
        background: "url(./background/homebgr.jpg)",
        position: 'relative',
        backgroundSize: 'cover',
        height: '600px',
        backgroundAttachment: 'fixed'
    },
    cosmetics: {
        background: "url(./background/stylesbgr.jpg)",
        position: 'relative',
        backgroundSize: 'cover',
        height: '200px',
        backgroundAttachment: 'fixed'
    },
    helthyFood: {
        background: "url(./background/tpcnbgr.jpg)",
        position: 'relative',
        backgroundSize: 'cover',
        height: '200px',
        backgroundAttachment: 'fixed'
    }
})
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: 4,
            Cosmetics: [],
            HelthyFood: [],
            items: [],
        }
    }
    Home() {
        this.props.history.push('/')
    }
    HelthyFood() {
        this.props.history.push('/HelthyFood/02')
    }
    Cosmetics() {
        this.props.history.push('/Cosmetics/01')
    }
    Signin() {
        this.props.history.push('/login/11')
    }
    SignUp() {
        this.props.history.push('/Create/12')
    }
    Details(e) {
        let name = e.currentTarget.value
        this.props.history.push(`/Details/${name}`)
    }
    Bills(e) { // Bill mua một sản phẩm khi onClick vào sản phẩm đó
        let soluong = 1
        let name = e.currentTarget.value
        let title = name + "-" + soluong
        this.props.history.push(`/Bills/${title}`)
    }
    // để chạy db.json/database :  json-server --watch db.json --port 3333
    // Khai báo data Products ở file datanbase/db.json
    componentDidMount() {
        fetch(`http://localhost:3333/Products`)
            // We get the API response and receive data in JSON format...
            .then(response => response.json())
            // ...then we update the users state
            .then(data => {
                let Data = []
                let DataCosmetics = []
                let DataHelthyFood = []
                data.map((e) => {
                    if (e.status == "New") {
                        Data.push(e)
                    }
                    if (e.type == "Cosmetics") {
                        DataCosmetics.push(e)
                    }
                    if (e.type !== "Cosmetics") {
                        DataHelthyFood.push(e)
                    }
                })
                this.setState({
                    items: Data,
                    Cosmetics: DataCosmetics,
                    HelthyFood: DataHelthyFood,
                })
            })
            // Catch any errors we hit and update the app
            .catch(error => console.log('error ', error));
        // console.log('result ', result)
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                <Header
                    link={this.props}
                />
                <Col xs="12" md="12" className={classes.header}>
                    <Row>
                        <Col xs="12" md="12" style={{
                            textAlign: 'center',
                            fontSize: '40px',
                            marginTop: '50px',
                            color: 'yellow',
                        }}>
                            Các Sản Phẩm Mới
                        </Col>
                        <Col xs="12" md="12">
                            <Sli
                                data={this.state.items}
                                link={this.props}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col xs="12" md="12" style={{
                    marginTop: '30px',
                    marginBottom: '20px'
                }}>
                    <TabsHome 
                        data = {this.state.Cosmetics}
                    />
                </Col>
                <Col xs="12" md="12" className={classes.cosmetics}>
                    <Row>
                        <Col xs="12" md="12" style={{
                            textAlign: 'center',
                            fontSize: '40px',
                            marginTop: '20px',
                            color: 'red'
                        }}>
                            Mỹ Phẩm
                        </Col>
                    </Row>
                </Col>
                <Col xs="12" md="12">
                    <Item
                        data={this.state.Cosmetics}
                        visible={this.state.visible}
                        link={this.props}
                    />
                </Col>
                <Col xs="12" md="12" className={classes.helthyFood}>
                    <Row>
                        <Col xs="12" md="12" style={{
                            textAlign: 'center',
                            fontSize: '40px',
                            marginTop: '50px',
                        }}>
                            <p>Thực Phẩn Chức Năng</p>
                        </Col>
                    </Row>
                </Col>
                <Col xs="12" md="12">
                    <Item
                        data={this.state.HelthyFood}
                        visible={this.state.visible}
                        link={this.props}
                    />
                </Col>
                <Footer />
            </div>
        )
    }
}
export default withStyles(style)(Home);