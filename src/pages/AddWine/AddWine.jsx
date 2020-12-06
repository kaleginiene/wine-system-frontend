import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { InputField, Button } from "../../components";
import * as S from "./AddWine.style";

function insertWine(
  name,
  region,
  type,
  year,
  quantity,
  auth,
  setNotification,
  history
) {
  fetch("http://89.40.0.145:8080/add-wine", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth.token}`,
    },
    body: JSON.stringify({ name, region, type, year, quantity }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.msg === "Successfully added a wine") {
        history.push("/");
      } else {
        return setNotification(data.msg || "Error");
      }
    })
    .catch((err) => setNotification(err.message));
}

function AddWine() {
  const auth = useContext(AuthContext);
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");
  const [type, setType] = useState("");
  const [year, setYear] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [notification, setNotification] = useState();
  const history = useHistory();

  return (
    <S.Main>
      <S.Form
        onSubmit={(e) => {
          e.preventDefault();
          insertWine(
            name,
            region,
            type,
            year,
            quantity,
            auth,
            setNotification,
            history
          );
        }}
      >
        <S.Title>Add wine</S.Title>
        <h2>{notification}</h2>
        <InputField
          type="text"
          placeholder="E.g. Soalheiro"
          label="Winery"
          handleChange={(e) => setName(e.target.value)}
        />
        <InputField
          type="text"
          placeholder="E.g. Minho, Portugal "
          label="Region"
          handleChange={(e) => setRegion(e.target.value)}
        />
        <S.FlexBlock>
          <S.Halfwrapper>
            <InputField
              type="dropdown"
              options={[
                { id: 0, name: "Select Wine Type" },
                { id: 1, name: "Riesling", value: "Riesling" },
                { id: 2, name: "Pinot Gris", value: "Pinot Gris" },
                { id: 3, name: "Sauvignon Blanc", value: "Sauvignon Blanc" },
                { id: 4, name: "Chardonnay", value: "Chardonnay" },
                { id: 5, name: "Pinot Noir", value: "Pinot Noir" },
                { id: 6, name: "Zinfandel", value: "Zinfandel" },
                { id: 7, name: "Syrah", value: "Syrah" },
                {
                  id: 8,
                  name: "Cabernet Sauvignon",
                  value: "Cabernet Sauvignon",
                },
                { id: 9, name: "None", value: "None" },
              ]}
              label="Type"
              handleChange={(e) => setType(e.target.value)}
            />
          </S.Halfwrapper>
          <S.Halfwrapper>
            <InputField
              type="text"
              placeholder="E.g. 2019"
              label="Year"
              handleChange={(e) => setYear(e.target.value)}
              maxLength="4"
            />
          </S.Halfwrapper>
        </S.FlexBlock>
        <InputField
          type="number"
          placeholder="E.g. 1"
          label="Quantity"
          handleChange={(e) => setQuantity(e.target.value)}
          minNumber="0"
        />
        <Button color="primary" type="submit">
          Add
        </Button>
      </S.Form>
    </S.Main>
  );
}

export default AddWine;
