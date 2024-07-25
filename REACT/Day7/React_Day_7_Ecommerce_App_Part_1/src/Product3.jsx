import React from "react";


// spread syntax to access props data
const Product3 = ({ name, img, btn1, btn2 }) => {


    return (
        <>


            <div className="card">
                <div className="card-header">
                    <h1 className='text-center'>{name}</h1>
                </div>
                <div className="card-body text-center">
                    <img src={img} alt="" className='img-fluid' />
                </div>
                <div className="card-footer">
                    <button className='btn btn-danger px-2 fw-bold mx-2'>{btn1} </button>
                    <button className='btn btn-outline-dark px-4 fw-bold mx-2'>{btn2} </button>
                </div>
            </div>

        </>
    )
}

export default Product3;