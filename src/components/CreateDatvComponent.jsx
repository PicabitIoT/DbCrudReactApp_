import React, { Component } from 'react'
import DatvService from '../services/DatvService';

class CreateDatvComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            id: this.props.match.params.id,
            name: '',
            mobile: '',
            email: '',
            errorMessage: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeMobileHandler = this.changeMobileHandler.bind(this);
        this.saveOrUpdateDatv = this.saveOrUpdateDatv.bind(this);
    }

    componentDidMount() {
       
        if (this.state.id === '_add') {
            return
        } else {
            DatvService.getDatvById(this.state.id).then((res) => {
                let datv = res.data;
                this.setState({
                    name: datv.name,
                    mobile: datv.mobile,
                    email: datv.email
                });
            });
        }
    }
    
    saveOrUpdateDatv = (e) => {
        e.preventDefault();
        
        let datv = { name: this.state.name, 
            mobile: this.state.mobile, email: this.state.email };
        console.log('datv => ' + JSON.stringify(datv));
     
        if (this.state.id === '_add') {
            DatvService.createDatv(datv).then(res => {
                this.props.history.push('/datvs');
            },err => this.setState({errorMessage: err.message}));
        } else {
            DatvService.updateDatv(datv, this.state.id).then(res => {
                this.props.history.push('/datvs');
            },err => this.setState({errorMessage: err.message}));
        }
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }

    changeMobileHandler = (event) => {
        this.setState({ mobile: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    cancel() {
        this.props.history.push('/datvs');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Record</h3>
        } else {
            return <h3 className="text-center">Update Record</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Name: </label>
                                        <input placeholder="name" name="name" classname="form-control"
                                            value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Mobile: </label>
                                        <input placeholder="mobile" name="mobile" className="form-control"
                                            value={this.state.mobile} onChange={this.changeMobileHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Email: </label>
                                        <input placeholder="email" name="email" className="form-control"
                                            value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateDatv}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                    
                                    { this.state.errorMessage &&
                                    <h5 className="alert alert-danger"> 
                                    { this.state.errorMessage } </h5> }
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateDatvComponent
