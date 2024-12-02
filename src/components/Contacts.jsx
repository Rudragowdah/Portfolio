import { CONTACT } from "../constants";
const Contacts = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <h1 className="text-4xl text-center my-10">Get in Touch</h1>
        <div className="text-center tracking-tighter">
            <p className="my-4">{CONTACT.address}</p>
            <p className="my-4">{CONTACT.phoneNo}</p>
            <a href="#" className="border-b">{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contacts
