import AdminLayout from "../../components/layouts/AdminLayout";
import { PeopleIcon } from '../../assets/icons/index';
import { MicrophoneIcon, ArrowUpOnSquareIcon } from '@heroicons/react/24/outline'

const Dashboard = () => {
    return (
        <AdminLayout >
            <div className="grid grid-cols-12 p-5 xl:p-7 gap-4 xl:gap-7 text-white animate__animated animate__fadeIn">
                <div className="col-span-12 lg:col-span-7 h-40 lg:h-56 xl:h-80 rounded-md shadow-md
              bg-gradient-to-r from-cyan-500 to-blue-500">
                    <div className='flex h-full'>
                        <div className="w-1/2 h-full flex flex-col justify-center gap-4">
                            <p className="text-2xl pl-10 block">
                                Datos de muestra
                            </p>
                            <p className="text-sm pl-10 block">descripción...</p>
                        </div>
                        <div className="w-1/2">
                            <div className="flex h-full justify-end items-end pr-10">
                                <PeopleIcon classes="h-48 lg:h-52 xl:h-80" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-5 h-56 xl:h-80 gap-y-4 xl:gap-7 flex flex-col ">

                    <div className="h-1/2 flex items-center pl-10  rounded-md shadow-md
                bg-gradient-to-r from-indigo-500 to-purple-500">
                        <div className="h-full flex items-center justify-center gap-4">
                            <div className="h-12 w-12 rounded-md bg-indigo-400 flex justify-center items-center">

                                <MicrophoneIcon className="w-8 h-8" />

                            </div>
                            <div>
                                <p className="text-2xl ">
                                    Datos de muestra
                                </p>
                                <p className="text-sm ">descripción...</p>
                            </div>

                        </div>
                    </div>

                    <div className="h-1/2 flex items-center pl-10 rounded-md shadow-md
                bg-gradient-to-r from-blue-800 to-blue-600">
                        <div className="h-full flex items-center justify-center gap-4">
                            <div className="h-12 w-12 rounded-md bg-blue-600 flex justify-center items-center">
                                <ArrowUpOnSquareIcon className="w-8 h-8" />
                            </div>
                            <div>
                                <p className="text-2xl ">
                                Datos de muestra
                                </p>
                                <p className="text-sm ">descripción...</p>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </AdminLayout>
    );
}

export default Dashboard;
