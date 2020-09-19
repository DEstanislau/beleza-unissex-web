import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { createProductSucess } from '~/store/modules/user/actions';

import api from '~/services/api';

import EmptyImage from '~/assets/emptyProduct.svg';
import { Input, Form } from '@rocketseat/unform';
import {
  Container,
  InputArea,
  Bottom,
  ContentProducts,
  List,
  ContentList,
  ImageEmpty,
  TextEmpty,
} from './styles';

export default function Products() {
  const provider_id = useSelector((state) => state.user.profile.id);
  const [products, setProducts] = useState([]);
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    function load() {}
  }, [products]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      setProducts(response.data);
      setFlag(true);
    }

    loadProducts();
  }, [flag]);

  function handleSubmit({ name_product, price }) {
    dispatch(createProductSucess(provider_id, name_product, price));

    document.querySelector('input[name="name_product"]').value = '';
    document.querySelector('input[name="price"]').value = '';
  }

  return (
    <Container>
      <InputArea>
        <button className="att" type="submit">
          Mudar Flag
        </button>
        <Form onSubmit={handleSubmit}>
          <div className="row">
            <Input name="name_product" placeholder="Digite o Nome do Serviço" />
            <Input style={{ width: 100 }} name="price" placeholder="Preço" />
          </div>
          <Bottom>
            <div>
              <button className="att" type="submit">
                Adicionar Serviço
              </button>
            </div>
          </Bottom>
        </Form>
      </InputArea>
      <h1 style={{ marginTop: 20 }}>Quadro de Serviços</h1>
      <ContentProducts>
        <List>
          {Object.entries(products).length >= 1 ? (
            <>
              {products.map((product) => (
                <ContentList key={product.id}>
                  <div className="left">
                    <strong>{product.name_product} </strong>
                  </div>
                  <strong>R${product.price.toFixed(2)} </strong>
                </ContentList>
              ))}
            </>
          ) : (
            <div
              style={{
                width: 800,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              <div>
                <ImageEmpty src={EmptyImage} alt="Nenhum Serviço Adicionado" />
              </div>
              <TextEmpty>
                <h1 style={{ marginLeft: 150, fontSize: 40 }}>
                  {' '}
                  Vamos Começar Adicionando seus Serviços?{' '}
                </h1>
              </TextEmpty>
            </div>
          )}
        </List>
      </ContentProducts>
    </Container>
  );
}

{
  /* 
          
           <ContentList key={product.id}>
              <div className="left">
                <strong>{product.name_product} </strong>
              </div>
              <strong>R${product.price.toFixed(2)} </strong>
            </ContentList>
          <ContentList>
            <div className="left">
              <strong> Corte na Máquina </strong>
            </div>
            <strong> R$10,00 </strong>
          </ContentList>
          <ContentList>
            <div className="left">
              <strong> Corte na Tesoura </strong>
            </div>
            <strong> R$15,00 </strong>
          </ContentList>
          <ContentList>
            <div className="left">
              <strong>Mão e Pé </strong>
            </div>
            <strong> R$30,00 </strong>
          </ContentList>
          <ContentList>
            <div className="left">
              <strong>Máquina e Tesoura </strong>
            </div>
            <strong> R$25,00 </strong>
          </ContentList>
          <ContentList>
            <div className="left">
              <strong>Luzes </strong>
            </div>
            <strong> R$35,00 </strong>
          </ContentList>
          <ContentList>
            <div className="left">
              <strong>Limpeza de Pele </strong>
            </div>
            <strong> R$50,00 </strong>
          </ContentList>
          <ContentList>
            <div className="left">
              <strong> Bunda Gigante </strong>
            </div>
            <strong> Só Minha </strong>
          </ContentList>
          <ContentList>
            <div className="left">
              <strong> Prancha </strong>
            </div>
            <strong> R$23,00 </strong>
          </ContentList>
          <ContentList>
            <div className="left">
              <strong> Piastra </strong>
            </div>
            <strong> R$18,00 </strong>
          </ContentList>
          <ContentList>
            <div className="left">
              <strong> Implante </strong>
            </div>
            <strong> R$280,00 </strong>
          </ContentList>
          <ContentList>
            <div className="left">
              <strong> Relaxamento </strong>
            </div>
            <strong> R$45,00 </strong>
          </ContentList>
          <ContentList>
            <div className="left">
              <strong>Bunda Gigante dnv </strong>
            </div>
            <strong> Só minha mais uma vez </strong>
          </ContentList>
          <ContentList>
            <div className="left">
              <strong> Navalha</strong>
            </div>
            <strong> R$12,00 </strong>
          </ContentList>
          <ContentList>
            <div className="left">
              <strong>hola </strong>
            </div>
            <strong> hehe </strong>
          </ContentList>
          <ContentList>
            <div className="left">
              <strong>hola </strong>
            </div>
            <strong> hehe </strong>
          </ContentList>
          <ContentList>
            <div className="left">
              <strong>hola </strong>
            </div>
            <strong> hehe </strong>
          </ContentList>
          <ContentList>
            <div className="left">
              <strong>hola </strong>
            </div>
            <strong> hehe </strong>
          </ContentList>
          <ContentList>
            <div className="left">
              <strong>hola </strong>
            </div>
            <strong> hehe </strong>
          </ContentList>
          <ContentList>
            <div className="left">
              <strong>hola </strong>
            </div>
            <strong> hehe </strong>
          </ContentList>
          <ContentList>
            <div className="left">
              <strong>hola </strong>
            </div>
            <strong> hehe </strong>
          </ContentList>
          <ContentList>
            <div className="left">
              <strong>hola </strong>
            </div>
            <strong> hehe </strong>
          </ContentList>
          <ContentList>
            <div className="left">
              <strong>hola </strong>
            </div>
            <strong> hehe </strong>
          </ContentList>
          <ContentList>
            <div className="left">
              <strong>hola </strong>
            </div>
            <strong> hehe </strong>
          </ContentList>
          <ContentList>
            <div className="left">
              <strong>hola </strong>
            </div>
            <strong> hehe </strong>
          </ContentList> */
}
