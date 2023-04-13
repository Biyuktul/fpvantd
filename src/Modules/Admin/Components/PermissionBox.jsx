import React, { useState } from 'react';
import '../styles/Permission.css';

const PermissionBox = () => {
  const [permissions, setPermissions] = useState({
    editProfile: false,
    deleteOwnAccount: false,
    deleteOthersAccount: false,
    sendReport: false,
    editReport: false,
  });

  const handlePermissionChange = (event) => {
    const { name, checked } = event.target;
    setPermissions((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handleSave = () => {
    // save to db
    console.log(permissions); // do something with the permissions
  };

  return (
    <div className="permission-box">
      <h2>Permissions</h2>
      <div className='permission-group'>
      <div className="permission-item">
        <input
          type="checkbox"
          name="editProfile"
          checked={permissions.editProfile}
          onChange={handlePermissionChange}
        />
        <label htmlFor="editProfile">Edit Profile</label>
      </div>
      <div className="permission-item">
        <input
          type="checkbox"
          name="deleteOwnAccount"
          checked={permissions.deleteOwnAccount}
          onChange={handlePermissionChange}
        />
        <label htmlFor="deleteOwnAccount">Delete Own Account</label>
      </div>
      <div className="permission-item">
        <input
          type="checkbox"
          name="deleteOthersAccount"
          checked={permissions.deleteOthersAccount}
          onChange={handlePermissionChange}
        />
        <label htmlFor="deleteOthersAccount">Delete Others' Accounts</label>
      </div>
      <div className="permission-item">
        <input
          type="checkbox"
          name="sendReport"
          checked={permissions.sendReport}
          onChange={handlePermissionChange}
        />
        <label htmlFor="sendReport">Send Report</label>
      </div>
      <div className="permission-item">
        <input
          type="checkbox"
          name="editReport"
          checked={permissions.editReport}
          onChange={handlePermissionChange}
        />
        <label htmlFor="editReport">Edit Report</label>
      </div>
      <button className="save-button" onClick={handleSave}>
        Save
      </button>
      </div>
    </div>
  );
};

export default PermissionBox;
