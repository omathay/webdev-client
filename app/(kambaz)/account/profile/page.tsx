import Link from "next/link";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1 className="mb-3 text-2xl font-semibold">Profile</h1>
      <input
        defaultValue="alice"
        placeholder="username"
        className="wd-username mb-2 w-64 rounded border border-neutral-300 px-3 py-2"
      />
      <br />
      <input
        defaultValue="123"
        placeholder="password"
        type="password"
        className="wd-password mb-2 w-64 rounded border border-neutral-300 px-3 py-2"
      />
      <br />
      <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" className="wd-firstname mb-2 w-64 rounded border border-neutral-300 px-3 py-2"/>
      <br />
      <input
        defaultValue="Wonderland"
        placeholder="Last Name"
        id="wd-lastname"
        className="wd-lastname mb-2 w-64 rounded border border-neutral-300 px-3 py-2"
      />
      <br />
      <input defaultValue="2000-01-01" type="date" id="wd-dob" className="wd-dob mb-2 w-64 rounded border border-neutral-300 px-3 py-2"/>
      <br />
      <input defaultValue="alice@wonderland" type="email" id="wd-email" className="wd-email mb-2 w-64 rounded border border-neutral-300 px-3 py-2" />
      <br />
      <select defaultValue="FACULTY" id="wd-role" className="wd-role mb-2 h-8 w-64 rounded border border-neutral-300 px-3 py-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <br />
      <Link href="/account/signin" className="mb-2 block w-64 rounded bg-red-600 px-3 py-2 text-center text-white no-underline">Sign out</Link>
    </div>
  );
}