import { IUser } from '../types/User';

interface IUsersTable {
  users: IUser[];
}

export default function UsersTable({ users }: IUsersTable) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="table-auto w-full rounded-md">
        <thead>
          <tr>
            <th className="bg-secondary text-columnLightBg px-4 py-2 w-1/4">
              Name
            </th>
            <th className="bg-secondary text-columnLightBg px-4 py-2 w-1/4">
              Username
            </th>
            <th className="bg-secondary text-columnLightBg px-4 py-2 w-1/4">
              Email
            </th>
            <th className="bg-secondary text-columnLightBg px-4 py-2 w-1/4">
              Phone
            </th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr
                key={user.id}
                className="odd:bg-columnBg even:bg-columnLightBg hover:bg-secondary hover:text-columnLightBg cursor-pointer"
              >
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.username}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center py-4 bg-columnBg">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
