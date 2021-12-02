import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const UserDetail = () => {
    const {id} = useParams();
    const [user, setUser] = useState([]);

   
    useEffect(() => {
        fetch(`https://reqres.in/api/users/${id}`)
            .then((x) => x.json())
            .then((d) => {
                setUser(d.data);
        });
    },[id]);
       return (
            <div>
                 <div>
                     User details:
                     <br/>
                    <img src={user.avatar} alt="test"></img>
                    <h3>{user.first_name}</h3>
                    <h4>{user.last_name}</h4>
                    <p>{user.email}</p>
               </div>
            </div>
       );
};