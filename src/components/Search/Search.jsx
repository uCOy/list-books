import React from 'react';
import { useEffect,useState } from 'react';
import SearchCSS from './Search.module.css';
import api from '../../Services/api';
import { Link } from 'react-router-dom';
import UIButton from '../Ui/Button/Button';
import Books from '../Books/Books';

const BooksSearch = () => {

    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');
    const [onDelete, setonDelete] = useState(null);

    useEffect( () => {
    const params = {};
      if (search) {
        params.title_like = search;
      }
    api.get("/books", {params})
    .then((response) => {
      // console.log(response.data);
      setBooks(response.data);
     }
    );

}, [search,onDelete] );

const handDelete = async (id) => {
  try{
   await api.delete(`/books/${id}`);
   setonDelete(id);
  }catch (error){
    console.log(error);
  }}

    return ( 
        <>
        <header className={SearchCSS.PromotionSearchHeader}>
          <h1>PROMOÇÃO DE LIVROS</h1>
          <UIButton
          component={Link} 
          to="/create" 
          theme="contained-success"
          >
          Nova Promoção
          </UIButton>
        </header>
        <input type="search" 
        className={SearchCSS.PromotionSearchInput}
        placeholder="Buscar"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
        />
        {books.map((books) =>(
        <Books books={books} key={books.id} onClickDeleted={()=> handDelete(books.id)} />
        )
        )
      }
      </>
     );
}
 
export default BooksSearch;