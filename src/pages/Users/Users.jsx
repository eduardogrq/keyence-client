import { useState, useEffect } from "react";
import moment from 'moment';
import AdminLayout from "../../components/layouts/AdminLayout";

const Users = () => {

  const [users, setUsers] = useState([])
  const urlAPI = 'https://keyence-backend-eva8.onrender.com/users'

  const getUsers = async () => {
    try {
      const response = await fetch(urlAPI)
      const data = await response.json()
      console.log(data)
      setUsers(data)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <AdminLayout title="Usuarios">

      <div class="flex flex-col animate__animated animate__fadeIn">
        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="bg-gray-200 border-b">
                  <tr>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      User ID
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Username
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Date
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Punch in
                    </th>
                    <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Punch out
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={`tr-${user.userId}-${user.userName}`} class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.userId}</td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {user.userName}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {moment(user.date).format('DD/MM/YYYY HH:mm:ss')}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {moment(user.punchIn).format('DD/MM/YYYY HH:mm:ss')}
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {moment(user.punchIn).format('DD/MM/YYYY HH:mm:ss')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Users;
