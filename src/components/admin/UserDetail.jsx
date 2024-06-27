import { useContext } from "react";
import myContext from "../../context/myContext";

const UserDetail = () => {
    const context = useContext(myContext);
    const { getAllUser } = context;
    return (
        <div>
            <div>
                <div className="py-5 flex justify-between items-center">
                    <h1 className=" text-xl font-bold">All Users</h1>
                </div>

                {/* table  */}
                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left border border-collapse sm:border-separate border-gray-200" >
                        <tbody>
                            <tr>
                                <th scope="col"
                                    className="h-12 px-6 text-md border-l first:border-l-0 border-gray-200 text-slate-700 bg-slate-100 font-bold fontPara">
                                    No.
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md border-l first:border-l-0 border-gray-200 text-slate-700 bg-slate-100 font-bold fontPara">
                                    Name
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md border-l first:border-l-0 border-gray-200 text-slate-700 bg-slate-100 font-bold fontPara">
                                    Email
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md border-l first:border-l-0 border-gray-200 text-slate-700 bg-slate-100 font-bold fontPara">
                                    UID
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md border-l first:border-l-0 border-gray-200 text-slate-700 bg-slate-100 font-bold fontPara">
                                   Role
                                </th>

                                <th scope="col"
                                    className="h-12 px-6 text-md border-l first:border-l-0 border-gray-200 text-slate-700 bg-slate-100 font-bold fontPara">
                                    Date Added
                                </th>

                            </tr>
                            {
                                getAllUser.map((value, index) => {
                                    return (
                                        <tr key={index} className="text-gray-600">
                                            <td
                                                className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-200 stroke-slate-500 text-slate-500 ">
                                                {index + 1}
                                            </td>

                                            <td
                                                className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-200 stroke-slate-500 text-slate-500 first-letter:uppercase ">
                                                {value.name}
                                            </td>

                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-200 stroke-slate-500 text-slate-500 cursor-pointer ">
                                                {value.email}
                                            </td>

                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-200 stroke-slate-500 text-slate-500  cursor-pointer ">
                                                {value.uid}
                                            </td>

                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-200 stroke-slate-500 text-slate-500  cursor-pointer ">
                                                {value.role}
                                            </td>

                                            <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-200 stroke-slate-500 text-slate-500 cursor-pointer ">
                                                {value.date}
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UserDetail;