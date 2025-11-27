import { users } from "./users";
import "./List.css";

const List = () => {
    const listItems = users.map((user) => (
        <li
            key={user.id}
            className="list-item"
        >
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <div className="address">
                <p>Address:</p>
                <p>Street: {user.address.street}</p>
                <p>Suite: {user.address.suite}</p>
                <p>City: {user.address.city}</p>
                <p>Zipcode: {user.address.zipcode}</p>
            </div>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <div className="company">
                <p>Company:</p>
                <p>Name: {user.company.name}</p>
                <p>Catch Phrase: {user.company.catchPhrase}</p>
                <p>BS: {user.company.bs}</p>
            </div>
        </li>
    ));
    return <ul className="list">{listItems}</ul>;
};

export default List;
