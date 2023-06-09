import { useState, useEffect } from "react";
import moment from 'moment-timezone';
import AdminLayout from "../../components/layouts/AdminLayout";

moment.tz.setDefault('UTC');

const Users = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const urlAPI = 'https://keyence-backend-eva8.onrender.com/users'

  const getUsers = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(urlAPI)
      const data = await response.json()
      console.log(data)
      setUsers(data)
    } catch (err) {
      console.error(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <AdminLayout title="Usuarios">

      <div className="flex flex-col animate__animated animate__fadeIn">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-200 border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      User ID
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Username
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Fecha
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Punch in
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Punch out
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {!isLoading ?
                    users.map(user => (
                      <tr key={`tr-${user.userId}-${user.userName}`} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.userId}</td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {user.userName}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {moment(user.date).format('DD/MM/YYYY')}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {moment(user.punchIn).format("HH:mm:ss A")}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {moment(user.punchOut).format("HH:mm:ss A")}
                        </td>
                      </tr>
                    ))
                    :
                    (
                      // Creating array of 4 length only to not repeat 4 times html code
                      new Array(6).fill().map((_, i) => (
                        <tr key={`tr-${i}`} className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td className="px-6 py-4">
                            <div className="rounded-full bg-slate-300 h-2 w-1/3 animate-pulse"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="rounded-full bg-slate-300 h-2 w-2/3 animate-pulse"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="rounded-full bg-slate-300 h-2 w-2/3 animate-pulse"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="rounded-full bg-slate-300 h-2 w-2/3 animate-pulse"></div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="rounded-full bg-slate-300 h-2 w-2/3 animate-pulse"></div>
                          </td>
                        </tr>
                      ))
                    )
                  }
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
