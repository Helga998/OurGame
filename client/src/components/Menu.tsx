import * as React from "react";
import { Link } from "react-router-dom";
// import axiosInstance, { SetAccessToken } from "../src/axiosInstance";
import type { UserType } from "./user.type";

type MenuProps = {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

export default function Menu({user, setUser} : MenuProps): JSX.Element {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary-subtle">
      <div className="container-fluid">
        <Link to={`/`} className="navbar-brand" >
          Hello
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to={`dogs/1`}
                className="nav-link active"
                aria-current="page"
              >
                Dogs
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link to={`about`} className="nav-link">
                About
              </Link>
            </li> */}

            {user?.email ? (
              <>
                <li className="nav-item"> {` Привет, ${user?.email}`}</li>
                {/* <li className="nav-item">
                  <button
                    className="nav-link"
                    onClick={async () => {
                      await axiosInstance.get("/auth/logout");
                      setUser(null);
                      SetAccessToken("");
                    }}
                  >
                    Logout
                  </button>
                </li> */}
                <li className="nav-item">
                  <Link to={`dogs`} className="nav-link">
                    Dogs
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link to={`signIn`} className="nav-link">
                    Войти
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={`signUp`} className="nav-link">
                    Зарегистрироваться
                  </Link>
                </li>
              </>
            )} 
          </ul>
        </div>
      </div>
    </nav>
  );
}
