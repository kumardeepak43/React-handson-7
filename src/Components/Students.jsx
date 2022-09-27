import React,{useState} from 'react'

let studentDetails = {
  name:'',
  age:'',
  course:'',
  batch:''
}
const Students = () => {
  const [store,setStore] = useState(studentDetails);
  const [data,setData] = useState([]);
  const [edit,setEdit] = useState(false);
  const [hide,setHide] = useState(false);

  const editHandler = (e) => {
    const value = e.target.value
    setStore(store =>({...store,[e.target.name] : value}))
  }
  const addData = () => {
    if(edit){
      const updateData = data.map((row)=>row.id=== store.id ? store:row);
      setData(updateData);
      setEdit(false);
      setStore(studentDetails)
      setHide(!hide)
    }
    else{
      let listItems = data;
       const item = {
        id:data.length,
        ...store
       }
       listItems = [...data,item];
       setData(listItems);
       clearData();
       setHide(!hide)
    }
  }
  const clearData = () => {
    setStore(studentDetails);
  }
  const editRow = (row) => {
    setStore(row);
    setEdit(true);
    setHide(!hide)
  }
  const deleteRow = (id) =>{
    const filtered = data.filter(item=>item.id !== id);
    console.log(filtered);
    setData(filtered);
    }
  return (
    <>
    {hide ? null : <><div className='con'>
        <h1>Student Details</h1>
        <button className='new' onClick={()=>{setHide(!hide)}}>Add New Student</button>
      </div>
      <div className='tab'>
        <table className="table table-bordered">
          <thead>
            <tr className="table-primary">
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Course</th>
              <th scope="col">Batch</th>
              <th scope="col">Change</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
          {data && data.map((row,i) =>
            <tr className="table-primary">
              <th scope="row">{row.name}</th>
              <td>{row.age}</td>
              <td>{row.course}</td>
              <td>{row.batch}</td>
              <td><button onClick={()=>{editRow(row)}} className="btn btn-success">Edit</button></td>
              <td><button onClick={()=>{deleteRow(row.id)}} className="btn btn-danger">Delete</button></td>
            </tr>
          )}
          </tbody>
        </table>
      </div></> }
      {hide ? <div>
        <div className='container'>
          <input name='name' value={store.name} id='Name' placeholder='Name' onChange={editHandler}  className='input' required/>
          <input name='age' value={store.age} label='Age' placeholder='age' onChange={editHandler}  className='input' required/>
          <input name='course' value={store.course} label='course' placeholder='course' onChange={editHandler}  className='input' required/>
          <input name='batch' value={store.batch} label='Batch' placeholder='month' onChange={editHandler}  className='input' required/>
        </div>
        <div>
          <button onClick={addData} className="btn btn-success button">{edit ? 'Update' : 'submit'}</button>
          <button onClick={clearData} className="btn btn-danger button">Clear</button>
        </div>
      </div> : null}
    </>

  )
}


export default Students