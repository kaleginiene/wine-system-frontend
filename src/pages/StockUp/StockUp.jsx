import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { InputField, Button } from "../../components";
import * as S from "./StockUp.style";

function increase(quantity, id, setNotification, history) {
  fetch("http://89.40.0.145:8080/quantity", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ quantity, id }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.msg === "Added item successfully.") {
        history.push("/");
      } else {
        return setNotification(data.msg || "Error");
      }
    })
    .catch((err) => setNotification(err.message));
}

function StockUp() {
  const [wineList, setWineList] = useState([]);
  const auth = useContext(AuthContext);
  const defaultOption = [{ id: 0, name: "Select wine" }];
  const [quantity, setQuantity] = useState(null);
  const [wineID, setWineID] = useState();
  const history = useHistory();
  const [notification, setNotification] = useState();

  useEffect(() => {
    fetch("http://89.40.0.145:8080/wine-list", {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setWineList(data);
      });
  }, [auth]);

  return (
    <S.Main>
      <S.Form
        onSubmit={(e) => {
          e.preventDefault();
          increase(quantity, wineID, setNotification, history);
        }}
      >
        <S.Title>Stock up Your wine cellar</S.Title>
        <h2>{notification}</h2>
        <InputField
          type="dropdown"
          label="Choose Wine"
          options={defaultOption.concat(
            wineList.map((item) => ({
              id: item.id,
              name: item.name + ", " + item.region + " " + item.year,
              value: item.id,
            }))
          )}
          handleChange={(e) => {
            setWineID(e.target.value);
          }}
        />
        <InputField
          type="number"
          placeholder="E.g. 1"
          label="Quantity"
          minNumber="0"
          handleChange={(e) => setQuantity(e.target.value)}
        />
        <Button color="primary" type="submit">
          Stock up
        </Button>
      </S.Form>
    </S.Main>
  );
}
export default StockUp;
