import React, { Component } from 'react'
import { Row, Col, } from 'reactstrap'
import TextField from '@material-ui/core/TextField'
import { I18n } from 'react-redux-i18n'
class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rePassword: '',
      errors: {}
    }
  }
  AddUser() {
    const { id, url, Name, UserName, Password, Phone, Address } = this.state
    fetch(`http://localhost:3333/Users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "id": id,
        "url": " ",
        "Name": Name,
        "UserName": UserName,
        "Password": Password,
        "Phone": Phone,
        "Address": "Not",
        "Group": 1,
      })
    })
    this.props.history.push('/')
  }
  handleChange = (event) => {
    const { name, value } = event.target
    if (value === "") {
      this.setState({
        errors: {
          ...this.state.errors,
          [name]: "khong duoc dien ten luan"
        }
      })
    } else {
      this.setState({
        errors: {
          ...this.state.errors,
          [name]: ""
        }
      })
    }
    this.setState({ [name]: value })
  }
  render() {
    const { errors } = this.state
    return (
      <div>
        <Col xs="12" md="12">
          <Row style={{ paddingTop: "10px" }}>
            <Col xs={{ size: 10, offset: 1 }} lg={{ size: 10, offset: 1 }}>
              <p
                style={{ textAlign: 'center', fontSize: '20px', paddingTop: '20px' }}
              >TẠO TÀI KHOẢN</p>
            </Col>
            <Col xs={{ size: 10, offset: 1 }} lg={{ size: 10, offset: 1 }}>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                name="Name"
                label="tên người dùng"
                value={this.state.Name}
                error={Boolean(errors.Name)}
                helperText={errors.Name}
                placeholder="Nhập Tên người dùng"
                onChange={this.handleChange}
              />

            </Col>
            <Col xs={{ size: 10, offset: 1 }} lg={{ size: 10, offset: 1 }}>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                label="tên đăng nhập"
                name="UserName"
                value={this.state.UserName}
                placeholder="tên đăng nhập"
                onChange={this.handleChange}
              />
            </Col>
            <Col xs={{ size: 10, offset: 1 }} lg={{ size: 10, offset: 1 }}>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                label="Password"
                value={this.state.Password}
                placeholder="mật khẩu"
                type="Password"
                name="Password"
                onChange={this.handleChange}
              />
            </Col>
            <Col xs={{ size: 10, offset: 1 }} lg={{ size: 10, offset: 1 }}>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                label="repeate password"
                value={this.state.rePassword}
                placeholder="Nhập lại mật khẩu"
                type="password"
                name="rePassword"
                onChange={this.handleChange}
              />
            </Col>
            <Col xs={{ size: 10, offset: 1 }} lg={{ size: 10, offset: 1 }}>
              <TextField
                fullWidth
                variant="outlined"
                margin="normal"
                label="Phone"
                name="Phone"
                value={this.state.Phone}
                placeholder="Số điện thoại"
                onChange={this.handleChange}
              />
            </Col>
            <Col xs={{ size: 2, offset: 5 }} lg={{ size: 2, offset: 5 }} style={{ paddingBottom: "10px", paddingTop: "10px" }}>
              <button type="submit" className="btn btn-primary" onClick={() => this.AddUser()} >Đăng ký</button>
            </Col>
          </Row>
        </Col>
      </div>
    );
  }
}

export default Create;