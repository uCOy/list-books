import React from 'react';
import { useParams } from 'react-router-dom';
import UIContainer from '../../components/Ui/Container/Container';
import PromotionForm from '../../components/Form/Form';

const PagesBooksForm = () =>{
    const { id } = useParams();

    return(
        <UIContainer>
            <PromotionForm id={id ? Number.parseInt(id, 10) : null} />
        </UIContainer>
    )
}

export default PagesBooksForm;