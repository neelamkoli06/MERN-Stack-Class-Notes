import React, { useState } from 'react'

const App = () => {


  //1 State Defined


  //1 

  const [data, setData] = useState({ name: '', email: '', pass: '', edu: '', doc: null })


  // separate State defined for each
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('');
  const [edu, setEdu] = useState('');

  const [doc, setDoc] = useState(null);


  // **********************************************

  // Synthetic event

  // is a cross browser wrapper object around the browser events

  // Note: Here ‘e’ is a synthetic event, a cross-browser object.
  //  It is made with a wrapper around the actual event of the browser.

  // e.preventDefault()       // prevents all the default behavior by the browser.
  // e.stopPropagation()   // prevents the call to the parent component whenever a child component gets called.



  // **********************************************

  const getName = (e) => {
    // alert()

    // console.log(e)
    // console.log(e.target)

    console.log(e.target.value)


    // state update
    setName(e.target.value)
  }


  // console.log(name)
  // console.log(email)
  // console.log(pass)
  // console.log(edu)
  // console.log(doc)



  // *******************************************************


  // Form Data


  const FormData = (e) => {


    // Prevents by default behavior of our browser

    e.preventDefault()

    alert('Congrats Dear Successfully Submitted !!')



    // console.log(name)
    // console.log(email)
    // console.log(pass)
    // console.log(edu)
    // console.log(doc)

    // Object 

    setData({ name: name, email: email, pass: pass, edu: edu, doc: doc })



    setName('')
    setEmail('')
    setEdu('');
    setPass('')


    // setDoc('');

    document.getElementById('file').value = ""
  }


  console.log(data);


  // *******************************************************
  return (
    <>


      <div className="container-fluid p-0 m-0">
        <div className="row">
          <div className="col-md-12">
            <h1 className='text-center p-4 mb-4 text-warning bg-dark'>React Form Handling</h1>
          </div>


          <form action="" onSubmit={(e) => FormData(e)}>

            <div className="col-md-12">
              {/* nested grid */}

              <div className="row fw-bold p-4 bg-dark text-light">

                <div className="col-md-12 my-3">
                  <label htmlFor="">Enter Your Name</label>

                  {/* 2 */}
                  {/* <input type="text" className='form-control' name="" value={data.name} id="" /> */}
                  <input type="text" className='form-control' name="" value={name} id="" onChange={(e) => getName(e)} />
                </div>

                <div className="col-md-6 my-3">
                  <label htmlFor="">Enter Your Email:</label>
                  <input type="email" className='form-control' value={email} name="" id="" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="col-md-6 my-3">
                  <label htmlFor="">Enter Your Password:</label>
                  <input type="password" className='form-control' value={pass} name="" id="" onChange={((e) => setPass(e.target.value))} />
                </div>


                <div className="col-md-12 my-3">
                  <label htmlFor="">Choose Your Education</label>
                  <select name="" id="" className='form-control' value={edu} onChange={(e) => setEdu(e.target.value)}>
                    <option value="None">Select</option>
                    <option value="BCS/BCA">BCS/BCA</option>
                    <option value="MCS/MCA">MCS/MCA</option>
                    <option value="BE/B-Tech">BE/B-Tech</option>
                    <option value="ME/M-Tech">ME/M-Tech</option>
                    <option value="Other">Other</option>
                  </select>
                </div>


                <div className="col-md-12 my-3">
                  <label htmlFor="">Upload Your Documents</label>

                  {/* fileList object */}

                  {/* Returns a FileList object on a file type input object. */}
                  {/* <input type="file" className='form-control' name="" id="" onChange={(e)=>setDoc(e.target.files)} /> */}
                  <input type="file" className='form-control' name="" id="file" onChange={(e) => setDoc(e.target.files[0].name)} />
                </div>



                <div className="col-md-12 text-center">
                  <button className='btn btn-danger px-5 my-4 fw-bold' onClick={() => { return window.confirm('Are You Sure') }}>Get A Quote</button>
                </div>


              </div>

            </div>

          </form>
        </div>
      </div>





    </>
  )
}

export default App
