import React from 'react';
import {useEffect,useState} from 'react';
import { Button } from 'react-bootstrap';
import UIButton from '../Ui/Button/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Trash } from 'phosphor-react'
import './Books.css';
import api from '../../Services/api';

const ItemContainer =  styled.div`
    align-items: center;
    border-radius: 4px;
    background-color: #ccc;
    height: 140px;
    width: 350px;
    color: #29303b;
    margin-bottom: 4px;
    margin-right: 8px;
    margin-left: 8px;
    padding: 6px;
    flex-direction: column;
    display: inline-block;
`

const TitlePane = styled.div`
     font-weight: bold;
     margin-bottom: 5px;
`

const ItemLink = styled.a`
    text-decoration:none;
`

const PricePane = styled.div`
    margin-bottom:5px;
`

const Thumbnail = styled.img`
     width:auto;
     height:100%;
     border:0;
     vertical-align: middle;
     float: left;
     margin-right: 10px;
`

const ListBooks = ({ books, onClickDeleted }) => {
    return ( 
        <ItemLink>
            <ItemContainer>
                <Thumbnail src={books.image}></Thumbnail>
                <TitlePane>{books.title}</TitlePane>
                <PricePane>R$ {books.price}</PricePane>
                <Button  href={books.url} title="Clique para comprar" className="btn btn-primary">Comprar</Button>
                <UIButton 
                component={Link}
                to={`/edit/${books.id}`}
            >
                Editar
            </UIButton>
            <button type="button"onClick={onClickDeleted} className="promotionCardButtonDelete">
                <Trash size={32} color="#000000" weight="thin"/>
            </button>
            </ItemContainer>
        </ItemLink>
     );
}
 
export default ListBooks;