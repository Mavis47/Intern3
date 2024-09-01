import "../styles/header-two.css";
import Photo from "/logo.png";

export default function Header_two() {
  return (
    <div>
      <div className="header-two">
        <div className="img-one">
          <img src={Photo} alt="" />
        </div>
        <nav>
          <ul>
            <li><a href="/">HOME</a></li>
            <li>
              <a href="/about">ABOUT US</a>
            </li>
            <li>
              <button
                id="dropdownHoverButton"
                data-dropdown-toggle="dropdownHover"
                data-dropdown-trigger="hover"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
              >
                Dropdown hover{" "}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>

            <div style={{display: "flex",flexDirection: "column"}}
              id="dropdownHover"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul style={{display: "flex",flexDirection: "column",gap: "3px"}}
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownHoverButton"
              >
                <li>
                  <a
                    href="/services"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    First Home Buyer
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Buying Next Home
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Purchasing an Investment
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Review Current loans
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Commercial loans
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Asset Finance
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Vechicle Finance
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Personal Loan
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Self Manged Super fund (SMSF) Lending
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Other Services
                  </a>
                </li>
              </ul>
            </div>
            <li>
              <a href="/faq">FAQ'S</a>
            </li>
            <li>
              <button className="call-button">CALL ME ANYTIME</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
