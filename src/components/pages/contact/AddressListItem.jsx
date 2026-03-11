function AddressListItem({ children, text }) {
    return <li className="">
        {children}
        <span>{text}</span>
    </li>
}

export default AddressListItem;