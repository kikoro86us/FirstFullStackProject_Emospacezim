import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'





class ForAdmin extends Component {
    constructor() {
        super();
        this.state = {
            customers: []
        }
        this.getCustomers = this.getCustomers.bind(this)
        this.getEmails = this.getEmails.bind(this)
    }

    componentWillMount() {
        //axios request for check admin endpoint
        axios.get('/auth/admin').then(res=>{
            console.log('access granted',res)
            if ((typeof res.data !== 'object') || (res.data.emails[0].value!=='kikoro86@us.com')){this.props.history.push('/')}
        })
    }

    getCustomers() {
        axios.get('/api/customers').then(res => {
            console.log(res.data)
            let customers = res.data.map((customer, i) =>
            <div className='allcusdata' key={i}>
                <h1>{customer.name}</h1>
                <h2>{customer.email}</h2>
                <h2>{customer.option}</h2>
                <h2 id='adminpnshow'>{customer.phonenumber}</h2>
            </div>
        )
            this.setState({
                customers: customers
            })
        })
    }

    getEmails() {
        axios.get('/api/customers').then(res => {
            console.log(res.data)
            let emails = res.data.map((customer, i) =>
            <div className='allcusdata' key={i}>
                <h2>{customer.email}</h2>
            </div>
        )
            this.setState({
                customers: emails
            })
        })
    }
    // handleClick() {
    //     axios.get('/api/customers').then(res => {
    //         console.log(res)
    //         this.setState({
    //             customers: res.data
    //         })
    //     })
    // }



    render() {

        const customers = this.state.customers.map((customer, i) =>
            <div className='allcusdata' key={i}>
                <h1>{customer.name}</h1>
                <h2>{customer.email}</h2>
                <h2>{customer.option}</h2>
                <h2 id='adminpnshow'>{customer.phonenumber}</h2>
            </div>
        )

        const emails = this.state.customers.map((customer, i) =>
            <div key={i}>
                <h2>{customer.email}</h2>
            </div>
        )


        return (
            <div className='admincontainer'>


                <div className='adminnav'>
                    <div className='admintitle'>
                        <p>-Admin Page-</p>
                    </div>

                    <div className='buttons'>


                        <div className='allcustomer'>
                            <button onClick={this.getCustomers}> Get All Customer</button>
                        </div>




                        <div className='allemail'>
                            <button onClick={this.getEmails}>Get All Email</button>
                        </div>

                        <div className='searchbyname'>
                            <button>Search By Name</button>
                            <input type="text" placeholder='ex)Matthew Kim' />
                        </div>

                        <div className='searchbyphonenumber'>
                            <button>Search By Phone Number</button>
                            <input type="text" placeholder='ex) 801-000-0000' />
                        </div>

                        <div className='searchbyemail'>
                            <button>Search By Email</button>
                            <input type="text" placeholder='ex) matthew@gmali.com' />
                        </div>

                        <div className='addcustomer'>
                            <button>Add Customer</button>
                            <input type="text" placeholder='ex) name, email, option, phonenumber' />
                        </div>

                        <div className='deletecustomerbyname'>
                            <button>Delete Customer</button>
                            <input type="text" placeholder='ex)Matthew Kim' />
                        </div >
                    </div>

                </div>

                <div className='showdata'>
                    {this.state.customers}
                </div>
            </div>

        );
    }
}

export default withRouter(ForAdmin);