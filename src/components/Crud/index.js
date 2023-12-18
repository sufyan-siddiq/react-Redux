import { useDispatch, useSelector } from "react-redux";
import { UpdateUser, addUser, deleteUser } from "../../redux/slices/counter";
import { useState } from "react";

export const Crud = () => {
  const userList = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    id: Math.random(),
    name: "",
    city: "",
    age: "",
  });
  const [editUser, setEditUser] = useState({
    id: Math.random(),
    name: "",
    city: "",
    age: "",
  });

  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "16px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const inputStyle = {
    marginBottom: "8px",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    fontSize: "16px",
  };

  const buttonStyle = {
    marginRight: "8px",
    cursor: "pointer",
    padding: "8px",
    borderRadius: "4px",
    border: "none",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
  };

  return (
    <div className="App" style={{ padding: "20px" }}>
      <input
        placeholder="Name"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        style={inputStyle}
      />
      <input
        placeholder="City"
        value={user.city}
        onChange={(e) => setUser({ ...user, city: e.target.value })}
        style={inputStyle}
      />
      <input
        placeholder="Age"
        value={user.age}
        onChange={(e) => setUser({ ...user, age: e.target.value })}
        style={inputStyle}
      />
      <button
        style={buttonStyle}
        onClick={() =>
          dispatch(addUser({ id: Math.random(), name: "abc", city: "dddd" }))
        }
      >
        Add User
      </button>
      <div style={cardStyle}>
        {userList.map((user, index) => (
          <div key={index} style={{ marginBottom: "12px" }}>
            <input
              placeholder="Name"
              value={editUser.name}
              onChange={(e) =>
                setEditUser({ ...editUser, name: e.target.value })
              }
              style={inputStyle}
            />
            <input
              placeholder="City"
              value={editUser.city}
              onChange={(e) =>
                setEditUser({ ...editUser, city: e.target.value })
              }
              style={inputStyle}
            />
            <input
              placeholder="Age"
              value={editUser.age}
              onChange={(e) =>
                setEditUser({ ...editUser, age: e.target.value })
              }
              style={inputStyle}
            />
            <h2 style={{ fontSize: "18px", marginBottom: "8px" }}>
              {user.name}
            </h2>
            <button
              style={buttonStyle}
              onClick={() =>
                dispatch(
                  UpdateUser({
                    id: user.id,
                    name: editUser.name,
                    city: editUser.city,
                  })
                )
              }
            >
              Edit User
            </button>
            <button
              style={{ ...buttonStyle, backgroundColor: "#f44336" }}
              onClick={() => dispatch(deleteUser(user.id))}
            >
              Delete User
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
