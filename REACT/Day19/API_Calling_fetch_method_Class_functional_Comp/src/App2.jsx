import React, { Component } from 'react'

export default class App2 extends Component {

    constructor() {
        super();


        //2
        this.state = ({

            user: null,

        })
    }



    // API calling 
    componentDidMount() {

        // fetch('https://reqres.in/api/users?page=2')
        fetch('http://localhost:3000/User')
            .then((result) => result.json()
                .then((res) => {
                    console.log(res)

                    this.setState({ user: res })
                }))
    }

    render() {
        return (
            <div>


                <h1 className='bg-dark p-4 text-warning mb-4 text-center'>API Calling in a Statefull Class Component</h1>



                <table className='table table-bordered table-hover table-striped text-center'>
                    <thead>
                        <tr>

                            <th>Id</th>
                            <th>Name</th>
                            <th>Skill</th>
                            <th>Email</th>
                            <th>Emp Role</th>
                        </tr>
                    </thead>


                    <tbody>
                          {

                                   
                              this.state.user &&

                              this.state.user.map((val,index,arr)=>{
                                return(
                                    
                                    <tr key={val.id}>
                                        <td>{val.id}</td>
                                        <td>{val.name}</td>
                                        <td>{val.skill}</td>
                                        <td>{val.Email}</td>
                                        <td>{val.empRole}</td>
                                    </tr>
                                
                                )
                              })

                          }
                    </tbody>

                </table>
            </div>
        )
    }
}
