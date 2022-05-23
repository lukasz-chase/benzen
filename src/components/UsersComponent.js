import React, { useEffect, useState } from "react";
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
//components
import Pagination from "./Pagination";

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
  return (
    <div className="users-component">
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
                  backgroundColor: index % 2 ? "rgba(0,0,0,0.4)" : "white",
                }}
              >
                <td>
                  {user.name} {user.surname}
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
      <Pagination page={page} numberOfPages={numberOfPages} setPage={setPage} />
    </div>
  );
};

export default UsersComponent;
