import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import "../../sass/adminUser.scss";
import * as adminActions from "../../actions/admin";
import ShowTicket from "./ShowTicket";

const ManagementTicket = (props) => {
  const currentUser = useSelector((state) => state.currentUser.currentUser);
  const { t } = useTranslation("common");
  const tickets = useSelector((state) => state.tickets.tickets);
  const [listTickets, setListTickets] = useState(tickets);
  const [deleteMovie, setDeleteMovie] = useState(-1);
  const [isOpenModal, setIsOpenModal] = useState(0);
  const accounts = useSelector(state => state.currentUser.accounts);
  const dispatch = useDispatch();
  const [productPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * productPerPage;
  const indexOfFirstPost = indexOfLastPost - productPerPage;
  const currentPosts =
    tickets && tickets.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalMovies = tickets && tickets.length;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalMovies / productPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    if (deleteMovie !== -1) {
      tickets.splice(deleteMovie, 1);
      setListTickets([...tickets]);
      setDeleteMovie(-1);
    } else setListTickets(tickets);
  }, [tickets, deleteMovie]);

  const handleModal = (id) => {
    setIsOpenModal(id);
  };

  const checkAdmin = () => {
    props.history.push("/");
  };

  const passIsOpen = (value) => {
    setIsOpenModal(value);
  };

  const showAdminTicket = () => {
    let result = [];
    result.push(
      <div className="adminUsers adminTickets" key={1}>
        <table className="table">
          <tr>
            <th>#</th>
            <th>{t("auth.account")}</th>
            <th>{t("auth.nameMovie")}</th>
            <th>{t("auth.nameTheater")}</th>
            <th>{t("auth.timeSet")}</th>
            <th>{t("auth.action")}</th>
          </tr>
          {showTicket()}
        </table>
        <nav>
          <ul
            className="pagination"
            style={{ "justify-content": "flex-start", margin: "20px 0" }}
          >
            {pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <a onClick={() => paginate(number)} className="page-link">
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
    return result;
  };

  const searchUserID = (id) => {
    let nameUser = "";
    accounts.forEach(account => {
      if(account.id === id) nameUser = account.name;
    });
    return nameUser;
  }

  const showTicket = () => {
    let result = [];
    currentPosts &&
      currentPosts.forEach((ticket, i) => {
        const day = new Date(ticket.timeSet);
        ticket.nameUser = searchUserID(ticket.userId);

        return result.push(
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{ticket.nameUser}</td>
            <td>{ticket.nameMovie}</td>
            <td>{ticket.showtimes.nameTheater}</td>
            <td>{day.getDate() + "/" + day.getMonth() + "/" + day.getFullYear()}</td>
            <td>
              <span className="edit" onClick={() => handleModal(ticket.id)}>
                {t("auth.show")}
              </span>
              &nbsp;
              <span className="delete" onClick={() => handleDeleteMovie(ticket)}>
                {t("auth.delete")}
              </span>
            </td>
            <div className={isOpenModal === ticket.id ? "" : "none"}>
              <ShowTicket
                passIsOpen={passIsOpen}
                isOpenModal={isOpenModal}
                ticket={ticket}
              />
            </div>
          </tr>
        );
      });
    return result;
  };

  const handleDeleteMovie = (ticket) => {
    dispatch(adminActions.deleteTicket(ticket));
    const index = searchIndex(ticket.id);
    if (index !== -1) {
      setDeleteMovie(index);
    }
  };

  const searchIndex = (id) => {
    let index = -1;
    listTickets.forEach((ticket, i) => {
      if (ticket.id === id) index = i;
    });
    return index;
  };

  return (
    <div className="wrapperAdminUsers">
      {currentUser && currentUser.email === "admin@admin"
        ? showAdminTicket()
        : checkAdmin()}
    </div>
  );
};

export default ManagementTicket;
