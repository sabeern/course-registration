import { useEffect, useRef, useState } from "react";
import { courses } from "./Constant/courseDetails";
import Courses from "./components/Courses";
import RegisteredCourses from "./components/RegisteredCourses";

function App() {
  const [registeredCount, setRegisteredCount] = useState(0);
  const [registerCourse, setRegisteredCourse] = useState([]);
  const [courseList, setCourseList] = useState([]);
  const searchBox = useRef("");
  // Function performing search operation.
  const searchClasses = () => {
    let searchKeyword = searchBox.current.value.toLowerCase();
    setCourseList(
      courses.filter((val) => {
        if (val.courseName.toLowerCase().includes(searchKeyword)) return val;
      })
    );
  };
  // Adding a course into registered course and increase registered count.
  const register = (course) => {
    setRegisteredCount(registeredCount + 1);
    setRegisteredCourse([...registerCourse, course]);
    setCourseList(
      courseList.map((val) => {
        if (val.id === course.id) {
          ++val.numberOfAttendees;
          val.isRegistered = true;
        }
        return val;
      })
    );
  };
  // Loading all courses initialy.
  useEffect(() => {
    setCourseList(courses);
  }, []);
  return (
    <div className="bg-gray-100 font-body">
      {registeredCount > 0 && (
        //Component showing all registered courses.
        <RegisteredCourses propsData={{ registeredCount, registerCourse }} />
      )}
      {registeredCount < 3 && (
        //Component listing all courses.
        <Courses
          propsData={{ searchClasses, searchBox, courseList, register }}
        />
      )}
    </div>
  );
}

export default App;
