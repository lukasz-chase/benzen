import React, { useEffect, useState } from "react";
//styling
import styled from "styled-components";
//material ui
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
//icons
import SearchIcon from "@material-ui/icons/Search";
//actions
import { getUsers } from "../actions/userActions";
//redux
import { useDispatch, useSelector } from "react-redux";
//router
import { useHistory } from "react-router-dom";
//material ui
import Pagination from "@material-ui/lab/Pagination";

const UsersComponent = ({ setUserId }) => {
  const history = useHistory();
  const { users, numberOfPages } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [role, setRole] = useState("customer");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getUsers(search, role, page));
  }, [dispatch, search, role, page]);
  const userDetailsHandler = (id) => {
    history.push(`/admin/panel/users/${id}`);
    setUserId(id);
    window.scrollTo(0, 0);
  };
  const sortAccessHandler = (e) => {
    setRole(e.target.value);
  };
  const handlePage = (e, v) => {
    setPage(v);
    window.scrollTo(0, 0);
  };
  return (
    <UsersWrapper>
      <div className="sort-users">
        <FormControl>
          <InputLabel className="sort-label">Show only</InputLabel>
          <Select
            value={role}
            onChange={sortAccessHandler}
            className="sort-select"
          >
            <MenuItem value="customer">customer</MenuItem>
            <MenuItem value="admin">admin</MenuItem>
            <MenuItem value="headAdmin">Head admin</MenuItem>
          </Select>
        </FormControl>
        <div className="search-users">
          <TextField
            label="search"
            value={search}
            className="users-input"
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
      </div>
      <table className="users-table">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>More info</th>
          </tr>

          {users?.length > 0 &&
            users?.map((user, index) => (
              <tr
                key={user.id}
                style={{
                  backgroundColor: index % 2 ? "black" : "white",
                  color: index % 2 ? "white" : "black",
                }}
              >
                <td>
                  {user.name ? user.name : "anonymous"} {user.surname}
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td
                  onClick={() => userDetailsHandler(user._id, user)}
                  style={{ cursor: "pointer" }}
                >
                  Details
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination
        count={parseInt(page)}
        page={numberOfPages}
        onChange={handlePage}
        className="pagination"
      />
    </UsersWrapper>
  );
};

const UsersWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  .sort-users {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    @media screen and (max-width: 1000px) {
      width: 90%;
      flex-direction: column;
      gap: 30px;
    }
    .sort-select,
    .users-input {
      width: 15rem;
      @media screen and (max-width: 1000px) {
        width: 100%;
      }
    }
  }
  .users-table {
    margin-top: 1rem;
    width: 100%;
    tbody {
      border: 1px solid black;
      @media screen and (max-width: 1000px) {
        font-size: small;
      }
      td,
      th {
        border: 1px solid black;
        padding: 20px;
        @media screen and (max-width: 1000px) {
          padding: 10px;
        }
      }
      th {
        text-transform: upperCase;
      }
    }
  }
`;

export default UsersComponent;
