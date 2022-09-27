const AddStudent = 'AddStudent';
const EditStudent = 'EditStudent';
const DeleteStudent = 'DeleteStudent';

export const ADD = () =>{
    return{
        type:AddStudent
    }
}

export const EDIT = () =>{
    return{
        type:EditStudent
    }
}

export const DELETE = () =>{
    return{
        type:DeleteStudent
    }
}