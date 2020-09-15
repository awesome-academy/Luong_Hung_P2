import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { ticket } from "../../actions/admin";

const ManagementRevenue = (props) => {
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const [listDay, setListDay] = useState();
  const tickets = useSelector((state) => state.tickets.tickets);
  const toggleSidebar = useSelector((state) => state.ui.showSidebar);
  const [listRevenue, setListRevenue] = useState();
  const { t } = useTranslation("common");

  const checkAdmin = () => {
    props.history.push("/");
  };

  useEffect(() => {
    let list = [];
    const today = Date.now();
    for (let i = 6; i >= 0; i--) {
      const templ = today - 1000 * 60 * 60 * 24 * i;
      const date = new Date(templ);
      let month = "";
      let day = "";
      if (date.getMonth() + 1 < 10) {
        month = `0${date.getMonth() + 1}`;
      } else month = date.getMonth();
      if (date.getDate() < 10) {
        day = `0${date.getDate()}`;
      } else day = date.getDate();
      const stringDate = `${date.getFullYear()}-${month}-${day}`;
      list.push(stringDate);
    }
    setListDay([...list]);
  }, []);

  useEffect(() => {
    let result = [];
    listDay &&
      listDay.forEach((day, i) => {
        let moneyMovie = 0;
        let moneyFood = 0;
        tickets &&
          tickets.forEach((ticket, i) => {
            if (day === ticket.timeSet) {
              moneyMovie = ticket.count * 75000;
              ticket.combo.forEach((combo, i) => {
                moneyFood = combo.count * combo.price;
              });
            }
          });
        result.push({
          day,
          moneyMovie,
          moneyFood,
        });
      });
    setListRevenue([...result]);
  }, [listDay, tickets]);

  console.log(listRevenue);

  const showAdminRevenue = () => {
    let result = [];

    result.push(
      <div className="adminUsers adminRevenue" key={1}>
        <table className="table">
          <tr>
            <th>#</th>
            <th>{t("home.day")}</th>
            <th>{t("home.moneyMovie")}</th>
            <th>{t("home.moneyFood")}</th>
            <th>{t("home.total")}</th>
          </tr>
          {showRevenue()}
        </table>
        <div className="total">{t("home.total")}: {showTotal()}</div>
      </div>
    );
    return result;
  };

  const showTotal = () => {
    let sum = 0;
    listRevenue &&
      listRevenue.forEach((revenue, i) => {
        sum += revenue.moneyMovie + revenue.moneyFood;
      });
    return sum;
  };

  const showRevenue = () => {
    let result = [];
    listRevenue &&
      listRevenue.forEach((revenue, i) => {
        return result.push(
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{revenue.day}</td>
            <td>{revenue.moneyMovie}</td>
            <td>{revenue.moneyFood}</td>
            <td>{revenue.moneyMovie + revenue.moneyFood}</td>
          </tr>
        );
      });
    return result;
  };

  return (
    <div className={toggleSidebar ? "wrapperAdminUsers" : "wrapperAdminUsers admin"}>
      {currentUser && currentUser.email === "admin@admin"
        ? showAdminRevenue()
        : checkAdmin()}
    </div>
  );
};

export default ManagementRevenue;
