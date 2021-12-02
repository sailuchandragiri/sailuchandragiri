

var style1={
    textDecoration:"lineThrough",
    background:"red",
}
export const TodoList = ({list, handleToggle})=> {
    return <div>
        {list.map((e) => (
        
            <div key={e.id}>

                <input type="checkbox" 
                    style={style1}

                onClick={() => {
                    handleToggle(e.id); 
                }} 
                ></input>
                {e.title}
            </div>
        ))}
    </div>
}