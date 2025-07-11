import React from 'react';
import { Avatar } from "@mui/material";

export default function TeacherInfo(){
    return(
        <div className='main flex justify-around'>
            <div className="left teacher_info">
                    <div className="bg-white p-4 rounded-lg shadow-md w-500 h-50 max-w-md text-right">
                  <div className="flex items-right space-x-40">
        <Avatar
          alt="Teacher Avatar"
          src=""
          sx={{ width: 64, height: 64 }}
        />
        <div>
          <h2 className="text-lg font-semibold">Mr. Ashutosh Atulkar</h2>
          <p className="text-sm text-gray-600">Subject: Computer Science</p>
          <p className="text-sm text-gray-600">Role: Class Teacher</p>
        </div>
      </div>
    </div>
            </div>

      <div className="right login_info">
      <div className="bg-white p-4 rounded-lg shadow-md w-500 h-50 max-w-md">
      <div className="flex items-right space-x-40">
        <Avatar
          alt="Teacher Avatar"
          src=""
          sx={{ width: 56, height: 56 }}
        />
        <div>
          <p className="text-sm text-gray-600">User_name: ashuu123</p>
          <p className="text-sm text-gray-600">Email: ashutosh@example.com</p>
          <p className="text-sm text-gray-600">Phone: +91 98765 43210</p>
          <p className="text-sm text-gray-600">School: ABC Public School</p>
          <p className="text-xs text-blue-600 mt-1">Logged in: Jul 10, 2025 — 07:00 AM</p>
          <p className="text-xs text-green-600 mt-1">Last login: Jul 9, 2025 — 6:45 PM</p>
        </div>
      </div>
    </div>
            </div>
        </div>
    )
}