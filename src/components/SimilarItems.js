import React, { useEffect } from "react";
//styled
import styled from "styled-components";
//components
import Card from "../components/Card";
//actions
import { getItemsByItem } from "../actions/itemsAction";
//redux
import { useDispatch, useSelector } from "react-redux";

const SimilarItems = ({ category, gender, pathId, id, item }) => {
  //state
  const dispatch = useDispatch();
  //useEffects
  useEffect(() => {
    dispatch(getItemsByItem(gender, item, "-1", 1, category));
  }, [dispatch, gender, pathId, category, item]);
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
              <Card key={item._id} item={item} />
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
