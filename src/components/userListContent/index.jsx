const UserList = ({ showData }) => {
  return (
    <div className="content">
      <div className="content-list">
        <ul>
          {showData.map((user) => {
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
