import React, { Component } from 'react'
import { Row, Col, } from 'reactstrap'
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';



class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
          rePassword: '',
        }
        this.inputUser = this.inputUser.bind(this)
        this.inputPass = this.inputPass.bind(this)
        this.inputRePassword = this.inputRePassword.bind(this)
        this.inputPhone = this.inputPhone.bind(this)
    }
    inputUser(e) {
        let userName = e.target.value
        this.setState({
          UserName: userName
        })
    }
    inputPass(e) {
        let pass = e.target.value
        this.setState({
          password: pass
        })
    }
    inputRePassword(e){
        let rePass = e.target.value
        this.setState({
            rePassword: rePass
        })
    }
    inputPhone(e){
      let phone = e.target.value
      this.setState({
        Phone: phone
      })
    }
    inputName(e){
      let name = e.target.value
      this.setState({
        Name: name
      })
    }
    AddUser(){
      const {id, url, Name, UserName, Password , Phone} = this.state
      fetch(`http://localhost:3333/Users`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "id": id,
              "url": url,
              "Name": Name,
              "UserName": UserName,
              "Password": Password,
              "Phone": Phone,
              "Group": 1,
            })
        })
      this.props.history.push('/')
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
                  label="tên người dùng"
                  value={this.state.Name}
                  placeholder="Nhập Tên người dùng"
                  onChange={(e) => this.inputName(e)}
                />
              </Col>
              <Col xs={{ size: 10, offset: 1 }} lg={{ size: 10, offset: 1 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="tên đăng nhập"
                  value={this.state.UserName}
                  placeholder="tên đăng nhập"
                  onChange={(e) => this.inputUser(e)}
                />
              </Col>
              <Col xs={{ size: 10, offset: 1 }} lg={{ size: 10, offset: 1 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="password"
                  value={this.state.Password}
                  placeholder="mật khẩu"
                  type="password"
                  onChange={(e) => this.inputPass(e)}
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
                  onChange={(e) => this.inputRePassword(e)}
                />
              </Col>
              <Col xs={{ size: 10, offset: 1 }} lg={{ size: 10, offset: 1 }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  label="Phone"
                  value={this.state.Phone}
                  placeholder="Số điện thoại"
                  onChange={(e) => this.inputPhone(e)}
                />
              </Col>
              {/* <Col xs={{ size: 10, offset: 1 }} lg={{ size: 10, offset: 1 }} style={{paddingTop: '20px'}}>
                <span>Ngày tháng năm sinh</span>
                <Row>
                  <Col xs={{ size: 2, offset: 1 }} lg={{ size: 2, offset: 1 }}>
                    <TextField
                      select
                      fullWidth
                      textAlign="center"
                      label="1"
                      value={this.state.day}
                      onChange={() => this.selectDay()}
                    />
                  </Col>
                  <Col xs={{ size: 3 }} lg={{ size: 3 }}>
                    <TextField
                      select
                      fullWidth
                      textAlign="center"
                      value={this.state.month}
                      label="tháng 1"
                    />
                  </Col>
                  <Col xs={{ size: 3 }} lg={{ size: 3 }}>
                    <TextField
                      select
                      fullWidth
                      textAlign="center"
                      value={this.state.year}
                      label="1990"
                    />
                  </Col>
                </Row>
              </Col>
              <Col xs={{ size: 10, offset: 1 }} lg={{ size: 10, offset: 1 }} style={{paddingTop: "20px"}}>
                <span>Giới tính</span>
                <br />
                <span>Nam</span>
                <Radio
                  checked={this.state.checkedNam}
                  onChange={() => this.setChecked()}
                  value={this.state.checkedNam}
                  name="radio-button-demo"
                />
                <span>Nữ</span>
                <Radio
                  checked={this.state.checkedNu}
                  onChange={() => this.setState({checkedNu: !this.state.checkedNu})}
                  value={this.state.checkedNu}
                  name="radio-button-demo"
                />
              </Col> */}
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