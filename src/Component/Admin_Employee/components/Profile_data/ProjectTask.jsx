// import React from 'react';
// import './Profile.css'; 
// import { NavLink,Routes, Route } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faCalendarAlt, faClipboardList, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
// import Leave from './Leave';


// const assignedTasks = [
//     { employee: 'Lokendra Pandey', id: 'RWI123', department: 'Design', taskDetail: 'Link/doc.pdf', date: 'July 14, 2023', status: 'Pending' },
// { employee: 'Backend Group', id: '', department: 'Backend', taskDetail: 'Link/doc.pdf', date: 'July 14, 2023', status: 'Pending' },
//     { employee: 'Lokendra Pandey', id: 'RWI123', department: 'Design', taskDetail: 'Link/doc.pdf', date: 'July 14, 2023', status: 'Pending' },
// { employee: 'Frontend Group', id: '', department: 'Frontend', taskDetail: 'Link/doc.pdf', date: 'July 14, 2023', status: 'Pending' },
//     { employee: 'Lokendra Pandey', id: 'RWI123', department: 'Design', taskDetail: 'Link/doc.pdf', date: 'July 14, 2023', status: 'Pending' },
// ];

// const completedTasks = [
//     { employee: 'Lokendra Pandey', id: 'RWI123', department: 'Design', taskDetail: 'Link/doc.pdf', date: 'July 14, 2023', status: 'completed' },
// { employee: 'Backend Group', id: '', department: 'Backend', taskDetail: 'Link/doc.pdf', date: 'July 14, 2023', status: 'completed' },
//     { employee: 'Lokendra Pandey', id: 'RWI123', department: 'Design', taskDetail: 'Link/doc.pdf', date: 'July 14, 2023', status: 'completed' },
// { employee: 'Frontend Group', id: '', department: 'Frontend', taskDetail: 'Link/doc.pdf', date: 'July 14, 2023', status: 'completed' },
// ];

// const TaskTable = ({ title, tasks }) => {
//     return (
// <div className="mb-4  text-nowra relative">

//             <h5 className='absolute -top-16 left-44 text-3xl '>{title}</h5>
//             <table className="table table-striped table-hover table-bordered  "  style={{ fontSize: '22px', width: '90%', margin:'130px 0 0px 150px'   }} >
// <thead className="thead-light text-center text-nowrap " >
//                     <tr >
//                         <th>Employee/Group</th>
//                         <th>Employee ID</th>
//                         <th>Department</th>
//                         <th>Task Detail</th>
//                         <th>Applied Date</th>
//                         <th>Status</th>
//                     </tr>
//                 </thead>
//                 <tbody >
//                     {tasks.map((task, index) => (
//                         <tr key={index} >
//                             <td>
//                                 <img src="https://media.licdn.com/dms/image/D4D03AQGW5q-ed5fuKw/profile-displayphoto-shrink_200_200/0/1715247234088?e=2147483647&v=beta&t=g__xbk7kXoiStGnzMmIw_PpAHbZiRDuM5AJ5CMoAIuc" alt="avatar" className="rounded-circle mr-2  w-25 " />
//                                 {task.employee}
//                             </td>
//                             <td>{task.id}</td>
//                             <td>{task.department}</td>
//                             <td><a href="#">{task.taskDetail}</a></td>
//                             <td>{task.date}</td>
//                             <td className={task.status === 'completed' ? 'text-success' : 'text-warning'}>{task.status}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// const ProjectTask = () => {
//     return (
//         <div className="container mt-4 ">
//             <TaskTable title="Assigned Task" tasks={assignedTasks}  />
//             <TaskTable title="Completed Task" tasks={completedTasks} />
//         </div>
//     );
// };

// export default ProjectTask;


import React from 'react';
import './Profile.css'; 
import { NavLink, Routes, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendarAlt, faClipboardList, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import Leave from './Leave';

const assignedTasks = [
    { employee: 'Lokendra Pandey', id: 'RWI123', department: 'Design', taskDetail: 'Link/doc.pdf', date: 'July 14, 2023', status: 'Pending' },
    { employee: 'Backend Group', id: '', department: 'Backend', taskDetail: 'Link/doc.pdf', date: 'July 14, 2023', status: 'Pending' },
    { employee: 'Lokendra Pandey', id: 'RWI123', department: 'Design', taskDetail: 'Link/doc.pdf', date: 'July 14, 2023', status: 'Pending' },
    { employee: 'Frontend Group', id: '', department: 'Frontend', taskDetail: 'Link/doc.pdf', date: 'July 14, 2023', status: 'Pending' },
    { employee: 'Lokendra Pandey', id: 'RWI123', department: 'Design', taskDetail: 'Link/doc.pdf', date: 'July 14, 2023', status: 'Pending' },
];

const completedTasks = [
    { employee: 'Lokendra Pandey', id: 'RWI123', department: 'Design', taskDetail: 'Link/doc.pdf', date: 'July 14, 2023', status: 'completed' },
    { employee: 'Backend Group', id: '', department: 'Backend', taskDetail: 'Link/doc.pdf', date: 'July 14, 2023', status: 'completed' },
    { employee: 'Lokendra Pandey', id: 'RWI123', department: 'Design', taskDetail: 'Link/doc.pdf', date: 'July 14, 2023', status: 'completed' },
    { employee: 'Frontend Group', id: '', department: 'Frontend', taskDetail: 'Link/doc.pdf', date: 'July 14, 2023', status: 'completed' },
];

const TaskTable = ({ title, tasks }) => {
    return (
        <div className="mb-4 text-nowrap relative " style={{ marginTop:'50px'}}>
            <h5 className='absolute top-20 left-[270px] text-3xl'>{title}</h5>
            <table className="table table-striped table-hover table-bordered transparent-table" style={{ fontSize: '20px', width: '80%', margin: '130px 0 0px 260px' }}>
                <thead className="thead-light text-center text-nowrap">
                    <tr>
                        <th>Employee/Group</th>
                        <th>Employee ID</th>
                        <th>Department</th>
                        <th>Task Detail</th>
                        <th>Applied Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={index}>
                            <td>
                                <img src="https://media.licdn.com/dms/image/D4D03AQGW5q-ed5fuKw/profile-displayphoto-shrink_200_200/0/1715247234088?e=2147483647&v=beta&t=g__xbk7kXoiStGnzMmIw_PpAHbZiRDuM5AJ5CMoAIuc" alt="avatar" className="rounded-circle mr-2 w-25" />
                                {task.employee}
                            </td>
                            <td>{task.id}</td>
                            <td>{task.department}</td>
                            <td><a href="#">{task.taskDetail}</a></td>
                            <td>{task.date}</td>
                            <td className={task.status === 'completed' ? 'text-success' : 'text-warning'}>{task.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

const ProjectTask = () => {
    return (
        <div className="project-task-container container mt-3">
            <TaskTable title="Assigned Task" tasks={assignedTasks} />
            <TaskTable title="Completed Task" tasks={completedTasks} />
        </div>
    );
};

export default ProjectTask;

