import { useState } from "react";

function MyModal(props){
    const [title,setTitle]=useState('');
    const [detail,setDetail]=useState('');
    const handleClick=()=>{
        if(title.length==0 || detail.length==0){
            alert('Empty fields not allowed');
        }else{
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: title,content:detail, is_visible:true })
            };
            fetch('http://localhost:8080/api/save',requestOptions)
            .then((res)=>{
                return res.json()
            }).then(data=>{
                props.window(true);
            })
        }
        
    }
    return(  
            <div className="modal fade" id="modelId" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Todo</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div className="modal-body">
                            
                            <div className="container">
                            <form>
                                {props.data!=null &&    
                                <div className="form-group">
                                    <input className="form-control" type="text" disabled />  
                                </div>
                                }
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)} />  
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="text" placeholder="Details" onChange={(e)=>setDetail(e.target.value)}/>  
                                </div>
                              

                            </form>

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick}  data-dismiss="modal">Save</button>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default MyModal;