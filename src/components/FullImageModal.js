import React from "react";
//styled
import styled from "styled-components";
//icons
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const FullImageModal = ({
  setCurrentIndex,
  currentIndex,
  item,
  modal,
  setModal,
}) => {
  //state
  return (
    <ModalComponent modal={modal}>
      <div className="modal" style={{ display: modal ? "flex" : "none" }}>
        <CloseIcon className="close-modal" onClick={() => setModal(!modal)} />
        <ArrowBackIosIcon
          className="arrows left-arrow"
          onClick={() =>
            currentIndex - 1 === -1
              ? setCurrentIndex(item.images.length - 1)
              : setCurrentIndex((currentIndex - 1) % item.images.length)
          }
        />
        {item.images && <img src={item.images[currentIndex]} alt={item.name} />}
        <ArrowForwardIosIcon
          className="arrows right-arrow"
          onClick={() =>
            setCurrentIndex((currentIndex + 1) % item.images.length)
          }
        />
      </div>
    </ModalComponent>
  );
};

const ModalComponent = styled.div`
  background: white;
  display: ${({ modal }) => (modal ? "flex" : "none")};
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 50;
  max-height: 100%;
  overflow-y: auto;
  .modal {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
  }
  img {
    width: 80%;
    object-fit: contain;
    z-index: 4;
  }
  .close-modal {
    position: fixed;
    right: 0;
    top: 0;
    margin: 1rem;
    font-size: 2rem;
    font-size: 3rem;
    &:hover {
      cursor: pointer;
    }
  }
  .arrows {
    position: fixed;
    margin-top: 25%;
    font-size: 3rem;
    &:hover {
      cursor: pointer;
    }
  }
  .left-arrow {
    left: 0;
    margin-left: 2rem;
  }
  .right-arrow {
    right: 0;
    margin-right: 2rem;
  }
`;

export default FullImageModal;
