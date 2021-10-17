import React, { Component } from "react";
import { Container, Button,Row,Col, Form, FormGroup, InputGroup,Modal, ModalHeader, ModalBody, ModalFooter, InputGroupAddon, InputGroupText, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';
import Select, { components } from 'react-select';
import Switch from "react-switch";
import { FaCalendar } from 'react-icons/fa';

const { Option } = components;

const IconOption = props => (
  <Option {...props}>
    <img
      src={props.data.flag}
      style={{ width: 36 }}
      alt={props.data.value}
    /> &nbsp;
    {props.data.value}
  </Option>
);

const CountryLocation = props => (
  <Option {...props}>
    {props.data.value}
  </Option>
);
class HomeContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            countries: [],
            codeArea:0,
            negara:'',
            switched1: false,
            switched2: false,
            switched3: false,
            isOpen: false,
            allowd: false,
            last_name: '',
            first_name: '',
            mobile_phone_number: '',
            address: '',
            country: '',
            province: '',
            email: '',
            date: '',
            tahun: '',
            bulan: '',
        };

        this.handleChangeSwitch1 = this.handleChangeSwitch1.bind(this);
        this.handleChangeSwitch2 = this.handleChangeSwitch2.bind(this);
        this.handleChangeSwitch3 = this.handleChangeSwitch3.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.allowCreate = this.allowCreate.bind(this);
        this.checkAllow = this.checkAllow.bind(this);
    }

    handleChangeSwitch1(s) {
        this.setState({ switched1:s });
    }
    handleChangeSwitch2(s) {
        this.setState({ switched2:s });
    }
    handleChangeSwitch3(s) {
        this.setState({ switched3:s });
    }
    last_name (e) {this.setState({ last_name: e.target.value })}
    first_name (e) {this.setState({ first_name: e.target.value })}
    mobile_phone_number (e) {this.setState({ mobile_phone_number: e.target.value })}
    address (e) {this.setState({ address: e.target.value })}
    bulan (e) {this.setState({ bulan: e.target.value })}
    tahun (e) {this.setState({ tahun: e.target.value })}
    email (e) {this.setState({ email: e.target.value })}
    country (e) {this.setState({ country: e.target.value })}
    province (e) {this.setState({ province: e.target.value })}
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });
    allowCreate = () =>
        this.setState({
            allowd: !this.state.allowd,
          });

    checkAllow(){
        if(this.state.allowd === true){
            this.openModal();
        }else{
            alert('Mohon check i have ....');
        }
    }

    handleChange(e){
        this.setState({codeArea:e.codeArea, negara:e.value})
       }
    handleChangeCountry(e){
        this.setState({country:e.value})
       }
    handleChangeDate(e){
        this.setState({date:e.value})
       }
    componentDidMount() {
        axios.get(`https://restcountries.com/v2/all`)
          .then(res => {

            this.setState({ countries : res.data });
          });


    }
  render() {
    let options = this.state.countries.map((countriesRes,i) => ({
        "value" : countriesRes.name,
        "label" : countriesRes.name,
        "flag" : countriesRes.flag,
        "codeArea" : "+"+countriesRes.callingCodes[0]
    }));
    const dateOptions = [
        {value: "1",label: "01"},
        {value: "2",label: "02"},
        {value: "3",label: "03"},
        {value: "4",label: "04"},
        {value: "5",label: "05"},
        {value: "6",label: "06"},
        {value: "7",label: "07"},
        {value: "8",label: "08"},
        {value: "9",label: "09"},
        {value: "10",label: "10"},
        {value: "11",label: "11"},
        {value: "12",label: "12"},
        {value: "13",label: "13"},
        {value: "14",label: "14"},
        {value: "15",label: "15"},
        {value: "16",label: "16"},
        {value: "17",label: "17"},
        {value: "18",label: "18"},
        {value: "19",label: "19"},
        {value: "20",label: "20"},
        {value: "21",label: "21"},
        {value: "22",label: "22"},
        {value: "23",label: "23"},
        {value: "24",label: "24"},
        {value: "25",label: "25"},
        {value: "26",label: "26"},
        {value: "27",label: "27"},
        {value: "28",label: "28"},
        {value: "29",label: "29"},
        {value: "30",label: "30"},
      ];
    return (
      <div className="HomePage">
          <Container>
                <div className="HomePageHeader">
                    <h3>Create new account</h3>
                </div>
                <div className="HomePageBody">
                    <Form>
                        <FormGroup>
                            <Label for="titleLabel">Title</Label> <br />
                            <Input type="checkbox" className="parentFirst" /> Mrs
                            <Input type="checkbox" /> Ms
                            <Input type="checkbox" /> Mdm
                            <Input type="checkbox" /> Mr
                            <Input type="checkbox" /> Dr
                        </FormGroup>
                        <Row>
                            <Col xs="6">
                                <FormGroup>
                                    <Label for="exampleEmail">Last Name <span>*</span></Label>
                                    <Input type="text" name="last_name" id="last_name" onChange={(e) => {this.last_name(e)}} placeholder="Last Name" />
                                </FormGroup>
                            </Col>
                            <Col xs="6">
                                <FormGroup>
                                    <Label for="exampleEmail">First Name <span>*</span></Label>
                                    <Input type="text" name="first_name" id="first_name" onChange={(e) => {this.first_name(e)}} placeholder="First Name" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <Label for="exampleEmail">Mobile Phone Number <span>*</span></Label>
                            <Row>
                                <Col xs="3">
                                    <Select
                                        id="country"
                                        name="user[countries]"
                                        options={options}
                                        components={{ Option: IconOption }}
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </Col>
                                <Col xs="3">
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>{this.state.codeArea}</InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="text" name="first_name" id="first_name" onChange={(e) => {this.mobile_phone_number(e)}} placeholder="Mobile Phone Number" />
                                    </InputGroup>
                                </Col>
                            </Row>
                        </FormGroup>
                        <Row>
                            <Col xs="12">
                                <h4>Address</h4>
                                <FormGroup>
                                    <Label for="exampleEmail">Address <span>*</span></Label>
                                    <Input type="text" name="address" id="address" onChange={(e) => {this.address(e)}} placeholder="Address" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="6">
                                <FormGroup>
                                    <Label for="exampleEmail">Country/Location <span>*</span></Label>
                                    <Select
                                        id="country"
                                        name="user[countries]"
                                        options={options}
                                        components={{ Option: CountryLocation }}
                                        onChange={this.handleChangeCountry.bind(this)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs="6">
                                <FormGroup>
                                    <Label for="exampleEmail">Province/District <span>*</span></Label>
                                    <Input type="text" name="first_name" id="first_name" onChange={(e) => {this.province(e)}} placeholder="Province/District" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <FormGroup>
                            <h4>Contacts</h4>
                            <Row>
                                <Col xs="6">
                                    <FormGroup>
                                        <Label for="exampleEmail">Email Address <span>*</span></Label>
                                        <Input type="text" name="email_address" onChange={(e) => {this.email(e)}} id="email_address" placeholder="Email Address" />
                                    </FormGroup>
                                </Col>
                                <Col xs="2">
                                    <FormGroup>
                                        <Label for="exampleEmail">Date of birth <span>*</span></Label>
                                        <Select
                                            id="date_of_birth"
                                            name="date_of_birth"
                                            options={dateOptions}
                                            onChange={this.handleChangeDate.bind(this)}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col xs="2">
                                    <Label for="exampleEmail">Month <span>*</span></Label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText className="faCalendar"><FaCalendar /></InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="text" name="month" id="month" onChange={(e) => {this.bulan(e)}} placeholder="MM" className="monthTxt" />
                                    </InputGroup>
                                </Col>
                                <Col xs="2">
                                <Label for="exampleEmail">Year <span>*</span></Label>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText className="faCalendar"><FaCalendar /></InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="text" name="year" id="year" placeholder="YYYY" onChange={(e) => {this.tahun(e)}} className="monthTxt" />
                                    </InputGroup>
                                </Col>
                            </Row>
                        </FormGroup>
                        <Row>
                            <Col xs="12" className="privacyDesc">
                                <h4>Standart Privacy Note</h4>
                                <p>
                                    I warrant that the above information is true and correct. I understant that failure to answer all questions listed in this application form may<br />
                                    prevent L'OCCITANE from processing my application; and L'OCCITANE may refuse to accept this application in the right of my individual <br />
                                    circumstance.<br /><br />

                                    I understand that the information collected will be used and retained by L'OCCITANE for the purpose of (i) my application of membership <br />
                                    program of L'OCCITANE (ii) providing member-exclusive services; and (iii) the daily management operation and maintenance of membership <br />
                                    account at L'OCCITANE. <br /><br />

                                    I understand that it is necessary for me to provide L'OCCITANE with data in connection with the privilege. Failure to provide such data may result<br />
                                    in L'OCCITANE stores or official website. <br /><br />

                                    L'OCCITANE reserves the right to change any of the terms and conditions without prior notice.Changes will be posted pn signage placed at<br />
                                    L'OCCITANE. To choose whether to receive any promotional informationsent by L'OCCITANE, please tick the box below. <br />
                                    <br />
                                    I want to receive information or communication from L'OCCITANE.


                                </p>
                            </Col>
                        </Row>
                        <Row className="switchSection">
                            <Col xs="4">
                                SMS & Mobile Call <Switch onChange={this.handleChangeSwitch1} checked={this.state.switched1} />
                            </Col>
                            <Col xs="4">
                                Emailing <Switch onChange={this.handleChangeSwitch2} checked={this.state.switched2} />
                            </Col>
                            <Col xs="4">
                                Mailing <Switch onChange={this.handleChangeSwitch3} checked={this.state.switched3} />
                            </Col>

                        </Row>

                        <Row>
                            <Col xs="12">
                                <Label><Input type="checkbox" onClick={this.allowCreate} className="parentFirst" /> I have read and understood the above terms and conditions and hereby agree that i will be bounded by these conditions and policies once i have submitted this application form.</Label>
                            </Col>
                        </Row>
                        <div className="btnSubmitSection">
                            <Button className="btnCreate" onClick={this.checkAllow}>CREATE CUSTOMER</Button>
                        </div>
                        <Modal isOpen={this.state.isOpen} toggle={this.toggleModal}>
                            <ModalHeader toggle={this.toggleModal}>Detail Account</ModalHeader>
                            <ModalBody>
                                <b>Title :</b> <br />
                                <b>Last Name : </b>{this.state.last_name}  <br />
                                <b>First Name :</b>{this.state.first_name}  <br />
                                <b>Mobile Phone Number :</b> {this.state.codeArea} {this.state.mobile_phone_number} {this.state.negara} <br />
                                <b>Address :</b> {this.state.address} <br />
                                <b>Country / Location :</b>  {this.state.country} <br />
                                <b>Province / District :</b>  {this.state.province}<br />
                                <b>Email Address :</b>  {this.state.email}<br />
                                <b>Birth :</b> {this.state.date} {this.state.bulan} {this.state.tahun} <br />
                                <b>SMS & Mobile Call :</b> { this.state.switched1 === true ? (<p>Enable</p>) : (<p>Disable</p>)}
                                <b>Emailing :</b> { this.state.switched2 === true ? (<p>Enable</p>) : (<p>Disable</p>)}
                                <b>Mailing :</b> { this.state.switched3 === true ? (<p>Enable</p>) : (<p>Disable</p>)}

                            </ModalBody>
                            <ModalFooter>

                            <Button color="secondary" onClick={this.closeModal }>Cancel</Button>
                            </ModalFooter>
                        </Modal>

                    </Form>
                </div>
          </Container>
      </div>
    );
  }
}

export default HomeContainer;
