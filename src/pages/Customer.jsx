import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective,
  Page, Selection , Sort, Edit, Inject, Toolbar, Filter} from '@syncfusion/ej2-react-grids';

import {customersData, customersGrid} from '../data/dummy'
import {Header} from '../components'

function Customer() {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl"'>
    <Header category="Page" title="Customers"/>

    <GridComponent
  
    dataSource={customersData}
    allowPaging
    allowSorting
    toolbar={['Delete']}
    editSettings={{allowDeleting:true, allowEditing:true}}
    width="auto"


 
    
    >
      <ColumnsDirective>
        {
          customersGrid.map((item, index)=>(
            < ColumnDirective key={index} {...item} />
          ))
        }
      </ColumnsDirective>
      <Inject services={[Page, Toolbar, Sort, Edit, Filter]}/>
    </GridComponent>
  </div>
  )
}

export default Customer