import axios from "axios";

const API = axios.create({
  baseURL: "https://cheerful-gray-vestments.cyclic.app/",
});
// const API = axios.create({ baseURL: "http://localhost:5000/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

//ITEMS
export const getItemsByItem = (gender, item, order, page, category) =>
  API.get(
    `/items/item/${item}?gender=${gender}&order=${order}&page=${page}&category=${category}`
  );
export const getItemsBySearch = (gender, searchQuery, page, sort) =>
  API.get(
    `/items/search?searchQuery=${searchQuery}&gender=${gender}&order=${sort}&page=${page}`
  );
export const getItemsOnSale = (gender, item, page, sort) =>
  API.get(`/items/sale/${item}?gender=${gender}&order=${sort}&page=${page}`);
export const getFavoriteItems = (id, page) =>
  API.get(`/items/favorites/${id}?page=${page}`);
export const getItem = (id) => API.get(`/items/${id}`);
export const createItem = (item) => API.post(`/items`, item);
export const updateItem = (id, item) => API.patch(`/items/update/${id}`, item);
export const decreaseItemAmount = (id) =>
  API.patch(`/items/decreaseAmount/${id}`);
export const deleteItem = (id) => API.delete(`/items/delete/${id}`);

//USER
export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
export const getUserById = (id) => API.get(`/user/${id}`);
export const getUsers = (searchQuery, role, page) =>
  API.get(`/user?searchQuery=${searchQuery}&role=${role}&page=${page}`);
export const addToFavorites = (id, itemId) =>
  API.patch(`/user/addToFavorites/${id}`, itemId);
export const addAddress = (id, address) =>
  API.patch(`/user/addAddress/${id}`, address);
export const updateAddress = (id, address, addressId) =>
  API.patch(`/user/updateAddress/${id}`, { address, addressId: addressId });
export const deleteAddress = (userId, addressId) =>
  API.patch(`/user/deleteAddress/${userId}`, { addressId: addressId });
export const updateInfo = (userId, info) =>
  API.patch(`/user/updateInfo/${userId}`, info);
export const updateRole = (userId, role) =>
  API.patch(`/user/updateRole/${userId}`, role);
export const updatePassword = (userId, password) =>
  API.patch(`/user/updatePassword/${userId}`, { password: password });
export const deleteAccount = (userId) =>
  API.delete(`/user/deleteAccount/${userId}`);

//ORDER
export const createOrder = (formData) => API.post("/order", formData);
export const getOrder = (id) => API.get(`/order/${id}`);
export const getOrders = (page) => API.get(`/order/all?page=${page}`);
export const getUserOrders = (id, page) =>
  API.get(`/order/user/${id}?page=${page}`);
export const updateOrder = (id, status) =>
  API.patch(`/order/update/${id}`, { status: status });
