import { useState, useEffect } from "react";
import AdminLayout from "../../components/layouts/AdminLayout";

const Users = () => {

    const [users, setUsers] = useState([])
    const urlAPI = 'http://localhost:3001/users'

    const getUsers = async() => {
        try{
            const response = await fetch(urlAPI)
            const data = await response.json()
            console.log(data)
            setUsers(data)
        } catch(err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <AdminLayout title="Usuarios">
            <div className="grid grid-cols-12 p-5 xl:p-7 gap-4 xl:gap-7 animate__animated animate__fadeIn">
                
            </div>
        </AdminLayout>
    );
}

export default Users;
