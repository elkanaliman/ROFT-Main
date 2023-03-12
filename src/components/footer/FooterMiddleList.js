import React from 'react'

const FooterMiddleList = ({title, listItem}) => {
    console.log(listItem);
  return (
    <div>
           <h3 className='text-[#fcfbfd] font-bold py-10 mb-3'>{title}</h3>
            <ul className='flex flex-col gap-2 font-bodyFont'>

                {
                    listItem.map((item) =>item.listData.map((data,i) =>(
                        <li key={i} className='footerLink'>{data}</li>
                    )))
                }
              
            </ul>
           </div>
  )
}

export default FooterMiddleList