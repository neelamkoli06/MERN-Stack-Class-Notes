import React, { useState } from 'react';



const App2 = () => {


    // 1
    // state defined
    const [data, setData] = useState({ name: '', email: '', skill: '', pass: '', doc: null })


    // error state
    const [nameError, setNameError] = useState('');

    // email
    const [emailError, setEmailError] = useState('');



    // Data handling

    const dataHandler = (e) => {


        // console.log(e.target.name)
        // console.log(e.target.value)

        // Destructuring
        const { name, value } = e.target;

        // expand array object
        setData({ ...data, [name]: value })

    }

    // console.log(data);


    // *************************************************


    const GetFormData = (e) => {

        e.preventDefault();

        if (FormValidations()) {
            alert('Congrats Dear!!');
            console.log(data);

        }


    }


    // Form Validations working

    const FormValidations = () => {

        let error = true;
        if (data.name === '') {
            setNameError('Pls enter your name');
            error = false;
        }

        else {
            setNameError('');
        }

        // email
        // regex pattern
        var pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";

        if (data.email === '') {
            setEmailError('Pls enter Your Email');
            error = false;

        }

        else if (data.email.match(pattern)) {
            setEmailError('Valid Email')
        }

        else {
            setEmailError('');
        }


        return error;
    }

    return (
        <>

            <div className="container-fluid p-0 m-0">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className='text-center p-4 mb-4 text-warning bg-dark'>React Form Handling</h1>
                    </div>


                    <form action="" onSubmit={(e) => GetFormData(e)}>

                        <div className="col-md-12">
                            {/* nested grid */}

                            <div className="row fw-bold p-4 bg-dark text-light">

                                <div className="col-md-12 my-3">
                                    <label htmlFor="">Enter Your Name</label>

                                    {/* 2 */}
                                    <input type="text" className='form-control' name="name" id='' value={data.name} onChange={(e) => dataHandler(e)} />
                                    {
                                        nameError ? <p className='text-danger'>{nameError}</p> : null
                                    }
                                </div>

                                <div className="col-md-6 my-3">
                                    <label htmlFor="">Enter Your Email:</label>
                                    <input type="email" className='form-control' name='email' value={data.email} onChange={(e) => dataHandler(e)} />
                                    {
                                        emailError && <p className='text-danger'>{emailError}</p>
                                    }
                                </div>

                                <div className="col-md-6 my-3">
                                    <label htmlFor="">Enter Your Password:</label>
                                    <input type="password" className='form-control' name="pass" id="" value={data.pass} onChange={(e) => dataHandler(e)} />
                                </div>


                                <div className="col-md-12 my-3">
                                    <label htmlFor="">Choose Your Education</label>
                                    <select name="skill" id="" className='form-control' value={data.skill} onChange={(e) => dataHandler(e)} >
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
                                    <input type="file" className='form-control' name="doc" id="file" onChange={(e) => dataHandler(e)} />
                                </div>



                                <div className="col-md-12 text-center">
                                    <button className='btn btn-danger px-5 my-4 fw-bold' onClick={()=>{return window.confirm('Arw You Sure ?')}} >Get A Quote</button>
                                </div>


                            </div>

                        </div>

                    </form>
                </div>
            </div>



        </>
    )
}

export default App2
