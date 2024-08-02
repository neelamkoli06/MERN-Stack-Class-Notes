import React from 'react'
import A from './A'

const App = () => {
  return (
    <>

      {/* App Component */}


      {/* prop drilling Process */}
      {/* App->A->B->C->D */}

      {/* props- to pass data from one component to another compoent dynamically */}
      <A empId={123} empRole="Software Developer" />


      {/* Solution- 
      
       small scale Application-contextAPI- useContextHook */}

      {/* large scale application- Redux */}



      {/* *************************************************************** */}

      
     

    </>
  )
}

export default App
