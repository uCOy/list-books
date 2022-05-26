import React from 'react';
import PromotionCard from '../Books/Books';
import list from './List.module.css'


const PromotionList = ({loading, books}) =>{
    if (loading){
        return <div>carregando...</div>
    }

    return (
        <>
          {books.map( (books) => (
              <PromotionCard books={books} key={books.id} className={list.promototionList}/>
            )
            )
          } 
        </>
    )
}

export default PromotionList
