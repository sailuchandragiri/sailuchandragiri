import { useEffect, useState } from "react";
import {Link} from "react-router-dom";


export const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://reqres.in/api/users")
        .then((x) => x.json())
        .then((d) => {
            setUsers(d.data);
        });
    },[]);

    return(
        <div>
            {users.map((e) => (
                <p><Link to={`/user/${e.first_name}`}>User: {e.first_name}</Link></p>
            ))} 
        </div>
    );
};

