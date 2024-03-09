import React from "react";

const students = [
    {
        id:1,
        name: "Ije",
    },
    {
        id:2,
        name:"Steve",
    },
    {
        id:3,
        name:"Bill",
    },
    {
        id:4,
        name:"jeff",
    },
];
function AttendanceBook(props) {
    return (
        <ul>
            {students.map((Student)=> {
                return<li>key={students.id}{Student.name}</li>
            })}
        </ul>
    );
}
export default AttendanceBook;