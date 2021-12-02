import React from "react";
import data from "../data.json";

//Dashboard creade with the movie names and description
export const Dashboard = () => {
    return (
        <div className="des">
            {data.movies.map((movie) => (
                <div>
                    <p>{movie.name}</p>
                    <p>{movie.description}</p>
                    <button>Book</button>
                </div>
            ))}
        </div>
    );
}