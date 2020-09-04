import React from "react";
import { useSelector } from "react-redux";
import "../../sass/account.scss";
const Information = (props) => {
  const account = useSelector((state) => state.currentUser.account);

  const checkLogin = () => {
    if (!account) {
      props.history.push("/login");
    }
  };

  const showAccount = () => {
    let result = [];
    if (account) {
      account.forEach((acc) => {
        return result.push(
          <div className="information">
            <img
              src="http://gravatar.com/avatar/1de9d8681a3a3311fe6e9f18500ecbfc?d=identicon"
              alt="avatar"
              className="information__avatar"
            />
            <div className="information__wrapper">
              <div>
                <div className="information__wrapper__title">Name: </div>
                <div className="information__wrapper__content">{acc.name}</div>
              </div>
              <div>
                <div className="information__wrapper__title">Email: </div>
                <div className="information__wrapper__content">{acc.email}</div>
              </div>
              <div>
                <div className="information__wrapper__title">Telephone: </div>
                <div className="information__wrapper__content">{acc.phone}</div>
              </div>
              <div>
                <div className="information__wrapper__title">Gender: </div>
                <div className="information__wrapper__content">
                  {acc.gender}
                </div>
              </div>
              <div>
                <div className="information__wrapper__title">
                  Date of Birth:{" "}
                </div>
                <div className="information__wrapper__content">{acc.birth}</div>
              </div>
              <div>
                <div className="information__wrapper__title">Address: </div>
                <div className="information__wrapper__content">
                  {acc.region}
                </div>
              </div>
              <div className="btn">
                <span
                  className="information__wrapper__btn"
                  onClick={() => props.history.push("/editAccount")}
                >
                  Edit
                </span>
              </div>
            </div>
          </div>
        );
      });
    }
    return result;
  };

  return (
    <div className="wrapper_i">{account ? showAccount() : checkLogin()}</div>
  );
};

export default Information;
