const users = [
    { id: 1, name: "kalyan"},
]
export const getAll = users; // get all users 
export const getById = (id)=>{ // get user by id
    users.find(u=> u.id===id );
}
export const createUser = (name)=>{
    const u = {id: users.length+1, name: name};
    users.push(u);
    return u;
}
export const updateUser =(id, name)=>{
    users.find(u=> u.id===id).name = name;
    return users.find(u=> u.id===id);
}
export const deleteUser = (id)=>{
    const index = users.findIndex(u=> u.id===id);
    users.splice(index, 1); 
}
