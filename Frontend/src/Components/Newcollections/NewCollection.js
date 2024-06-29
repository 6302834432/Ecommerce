import React, { useEffect, useState } from 'react'
import './NewCollection.css'
import new_collections from '../../Assets/new_collections'
import Item from '../../item/item.js'
const NewCollection = () => {
    // const [new_collections, setNewcollections] = useState([])
    // useEffect(() => {
    //     fetch ('http://localhost:4000/newcollection')
    //     .then ((res)=>res.json()).then((data)=>setNewcollections(data))
    // },[])
    return (
        <div className='newcollection'>
            <h1>
                new collections
            </h1>
            <hr />

            <div className='newcollection-item'>
                {
                    new_collections.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })
                }
            </div>


        </div>
    )
}

export default NewCollection