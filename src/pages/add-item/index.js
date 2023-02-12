import React, { useState, useEffect } from "react";
//styling
import styled from "styled-components";
//redux
import { useSelector } from "react-redux";
//material ui
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
//link
import { useRouter } from "next/router";
//actions
import { createItem, getItem, updateItem } from "../../actions/itemsAction";
//redux
import { useDispatch } from "react-redux";
//components
import Button from "../../components/Button";
import GoBackButton from "../../components/GoBackButton";
//logic
import { isAdmin } from "../../components/Nav";

const AddItemPage = () => {
  //state
  const [itemData, setItemData] = useState({
    name: "",
    gender: "",
    category: "",
    item: "",
    amount: "",
    discount: false,
    price: "",
    priceBeforeDiscount: 0,
    description: "",
    materials: [],
    images: [],
  });
  const router = useRouter();
  //materials
  const [materialFabric, setMaterialFabric] = useState("");
  const [materialPercentage, setMaterialPercentage] = useState("");
  const [lastMaterialId, setLastMaterialId] = useState(0);
  //images
  const id = router.asPath.split("/")[2];
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(getItem(id));
    }
  }, [dispatch, id]);
  const { item } = useSelector((state) => state.item);
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    if (item?._id) {
      setItemData({
        name: item.name,
        gender: item.gender,
        category: item.category,
        item: item.item,
        amount: item.amount,
        discount: item.discount,
        price: item.price,
        priceBeforeDiscount: item.priceBeforeDiscount,
        description: item.description,
        materials: item.materials,
        images: item.images,
      });
    }
  }, [dispatch, item]);

  const clear = () =>
    setItemData({
      name: "",
      gender: "",
      category: "",
      item: "",
      amount: "",
      discount: false,
      price: "",
      priceBeforeDiscount: "",
      description: "",
      materials: [],
      images: [],
    });

  const materialHandler = () => {
    if (
      setItemData.materialFabric !== "" &&
      setItemData.materialPercentage !== ""
    ) {
      itemData.materials.push({
        id: lastMaterialId,
        fabric: materialFabric,
        percentage: materialPercentage,
      });
      setItemData({ ...itemData, materials: itemData.materials });
      setLastMaterialId(lastMaterialId + 1);
      setMaterialFabric("");
      setMaterialPercentage("");
    } else {
      alert("inputs cant be empty");
    }
  };
  const imagesHandler = (e) => {
    setItemData({
      ...itemData,
      images: [...itemData.images, ...e.target.files],
    });
  };
  const emptyCheck = () => {
    if (
      itemData.gender !== "" &&
      itemData.category !== "" &&
      itemData.name !== "" &&
      itemData.item !== "" &&
      itemData.amount !== "" &&
      itemData.price !== "" &&
      itemData.materials.length !== 0 &&
      itemData.images.length !== 0
    ) {
      return true;
    } else return false;
  };
  const addItemHandler = () => {
    const formData = new FormData();
    formData.append("name", itemData.name);
    formData.append("gender", itemData.gender);
    formData.append("category", itemData.category);
    formData.append("item", itemData.item);
    formData.append("amount", itemData.amount);
    formData.append("discount", itemData.discount);
    formData.append("price", itemData.price);
    formData.append("priceBeforeDiscount", itemData.priceBeforeDiscount);
    formData.append("description", itemData.description);
    formData.append("materials", JSON.stringify(itemData.materials));
    for (const image of itemData.images) {
      formData.append("images", image);
    }
    if (emptyCheck()) {
      dispatch(createItem(formData, router));
      clear();
    } else {
      alert("Inputs cant be empty");
    }
  };
  const editItemHandler = () => {
    if (emptyCheck()) {
      clear();
      dispatch(updateItem(id, itemData, router));
    } else {
      alert("Inputs cant be empty");
    }
  };
  return (
    <AddItemPageComponent>
      {isAdmin(user) ? (
        <>
          <GoBackButton />
          <form className="inputs" encType="multipart/form-data">
            <div className="two-inputs">
              <div className="option">
                Items Gender:
                <FormControl>
                  <Select
                    value={itemData.gender}
                    onChange={(e) =>
                      setItemData({ ...itemData, gender: e.target.value })
                    }
                    className="select"
                  >
                    <MenuItem value="man">man</MenuItem>
                    <MenuItem value="woman">woman</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="option">
                Items Category:
                <FormControl>
                  <Select
                    value={itemData.category}
                    onChange={(e) =>
                      setItemData({ ...itemData, category: e.target.value })
                    }
                    className="select"
                  >
                    <MenuItem value="clothes">clothes</MenuItem>
                    <MenuItem value="accessories">accessories</MenuItem>
                    {itemData.gender === "woman" && (
                      <MenuItem value="shoes">shoes</MenuItem>
                    )}
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="two-inputs">
              {itemData.gender === "woman" && itemData.category === "shoes" && (
                <div className="option">
                  item:{" "}
                  <FormControl>
                    <Select
                      value={itemData.item}
                      onChange={(e) =>
                        setItemData({ ...itemData, item: e.target.value })
                      }
                      className="select"
                    >
                      <MenuItem value="heels">heels</MenuItem>
                      <MenuItem value="flats">flats</MenuItem>
                      <MenuItem value="sneakers">sneakers</MenuItem>
                      <MenuItem value="boots">boots</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              )}
              {itemData.category === "accessories" && (
                <div className="option">
                  item:{" "}
                  <FormControl>
                    <Select
                      value={itemData.item}
                      onChange={(e) =>
                        setItemData({ ...itemData, item: e.target.value })
                      }
                      className="select"
                    >
                      <MenuItem value="bags">bags</MenuItem>
                      <MenuItem value="gloves">gloves</MenuItem>
                      <MenuItem value="hats">hats</MenuItem>
                      <MenuItem value="scarves">scarves</MenuItem>
                      <MenuItem value="socks">socks</MenuItem>
                      {itemData.gender === "man" && (
                        <MenuItem value="shoes">shoes</MenuItem>
                      )}
                    </Select>
                  </FormControl>
                </div>
              )}
              {itemData.category === "clothes" && (
                <div className="option">
                  item:{" "}
                  <FormControl>
                    <Select
                      value={itemData.item}
                      onChange={(e) =>
                        setItemData({ ...itemData, item: e.target.value })
                      }
                      className="select"
                    >
                      <MenuItem value="shirts">shirts</MenuItem>
                      <MenuItem value="sweatshirts">sweatshirts</MenuItem>
                      <MenuItem value="sweaters">sweaters</MenuItem>
                      <MenuItem value="trousers">trousers</MenuItem>
                      <MenuItem value="blouses">blouses</MenuItem>
                      <MenuItem value="t-shirts">t-shirts</MenuItem>
                      <MenuItem value="jeans">jeans</MenuItem>
                      <MenuItem value="blazers">blazers</MenuItem>
                      <MenuItem value="nightwear">nightwear</MenuItem>
                      <MenuItem value="polos">polos</MenuItem>
                      <MenuItem value="suits">suits</MenuItem>
                      <MenuItem value="underwear">underwear</MenuItem>
                      <MenuItem value="vests">vests</MenuItem>
                      <MenuItem value="dresses">dresses</MenuItem>
                      <MenuItem value="skirts">skirts</MenuItem>
                      <MenuItem value="biker-jackets">biker-jackets</MenuItem>
                      <MenuItem value="lingerie">lingerie</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              )}

              <div className="option">
                Name:{" "}
                <TextField
                  className="input"
                  value={itemData.name}
                  onChange={(e) =>
                    setItemData({ ...itemData, name: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="two-inputs">
              <div className="option">
                discount:
                <FormControl>
                  <Select
                    value={itemData.discount}
                    onChange={(e) =>
                      setItemData({ ...itemData, discount: e.target.value })
                    }
                    className="select"
                  >
                    <MenuItem value={false}>false</MenuItem>
                    <MenuItem value={true}>true</MenuItem>
                  </Select>
                </FormControl>
              </div>
              {itemData.discount && (
                <div className="option">
                  Price before discount:{" "}
                  <TextField
                    className="input"
                    type="number"
                    value={itemData.priceBeforeDiscount}
                    onChange={(e) =>
                      setItemData({
                        ...itemData,
                        priceBeforeDiscount: e.target.value,
                      })
                    }
                  />
                </div>
              )}
            </div>
            <div className="two-inputs">
              <div className="option">
                price:{" "}
                <TextField
                  className="input"
                  value={itemData.price}
                  type="number"
                  onChange={(e) =>
                    setItemData({
                      ...itemData,
                      price: e.target.value,
                    })
                  }
                />
              </div>
              <div className="option">
                amount:{" "}
                <TextField
                  className="input"
                  value={itemData.amount}
                  type="number"
                  onChange={(e) =>
                    setItemData({
                      ...itemData,
                      amount: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="option">
              description:{" "}
              <TextField
                className="description-input"
                value={itemData.description}
                multiline
                onChange={(e) =>
                  setItemData({
                    ...itemData,
                    description: e.target.value,
                  })
                }
              />
            </div>
            <div className="option">
              materials:
              <div className="materials-add">
                Name:
                <TextField
                  className="input"
                  value={materialFabric}
                  onChange={(e) => setMaterialFabric(e.target.value)}
                />
                Percentage:
                <TextField
                  className="input"
                  type="number"
                  min="1"
                  max="100"
                  value={materialPercentage}
                  onChange={(e) => setMaterialPercentage(e.target.value)}
                  onKeyDown={(e) =>
                    e.key === "Enter" ? materialHandler() : ""
                  }
                />
                <Button
                  label="Add Material"
                  onClick={() => materialHandler()}
                />
              </div>
              {itemData.materials.map((material) => (
                <div className="material" key={material.name}>
                  <span>
                    {" "}
                    Fabric:{material.fabric}, Percentage:{material.percentage}
                  </span>
                  <span
                    className="remove-material"
                    onClick={() =>
                      setItemData({
                        ...itemData,
                        materials: itemData.materials.filter(
                          (deleteMaterial) => deleteMaterial.id !== material.id
                        ),
                      })
                    }
                  >
                    remove
                  </span>
                </div>
              ))}
            </div>
            <div className="option">
              Images:
              <div className="image-add">
                <input
                  onChange={imagesHandler}
                  type="file"
                  accept="image/*"
                  filename="images"
                  multiple={true}
                />
              </div>
              <div className="images-display">
                {itemData.images.map((image) => (
                  <div className="imageWrapper" key={image.id}>
                    <span>{image.name}</span>
                    <span
                      className="image-remove"
                      onClick={() =>
                        setItemData({
                          ...itemData,
                          images: itemData.images.filter(
                            (deleteImage) => deleteImage.name !== image.name
                          ),
                        })
                      }
                    >
                      remove
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <Button
              label={id ? "Edit Item" : "Add Item"}
              onClick={() => (id ? editItemHandler() : addItemHandler())}
              variant="black"
              size="lg"
              type="submit"
            />
          </form>
        </>
      ) : (
        "You can`t access this page"
      )}
    </AddItemPageComponent>
  );
};

const AddItemPageComponent = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: Center;
  align-items: center;
  flex-direction: column;
  .two-inputs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
      align-items: flex-start;
      font-size: 1rem;
    }
  }
  .option {
    font-size: 2rem;
    margin: 1rem 0rem;
    font-weight: bold;
    @media screen and (max-width: 1000px) {
      font-size: 1rem;
    }
    &:first-letter {
      text-transform: upperCase;
    }
    .select {
      width: 10rem;
      margin: 0rem 1rem;
    }
    .description-input {
      width: 100%;
    }
    .material {
      display: flex;
      justify-content: space-between;
      font-size: 1rem;
      font-weight: normal;
      margin: 1rem 0rem;
      padding: 1rem;
      border: 1px solid black;
      .remove-material {
        &:hover {
          cursor: pointer;
          font-weight: bold;
        }
      }
    }
    .materials-add {
      display: flex;
      flex-direction: column;
      font-size: 1.5rem;
      font-weight: bold;
      margin: 1rem 0rem;
      padding: 1rem;
      border: 1px solid black;
      @media screen and (max-width: 1000px) {
        font-size: 1rem;
      }
    }
    .image-add {
      display: flex;
      flex-direction: column;
      margin: 1rem 0rem;
      padding: 1rem;
      border: 1px solid black;
    }
    .images-display {
      display: grid;
      grid-template-columns: minmax(auto, auto) 1fr 1fr;
    }
    .imageWrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 1rem;
      font-weight: normal;
      padding: 1rem;
      .image {
        height: 200px;
        width: 200px;
        object-fit: cover;
      }
      .image-remove {
        padding: 0rem 1rem;
        &:hover {
          cursor: pointer;
          font-weight: bold;
        }
      }
    }
  }
`;

export default AddItemPage;
