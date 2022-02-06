
import { NavLink } from "react-router-dom";
import { NavMain } from "../nav/navmain";
import "./header.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export function Header() {
  return (
    <header className="header">
      <div>
        <NavMain />
      </div>
    </header>
  );
}