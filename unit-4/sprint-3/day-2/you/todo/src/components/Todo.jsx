import {useState} from "react";


function Todo(){

    const [text, setText] = useState(""); 
    const [todos, setTodos] = useState([]);

    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleAddTodo = () => {
        setTodos([...todos, text]);
        setText("");
    }

    /*const getRandomColor = () => {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      };
    
      const styles = {
        backgroundColor: getRandomColor(),
    };*/

    return (
        <div id="layout">
            {todos.map((e) => (
                <div>
                    <div id="add"><div id="ele">{e}</div>
                    <div id="circle"><div id="in"></div>
                    </div></div>
                </div>
            ))}
            <input id="place"
             value={text}
             onChange={handleChange} 
             type="text" 
             placeholder="Write something"/>
            <button id="text" onClick={handleAddTodo}>+</button>
            
        </div>
    );
}

export {Todo};