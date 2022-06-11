export default function MyTable(props){
 const handleDelete=(event)=>{
        const id=event.target.id
        console.log("GGGGGG "+props.todos[id-1])
        
        fetch(`http://localhost:8080/api/delete?id=${id}`)
        .then((res)=>{
            return res.json()
        }).then(data=>{
            props.window(true);
        })
}
    return(
                <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Content</th>
                    <th scope="col">Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.todos.map((todo)=>{
                            return(
                              <div>
                               {todo.visible &&
                                <tr>
                                <th scope="row">{todo.id}</th>
                                <td>{todo.title}</td>
                                <td>{todo.content}</td>
                                <td>
                                    <button className="btn btn-primary" style={{marginRight:"2px"}}>Edit</button>
                                    <button className="btn btn-danger" style={{marginLeft:"2px"}} id={todo.id} onClick={handleDelete}>Delete</button>
                                </td>
                            </tr>
                               }
                                </div>
                            );
                        })
                    }
                </tbody>
                </table>

    );
}