import React, { Component } from 'react'
import { Row, Col, } from 'reactstrap'
import TextField from '@material-ui/core/TextField'
import { I18n } from 'react-redux-i18n'
class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      erName: false,
      erUser: false,
      erPass: false,
      erPhone: false,
      erRePass: false,
      messName: '',
      messUser: '',
      messPass: '',
      messPhone: '',
      messRePass: '',
    }
  }
  AddUser() {
    const { id, Name, UserName, Password, Phone, rePassword } = this.state
    const {erName, erPass, erPhone, erUser, erRePass} = this.state
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
        // this.props.history.push('/')
  }
  
  render() {
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
                placeholder="Nhập Tên người dùng"
                onChange={(e) => this.setState({
                  Name: e.currentTarget.value
                })}
                error={this.state.erName}
                helperText={this.state.messName}
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
                onChange={(e) => this.setState({
                  UserName: e.currentTarget.value
                })}
                error={this.state.erUser}
                helperText={this.state.messUser}
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
                onChange={(e) => this.setState({
                  Password: e.currentTarget.value
                })}
                error={this.state.erPass}
                helperText={this.state.messPass}
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
                onChange={(e) => this.setState({ rePassword: e.target.value })}
                error={this.state.erRePass}
                helperText={this.state.messRePass}
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
                onChange={(e) => this.setState({
                  Phone: e.currentTarget.value
                })}
                error={this.state.erPhone}
                helperText={this.state.messPhone}
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