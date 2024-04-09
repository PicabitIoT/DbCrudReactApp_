import React, { Component } from 'react'
import DatvService from '../services/DatvService'

class ViewDatvComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            datv: {}
        }
    }

    componentDidMount(){
        DatvService.getDatvById(this.state.id).then( res => {
            this.setState({datv: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Record Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label style={{ width: "90px" }}> Name :</label>
                            <div> { this.state.datv.name }</div>
                        </div>
                        <div className = "row">
                            <label style={{ width: "90px" }}> Mobile :</label>
                            <div> { this.state.datv.mobile }</div>
                        </div>
                        <div className = "row">
                            <label style={{ width: "90px" }}> Email :</label>
                            <div> { this.state.datv.email }</div>
                        </div>

                        

                    </div>

                </div>
            </div>
        )
    }
}

export default ViewDatvComponent
