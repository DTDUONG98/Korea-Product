import React, { Component } from 'react'
import { Row, Col, } from 'reactstrap'
import TextField from '@material-ui/core/TextField'
import { I18n } from 'react-redux-i18n'
class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rePassword: '',
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
    const { id, url, Name, UserName, Password, Phone, Address, rePassword } = this.state
    const {erName, erPass, erPhone, erUser, erRePass} = this.state
    if (Password !== rePassword) {
      this.setState({
        erRePass: true,
        messRePass: I18n.t("Mật khẩu không khớp")
      })
    } else {
      this.setState({
        erRePass: false,
        messRePass: '',
      })
      if(erName == false && erPass == false && erPhone == false && erUser == false && erRePass == false){
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
    }
  }
  checkName = (event) => {
    let name = event.target.value
    if (name.length == 0) {
      this.setState({
        erName: true,
        messName: I18n.t("Vui lòng nhập đầy đủ thông tin"),
      })
    } else {
      this.setState({
        erName: false,
        messName: '',
      })
    }
    if (this.state.erName == false) {
      this.setState({
        Name: name
      })
    }
  }
  checkUser = (event) => {
    let user = event.target.value
    if (user.length == 0) {
      this.setState({
        erUser: true,
        messUser: I18n.t("Vui lòng nhập đầy đủ thông tin")
      })
    } else {
      this.setState({
        erUser: false,
        messUser: '',
      })
      if (user.length > 50) {
        this.setState({
          erUser: true,
          messUser: I18n.t("Vui lòng nhập không quá 50 ký tự")
        })
      } else {
        this.setState({
          erUser: false
        })
      }
    }
    if (this.state.erUser == false) {
      this.setState({
        UserName: user
      })
    }
  }
  checkPass = (event) => {
    let pass = event.target.value
    if (pass.length == 0) {
      this.setState({
        erPass: true,
        messPass: I18n.t("Vui lòng nhập đầy đủ thông tin")
      })
    } else {
      this.setState({
        erPass: false,
        messPass: '',
      })
    }
    if (this.state.erPass == false) {
      this.setState({
        Password: pass
      })
    }
  }
  checkPhone = (event) => {
    let phone = event.target.value
    const re = /^[0-9\b]+$/ // check value only number
    if (phone === '' || re.test(phone)) {
      this.setState({
        Phone: phone
      })
    }
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
                onChange={this.checkName}
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
                onChange={this.checkUser}
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
                onChange={this.checkPass}
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
                onChange={this.checkPhone}
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