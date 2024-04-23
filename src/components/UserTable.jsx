import React from 'react'

 const UserTable = ({users}) => {

    
  return (
    <>
    <h2>{users.length} sonuç bulundu</h2>
    <table className="table table-dark table-striped table-hover table-responsive">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">İsim</th>
      <th scope="col">Soy İsim</th>
      <th scope="col">Boy</th>
      <th scope="col">Kilo</th>
      <th scope="col">Kan Grubu</th>

    </tr>
  </thead>
  <tbody>

{users.map((user)=>(
    <tr key= {user.id}>
      <th>{user.id}</th>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.height}</td>
      <td>{user.weight}</td>
      <td>{user.bloodGroup}</td>
      
    </tr>
   ))}
  </tbody>
</table>
</>
  );
};
export default UserTable ;