import React, { Component } from 'react'
import DatvService from '../services/DatvService'

class ListDatvComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                datvs: []
        }
        this.addDatv = this.addDatv.bind(this);
        this.editDatv = this.editDatv.bind(this);
        this.deleteDatv = this.deleteDatv.bind(this);
    }

    deleteDatv(id){
        DatvService.deleteDatv(id).then( res => {
            this.setState({datvs: this.state.datvs.filter(datv => datv.id !== id)});
        });
    }
    viewDatv(id){
        this.props.history.push(`/view-datv/${id}`);
    }
    editDatv(id){
        this.props.history.push(`/add-datv/${id}`);
    }

  componentDidMount(){
        DatvService.getDatvs().then((res) => {
            if(res.data==null)
            {
                this.props.history.push('/add-datv/_add');
            }
            this.setState({ datvs: res.data});
        });
    }

    addDatv(){
        this.props.history.push('/add-datv/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Record List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addDatv}> Add Record</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Name</th>
                                    <th> Mobile</th>
                                    <th> Email</th>
                                    <th> Crud</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.datvs.map(
                                        datv => 
                                        <tr key = {datv.id}>
                                             <td> {datv.name} </td>   
                                             <td> {datv.mobile}</td>
                                             <td> {datv.email}</td>
                                             <td>
                                                 <button onClick={ () => this.editDatv(datv.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteDatv(datv.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewDatv(datv.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListDatvComponent
