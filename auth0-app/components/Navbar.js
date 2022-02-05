import React from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

export default function Navbar() {
  const { user } = useUser();

  return (
    <nav className={styles.nav}>
      <Link href="/">Navbar</Link>
      <div>
        {user ? (
          <div>
            <a style={{ marginRight: 8 }} href="/profile">
              Profile
            </a>
            <button>
              <a href="/api/auth/logout">Logout</a>
            </button>
          </div>
        ) : (
          <button>
            <a href="/api/auth/login">Login</a>
          </button>
        )}
      </div>
    </nav>
  );
}
