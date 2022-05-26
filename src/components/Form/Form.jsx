import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import formCss from './Form.module.css';
import UIButton from '../../components/Ui/Button/Button';

//2
const initialValue = {
  title: '',
  url: '',
  image: '',
  price: 0,
}



const PromotionForm = ( {id}) =>{
    // 7
    // Se o values for null
    const [values, setValues] = useState(id ? null: initialValue);
    //2.1
    // const [values, setValues] = useState(initialValue);
    const navigate = useNavigate();

    // const { id } = useParams();
    //5 
    // console.log(id)

    //6
    useEffect(() => {
        if (id) {
          axios.get(`http://localhost:5001/books/${id}`)
            .then((response) => {
              setValues(response.data);
            })
        }
      }, []);
    
    //4
    function onSubmit(ev) {
        ev.preventDefault(); //não execute o comportamento default do form
    
        const method = id ? 'put' : 'post';
        const url = id
          ? `http://localhost:5000/books/${id}`
          : 'http://localhost:5000/books'
    
        axios[method](url, values)
          .then((response) => {
            // history.push('/');
            navigate('/');
          });

        // axios.post('http://localhost:5000/promotions', values)
        //   .then((response) => {
        //     navigate('/');
        //   });

    }
    
      //3 em mudança...
    //   console.log(values)
      function onChange(ev) {
        const { name, value } = ev.target;
        // console.log({name, value})
                               //[name] = title,  
        setValues({ ...values, [name]: value });
      }
    


    return( //1 //label = id
        <div>
        <h1 className={formCss.promotionFormh1}>Promo Show</h1>
        <h2 className={formCss.promotionFormh2}>Nova Promoção</h2>
        {/* 7.1  */}
        {!values
          ? (
            <div>Carregando...</div>
          ) : (
            <form onSubmit={onSubmit}> {/** 4 colocar o onSubmit*/ }
              <div className={formCss.promotionFormGroup}>
                <label htmlFor="title">Título</label>
                 <input id="title" name="title" type="text"  onChange={onChange} value={values.title} /> {/*value={values.title} */}
              </div>
              <div className={formCss.promotionFormGroup}>
                <label htmlFor="url">Link</label>
                <input id="url" name="url" type="text" onChange={onChange} value={values.url}/> {/**value={values.url}  */}
              </div>
              <div className={formCss.promotionFormGroup}>
                <label htmlFor="imageUrl">Imagem (URL)</label>
                <input id="imageUrl" name="image" type="text" onChange={onChange}  value={values.image}/> {/**value={values.imageUrl} */}
              </div>
              <div className={formCss.promotionFormGroup}>
                <label htmlFor="price">Preço</label>
                <input id="price" name="price" type="number" step="any" onChange={onChange}  value={values.price}/> {/**value={values.price} */}
              </div>
              <div className={formCss.promotionFormGroupBtn}>
                <UIButton type="submit" component="button">Salvar</UIButton>
                <UIButton to="/" component={Link} theme="bordered-warning">Cancelar</UIButton>
              </div>
            </form>
           )} 
      </div>    )
}

export default PromotionForm;