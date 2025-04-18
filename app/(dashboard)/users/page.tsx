import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1>Dashboard Users</h1>
      <ul className="mt-10">
        <li>
          <Link href="/users/1">User 1</Link>
        </li>
        <li>
          <Link href="/users/2">User 2</Link>
        </li>
        <li>
          <Link href="/users/3">User 3</Link>
        </li>
        <li>
          <Link href="/users/4">User 4</Link>
        </li>
      </ul>
    </div>
  );
};

export default Page;
