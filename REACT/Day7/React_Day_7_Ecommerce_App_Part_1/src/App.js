import React from 'react';
import Products from './Products';
import Product2 from './Product2';
import Product3 from './Product3';

class App extends React.Component {

  constructor() {
    super()

    this.state = ({
      name: 'Pratik',
    })
  }

  render() {


    // Products Data
    const productData = [

      {

        id: 1,
        name: 'Laptop',
        img: 'Assets/apple.webp',
        btn1: "Add To Basket",
        btn2: 'Buy Now'
      },


      {

        id: 2,
        name: 'Fruits Basket',
        img: 'Assets/f1.jpg',
        btn1: "Add To Basket",
        btn2: 'Buy Now'
      },

      {

        id: 3,
        name: 'Fruits Basket',
        img: 'Assets/f2.jpg',
        btn1: "Add To Basket",
        btn2: 'Buy Now'
      },

      {

        id: 4,
        name: 'Fruits',
        img: 'Assets/appl1.jpg',
        btn1: "Add To Basket",
        btn2: 'Buy Now'
      },
      {

        id: 5,
        name: 'Fruits Basket',
        img: 'Assets/f2.jpg',
        btn1: "Add To Basket",
        btn2: 'Buy Now'
      },

      {

        id: 6,
        name: 'Fruits Basket',
        img: 'Assets/f2.jpg',
        btn1: "Add To Basket",
        btn2: 'Buy Now'
      },

    ]





    return (

      <>

        <h1 className='bg-dark p-4 fw-bold mb-4 text-center text-warning'>Ecommerce App</h1>

        <div className="container-fluid">

          <div className="row">
            <div className="col-md-12  text-center">
              <button className='btn btn-danger px-4 my-3 fw-bold'>All Products</button>
              <button className='btn btn-outline-dark px-4 my-3 fw-bold mx-5'>Electronics Products</button>
              <button className='btn btn-info px-4 my-3 fw-bold'>Other Products</button>
            </div>



            {/* ************************************************************************************************************ */}
            {/* <div className="col-md-12">

              nested grid system
              <div className="row">


                Card
                <div className="col-md-3">
                  <Products
                    name="Laptop"
                    img="Assets/apple.webp"
                    btn1="Add To Basket"
                    btn2="Buy Now "
                  />
                </div>


                <div className='col-md-3'>
                  <Product2
                    name="Fruits"
                    img="Assets/f1.jpg"
                    btn1="Add To Basket"
                    btn2="Buy Now "
                  />
                </div>


                <div className="col-md-3">
                  <Product3
                  
                  name="Fruits"
                  img="Assets/f2.jpg"
                  btn1="Add To Basket"
                  btn2="Buy Now "
                  />
                </div>

              </div>
            </div> */}


            {/* *************************************************************************************************** */}



            {/* step 4 */}

            {/* 1 component used multiple time for creating card  using props i.e dynamically change data */}



            {/* 

            <div className="col-md-12">
              <div className="row">

                <div className="col-md-3">

                  <Products
                    name="Laptop"
                    img="Assets/apple.webp"
                    btn1="Add To Basket"
                    btn2="Buy Now "
                  />

                </div>


                <div className="col-md-3">

                  <Products
                    name="Fruits"
                    img="Assets/f1.jpg"
                    btn1="Add To Basket"
                    btn2="Buy Now "
                  />

                </div>


                <div className="col-md-3">

                  <Products
                    name="Fruits"
                    img="Assets/f2.jpg"
                    btn1="Add To Basket"
                    btn2="Buy Now "
                  />

                </div>



                <div className="col-md-3">

                  <Products
                    name="Fruits"
                    img="Assets/appl1.jpg"
                    btn1="Add To Basket"
                    btn2="Buy Now "
                  />

                </div>


              </div>
            </div> */}


            {/* ******************************************************************************** */}

            {/* 5th step */}


            <div className="col-md-12">
              <div className="row">


                {/* ******************************************************************* */}
                {/* <div className="col-md-3">

                  <Products
                    name={productData[1].name}
                    img={productData[1].img}
                    btn1={productData[1].btn1}
                    btn2={productData[1].btn2}
                  />

                </div> */}


                {/* ******************************************************** */}

                {/* Final Code - Using Map Methods */}


                {/* map((val,index, array)=>{ }) */}
                {/* return a new array and iterate array object data */}
                {/* 1 arguments is compulsory */}


{/* *************************************************************************** */}

                {

                  productData.map((val, index, array) => {

                    // console.log(val);
                    return (

                      <div className="col-md-3" key={index || val.id}>

                        <Products

                          name={val.name}
                          img={val.img}
                          btn1={val.btn1}
                          btn2={val.btn2}

                        />
                      </div>
                    )

                  })

                }


{/* ************************************************************************************************* */}


              </div>
            </div>




          </div>
        </div>

      </>
    )
  }
}


export default App;