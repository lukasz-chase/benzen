import React, { useEffect } from "react";
//styled
import styled from "styled-components";
//components
import Card from "../components/Card";
//actions
import { getItemsByItem } from "../actions/itemsAction";
//redux
import { useDispatch, useSelector } from "react-redux";

const SimilarItems = ({ category, gender, pathId, id }) => {
  //state
  const dispatch = useDispatch();
  //useEffects
  useEffect(() => {
    dispatch(getItemsByItem(gender, category, 1));
  }, [dispatch, gender, pathId, category]);
  //get data back
  const { items } = useSelector((state) => state.item);
  return (
    <SimilarItemsComponent>
      {items && (
        <>
          {items
            .filter((i) => i._id !== id)
            .slice(0, 9)
            .map((item) => (
              <div className="card" key={item._id}>
                <Card key={item._id} item={item} />
              </div>
            ))}
        </>
      )}
    </SimilarItemsComponent>
  );
};

const SimilarItemsComponent = styled.div`
  width: 90%;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  margin-left: 10%;
  @media screen and (max-width: 1000px) {
    margin-left: 0rem;
    width: 100%;
  }
  .card {
    width: 21rem;
    flex: 0 0 auto;
    margin: 1.5rem 0;
    border: none;
    @media screen and (max-width: 1000px) {
      margin: 0.5rem 0;
      width: 11rem;
    }
  }
  ::-webkit-scrollbar {
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: white;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.6);
  }
`;

export default SimilarItems;
