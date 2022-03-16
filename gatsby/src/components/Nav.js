import * as React from 'react';
import { Link } from 'gatsby';

export default function Navigation() {
  return (
    <nav className="bg-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link to="/" className="nav-item" activeClassName="active">
                  Home
                </Link>
                <Link
                  to="/offices"
                  className="nav-item"
                  activeClassName="active"
                >
                  Offices
                </Link>
                <Link
                  to="/studios"
                  className="nav-item"
                  activeClassName="active"
                >
                  Studios
                </Link>
                <Link
                  to="/treatment-rooms"
                  className="nav-item"
                  activeClassName="active"
                >
                  Treatment Rooms
                </Link>
                <Link
                  to="/contact"
                  className="nav-item"
                  activeClassName="active"
                >
                  Contact & Location
                </Link>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            {/* <!-- Mobile menu button --> */}
            <button
              id="toggle"
              type="button"
              className="bg-red-900 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* <!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            --> */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* <!--
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            --> */}
              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Mobile menu, show/hide based on menu state. --> */}
      <div className="hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <Link to="/" className="block nav-item" activeClassName="active">
            Home
          </Link>
          <Link
            to="/offices"
            className="block nav-item"
            activeClassName="active"
          >
            Offices
          </Link>
          <Link
            to="/studios"
            className="block nav-item"
            activeClassName="active"
          >
            Studios
          </Link>
          <Link
            to="/treatment-rooms"
            className="block nav-item"
            activeClassName="active"
          >
            Treatment Rooms
          </Link>
          <Link
            to="/contact"
            className="block nav-item"
            activeClassName="active"
          >
            Contact & Location
          </Link>
        </div>
      </div>
    </nav>
  );
}
