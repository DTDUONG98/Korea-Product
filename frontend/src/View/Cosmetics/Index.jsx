import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import { Col, Row } from 'reactstrap'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline'
import { IconButton, Icon, Tooltip, Button } from '@material-ui/core'
import Footer from '../Component/Footer'
import Item from '../Component/Item'
import Header from '../Component/Header'
import Sli from '../Component/Slider'

const style = theme => ({
    header: {
        background: "url(/background/Cosmeticsbgr.png)",
        position: 'relative',
        backgroundSize: 'cover',
        height: '550px',
        backgroundAttachment: 'fixed',
        marginTop: '-40px'
    },
    lipstick: {
        padding: '20px'
    },
})
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            dataSale: [],
            visible: 8,
            hidden: false,
        }
    }

    Home() {
        this.props.history.push('/')
    }
    Details(e) {
        let name = e.currentTarget.value // Tên sản phẩm bạn muốn xem chi tiết
        this.props.history.push(`/Details/${name}`)
    }
    HelthyFood() {
        this.props.history.push('/HelthyFood/02')
    }
    AddCosmetics() {
        this.props.history.push('/CreateCosmetics/03')
    }
    Bills(e) {
        let soluong = 1
        let name = e.currentTarget.value
        let title = name + "-" + soluong
        this.props.history.push(`/Bills/${title}`)
    }
    componentDidMount() {
        fetch(`http://localhost:3333/Products`)
            .then(response => response.json())
            .then((data) => {
                let DataSale = []
                let arrData = []
                data.map((e) => {
                    if (e.type == "Cosmetics") {
                        arrData.push(e)
                        if (e.status == "New") {
                            DataSale.push(e)
                        }
                    }
                })
                this.setState({ items: arrData, dataSale: DataSale })
            })
            .catch(error => console.log('error ', error));
    }
    render() {
        const { classes } = this.props
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
                            marginTop: '30px',
                            color: 'yellow'
                        }}>
                            Những Sản Phẩm Giảm Giá
                        </Col>
                        <Col xs="12" md="12">
                            <Sli
                                data={this.state.dataSale}
                                link={this.props}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col xs={{ size: 1, offset: 11 }} md={{ size: 1, offset: 11 }} style={{ fontSize: '30px', marginTop: '20px' }}>
                    <Tooltip title="Create New Product" key="create">
                        <IconButton hidden={this.state.hidden} onClick={() => this.AddCosmetics()}>
                            <AddCircleOutlineIcon style={{ fontSize: '30px' }} />
                        </IconButton>
                    </Tooltip>
                </Col>
                <Col xs="12" md="12" className={classes.lipstick}>
                    <Item
                        data={this.state.items}
                        visible={this.state.visible}
                        link={this.props}
                    />
                </Col>
                <Col xs="12" md="12">
                    <Row>
                        <Col xs={{ size: 4, offset: 4 }} md={{ size: 4, offset: 4 }} style={{ textAlign: 'center' }}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                value="4"
                                onClick={(e) => this.setState({
                                    visible: parseInt(this.state.visible) + parseInt(e.currentTarget.value)
                                })}
                            >
                                Xem Thêm
                                </Button>
                        </Col>
                    </Row>
                </Col>
                <Footer />
            </div>
        )
    }
}
export default withStyles(style)(Index);