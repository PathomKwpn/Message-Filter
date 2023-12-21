const UserList = ({ showData }:any) => {
  return (
    <div className="content">
      <div className="content-list">
        <ul>
          {showData.map((user: any) => {
            return (
              <li key={user.id}>
                <div>
                  <div></div>
                  <div> {`${user.first_name} ${user.last_name}`}</div>
                  <div></div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
