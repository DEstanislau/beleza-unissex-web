import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { createProductSucess } from '~/store/modules/user/actions';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { AiTwotoneDelete } from 'react-icons/ai';

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
  BottomProduct,
} from './styles';

export default function Products() {
  const provider_id = useSelector((state) => state.user.profile.id);
  const [products, setProducts] = useState([]);
  const [flag, setFlag] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      setProducts(response.data);
    }

    loadProducts();
  }, [flag]);

  async function loadHandleSubmit() {
    const response = await api.get('products');
    setProducts(response.data);
    setFlag(flag ? false : true);
  }

  function handleSubmit({ name_product, price }) {
    dispatch(createProductSucess(provider_id, name_product, price));
    document.querySelector('input[name="name_product"]').value = '';
    document.querySelector('input[name="price"]').value = '';
    loadHandleSubmit();
  }

  return (
    <Container>
      <InputArea>
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
                  <div>
                    <strong>{product.name_product} </strong>
                  </div>
                  <div className="right">
                    {' '}
                    <p>.</p>
                  </div>
                  <strong>R${product.price.toFixed(2)} </strong>
                  <BottomProduct>
                    <div>
                      <button
                        onClick={() => {
                          async function handleDelete() {
                            try {
                              await api.delete(`products/${product.id}`);
                              loadHandleSubmit();
                              toast.success('Serviço Removido com Sucesso!');
                            } catch (err) {
                              toast.error('Erro ao Remover Serviço.');
                            }
                          }
                          handleDelete();
                        }}
                        className="att"
                        type="submit"
                      >
                        <AiTwotoneDelete color="#FFFFFF" size={20} />
                      </button>
                    </div>
                  </BottomProduct>
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
