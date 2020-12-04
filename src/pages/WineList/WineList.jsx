import React, { useEffect, useState, useContext } from "react";
import { Section } from "../../components";
import { AuthContext } from "../../context/AuthContext";
import * as S from "./WineList.style";
import MinusIcon from "../../assets/minus.svg";

function decrease(quantity, id, auth, setNotification) {
  fetch("http://localhost:8080/remove", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth.token}`,
    },
    body: JSON.stringify({
      quantity,
      id,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.msg === "Removed item successfully") {
        window.location.reload(false);
      } else {
        return setNotification(data.msg || "Error");
      }
    })
    .catch((err) => setNotification(err.message));
}

function WineList() {
  const [wineList, setWineList] = useState([]);
  const auth = useContext(AuthContext);
  const [notification, setNotification] = useState();

  useEffect(() => {
    fetch("http://localhost:8080/wine-list", {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setWineList(data));
  }, [auth]);

  return (
    <S.Main>
      <Section>
        <h1>Wine List</h1>
        {notification && <h3>{notification}</h3>}
        <S.Table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Region</th>
              <th>Wine type</th>
              <th>Year</th>
              <th>Quantity</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {console.log(wineList)}
            {wineList &&
              wineList.map((wine) => {
                return (
                  <tr key={wine.id}>
                    <td>{wine.name}</td>
                    <td>{wine.region}</td>
                    <td>{wine.type}</td>
                    <td>{wine.year}</td>
                    {wine.quantity > 0 ? (
                      <td>{wine.quantity}</td>
                    ) : (
                      <td>Out of Stock</td>
                    )}
                    <td>
                      <S.Icon
                        src={MinusIcon}
                        onClick={() => {
                          decrease(
                            wine.quantity,
                            wine.id,
                            auth,
                            setNotification
                          );
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </S.Table>
      </Section>
    </S.Main>
  );
}

export default WineList;
