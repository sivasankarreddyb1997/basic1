import { useState } from "react";
const Search = () => {
    const people = [
      { name: "AAA", number: "123456789", id: 1 },
      { name: "BBB", number: "39-44-5323523", id: 2 },
      { name: "CCC", number: "12-43-234345", id: 3 },
      { name: "DDD", number: "39-23-6423122", id: 4 }
    ];
  
    const [search, setSearch] = useState("");
  
    const handleSearch = (e) => {
      console.log("testing the ", e.target.value);
      setSearch(e.target.value);
    };
  
    return (
      <div>
        <h2> Phone Book </h2>
        Filter persons: <input type="text" onChange={handleSearch} /> <br />
        Numbers <br/>
        {people.map(person=> <p> {person.name}-{person.number} </p>)}
      </div>
    );
  };
  
  export default Search;