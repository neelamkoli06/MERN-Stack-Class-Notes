import React, { useEffect, useState } from 'react'

const App = () => {

  //2 state defined
  const [data, setData] = useState([]);



  // API calling
  //1
  useEffect(() => {

    fetch('http://localhost:3000/User')
      .then((result) => result.json()
        .then((res) => {
          console.log(res)

          // state update
          //set data
          setData(res);
        }))

  }, [])


  console.log(data);


  return (
    <div>


      <h1 className='bg-dark p-4 text-warning mb-4 text-center'>API Calling in a Functional Component</h1>


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

            data.map((val, index, arr) => {

              return (
                <tr>
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

export default App
