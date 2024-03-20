import React, { useState } from "react";
import courses from "../Database/courses.json";
import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { BsThreeDotsVertical } from "react-icons/bs";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  return (
    <div className="p-4">
      <h1>Dashboard</h1> <hr />
      <h5>Course</h5>
      <input
        value={course.name}
        className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <input
        value={course.number}
        className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <input
        value={course.startDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        value={course.endDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />
      <button onClick={addNewCourse}>Add</button>
      <button onClick={updateCourse}>Update</button>
      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: "300px" }}>
              <div className="card">
                <div className="card-image">
                  <BsThreeDotsVertical
                    className="card-icon"
                    style={{ color: "white" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{course.name}</h5>
                  <p className="card-text">{course.number}</p>
                  <p className="card-text">
                    {course.startDate} - {course.endDate}
                  </p>
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}`}
                  >
                    {course.name}
                    <button
                      onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                    >
                      Delete
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
