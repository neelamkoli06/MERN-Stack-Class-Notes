import React from 'react';
import Products from './Products';

export default class App extends React.Component {


  constructor() {
    super();

    this.state = ({

      id: 1,


      electData: true,
      otherData: true,
    })

  }
  // ******************************************************************************************


  Electronic_Handler = () => {


    // alert()

    this.setState({

      electData:true,
      otherData:false,

    })
  }


  // **********************************

  OtherProd_handler=()=>{
    // alert()

    this.setState({
      otherData:true,
      electData:false,
    })
  }

  // ********************************************
  handleAllProd=()=>{

    this.setState({
      otherData:true,
      electData:true,
    })
  }

  render() {

    // Products Data
    const OtherProducts = [



      {

        id: 1,
        name: 'Fruits Basket',
        img: 'Assets/f1.jpg',
        btn1: "Add To Basket",
        btn2: 'Buy Now'
      },

      {

        id: 2,
        name: 'Fruits Basket',
        img: 'Assets/f2.jpg',
        btn1: "Add To Basket",
        btn2: 'Buy Now'
      },

      {

        id: 3,
        name: 'Fruits',
        img: 'Assets/appl1.jpg',
        btn1: "Add To Basket",
        btn2: 'Buy Now'
      },
      {

        id: 4,
        name: 'Fruits Basket',
        img: 'Assets/f2.jpg',
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
        name: 'Teddy',
        img: 'Assets/teddy.jpg',
        btn1: "Add To Basket",
        btn2: 'Buy Now'
      },

    ]


    // *************************
    const Electronics_Products = [

      {

        id: 1,
        name: 'Iphone',
        img: 'Assets/apple.webp',
        btn1: "Add To Basket",
        btn2: 'Buy Now'
      },


      {

        id: 2,
        name: 'Oppo Enco',
        img: 'Assets/image.png',
        btn1: "Add To Basket",
        btn2: 'Buy Now'
      },


    ]



    return (

      <>

        <h1 className='bg-dark text-center bg-dark fw-bold p-3 mb-3 text-warning'>Ecommcerce App</h1>


        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center">

              <button className='btn btn-danger px-4 my-3 fw-bold' onClick={()=>this.handleAllProd()}>All Products</button>
              <button className='btn btn-outline-dark px-4 my-3 fw-bold mx-5' onClick={() => this.Electronic_Handler()}>Electronics Products</button>
              <button className='btn btn-info px-4 my-3 fw-bold' onClick={()=>this.OtherProd_handler()}>Other Products</button>

            </div>


            <div className="col-md-12">

              {/* nested grid */}
              <div className="row">


                {


                  this.state.otherData ?

                    OtherProducts.map((val, index) => {
                      return (
                        <div className="col-md-3 mt-3" key={index}>
                          <Products

                            name={val.name}
                            img={val.img}
                            btn1={val.btn1}
                            btn2={val.btn2}
                          />


                        </div>
                      )
                    }) : null

                }


                {/* ******************************************************************** */}


                {/* Iterate Eletrronics Data */}

                {


                  this.state.electData &&

                  Electronics_Products.map((val, index) => {
                    return (
                      <div className='col-md-3 mt-3' key={index}>

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


              </div>
            </div>
          </div>
        </div>





      </>
    )

  }
}