const users = [
    { id: 1, name: "kalyan"},
]
export const createUser = (name)=>{
    const u = {id: users.length+1, name: name}; //Create
    users.push(u);
    return u;
}
export const getAll =() => users; 
export const getById = (id)=>{   // Read
    const u = users.find(u=> u.id===id ); 
    return  u
}
export const updateUser =(id, name)=>{
    const user = users.find(u => u.id === id); // Update
    if (!user) return null;
    user.name = name;
    return user;
}

export const deleteUser = (id)=>{
    const index = users.findIndex(u => u.id === id); // Delete
    if (index === -1) return false;
    users.splice(index, 1);
    return true;
}

