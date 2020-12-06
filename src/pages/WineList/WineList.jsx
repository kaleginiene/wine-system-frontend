import React, { useEffect, useState, useContext } from "react";
import { InputField, Section, Button } from "../../components";
import { AuthContext } from "../../context/AuthContext";
import * as S from "./WineList.style";
import MinusIcon from "../../assets/minus.svg";

function deleteWine(quantity, id, auth, setNotification) {
  if (quantity > 0) {
    fetch("http://89.40.0.145:8080/decrease", {
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
}
function deleteFromDB(removableWine, auth, setNotification, confirmation) {
  if (confirmation === "delete") {
    fetch("http://89.40.0.145:8080/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${auth.token}`,
      },
      body: JSON.stringify({
        id: removableWine,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "Deleted item from database successfully") {
          window.location.reload(false);
        } else {
          return setNotification(data.msg || "Error");
        }
      })
      .catch((err) => setNotification(err.message));
  }
}

function filterWines(
  wineColor,
  wineList,
  auth,
  setNotification,
  setRemovableWine,
  confirmation,
  setHideBlock
) {
  if (wineColor === "red") {
    return wineList
      .filter((item) => {
        return (
          item.type === "Pinot Noir" ||
          item.type === "Zinfandel" ||
          item.type === "Syrah" ||
          item.type === "Cabernet Sauvignon"
        );
      })
      .map((wine) => {
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
                  if (
                    !wine.quantity ||
                    wine.quantity === 0 ||
                    wine.quantity === null
                  ) {
                    setHideBlock("show");
                  }
                  deleteWine(
                    wine.quantity,
                    wine.id,
                    auth,
                    setNotification,
                    confirmation
                  );
                  setRemovableWine({ id: wine.id, name: wine.name });
                }}
              />
            </td>
          </tr>
        );
      });
  } else if (wineColor === "white") {
    return wineList
      .filter((item) => {
        return (
          item.type === "Riesling" ||
          item.type === "Pinot Gris" ||
          item.type === "Sauvignon Blanc" ||
          item.type === "Chardonnay"
        );
      })
      .map((wine) => {
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
                  setRemovableWine({ id: wine.id, name: wine.name });
                  if (
                    !wine.quantity ||
                    wine.quantity === 0 ||
                    wine.quantity === null
                  ) {
                    setHideBlock("show");
                  }
                  deleteWine(
                    wine.quantity,
                    wine.id,
                    auth,
                    setNotification,
                    confirmation
                  );
                }}
              />
            </td>
          </tr>
        );
      });
  } else {
    return wineList.map((wine) => {
      return (
        <tr key={wine.id}>
          <td>{wine.name}</td>
          <td>{wine.region}</td>
          <td>{wine.type}</td>
          <td>{wine.year}</td>
          {wine.quantity > 0 ? <td>{wine.quantity}</td> : <td>Out of Stock</td>}
          <td>
            <S.Icon
              src={MinusIcon}
              onClick={() => {
                setRemovableWine({ id: wine.id, name: wine.name });
                if (
                  !wine.quantity ||
                  wine.quantity === 0 ||
                  wine.quantity === null
                ) {
                  setHideBlock("show");
                } else {
                  deleteWine(
                    wine.quantity,
                    wine.id,
                    auth,
                    setNotification,
                    confirmation
                  );
                }
              }}
            />
          </td>
        </tr>
      );
    });
  }
}

function WineList() {
  const [wineList, setWineList] = useState([]);
  const auth = useContext(AuthContext);
  const [notification, setNotification] = useState();
  const [wineColor, setWineColor] = useState("all");
  const [removableWine, setRemovableWine] = useState({ id: null, name: "" });
  const [confirmation, setConfirm] = useState("cancel");
  const [hideBlock, setHideBlock] = useState("hide");
  console.log(confirmation);
  console.log(removableWine);

  useEffect(() => {
    fetch("http://89.40.0.145:8080/wine-list", {
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
        <h3>Filter Wine List by wine color</h3>
        <S.Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <InputField
            type="dropdown"
            label="Choose wine color"
            options={[
              { id: 0, name: "Select color" },
              { id: 1, name: "Red", value: "red" },
              { id: 2, name: "White", value: "white" },
              { id: 3, name: "Show all wines", value: "all" },
            ]}
            handleChange={(e) => setWineColor(e.target.value)}
          />
        </S.Form>
        {notification && <h3>{notification}</h3>}
        {wineList.length > 0 && (
          <S.ConfirmBlock display={hideBlock}>
            <S.ExitBtn onClick={() => setHideBlock("hide")} />
            <h4>
              Do you really want to remove{" "}
              <S.Span>{removableWine.name} </S.Span>
              wine?
            </h4>
            <S.FlexBlock>
              <Button
                handleClick={() => {
                  setConfirm("delete");
                  console.log(confirmation);
                  console.log(removableWine.id);
                  setHideBlock("hide");
                  deleteFromDB(
                    removableWine.id,
                    auth,
                    setNotification,
                    confirmation
                  );
                }}
              >
                Yes
              </Button>
              <Button
                handleClick={() => {
                  setConfirm("cancel");
                  setHideBlock("hide");
                }}
              >
                Cancel
              </Button>
            </S.FlexBlock>
          </S.ConfirmBlock>
        )}
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
            {filterWines(
              wineColor,
              wineList,
              auth,
              setNotification,
              setRemovableWine,
              confirmation,
              setHideBlock
            )}
          </tbody>
        </S.Table>
      </Section>
    </S.Main>
  );
}

export default WineList;
