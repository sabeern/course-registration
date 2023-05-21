function RegisteredCourses({ propsData }) {
  return (
    <div className="border-gray-300 border-2 m-4 rounded">
      <h1 className="heading">Classes I have Registered</h1>
      {/* Checking registered count is greater than 3 */}
      {propsData?.registeredCount === 3 && (
        <p className="flex justify-center text-primary pl-3">
          (You have reached your maximum number of class registrations!)
        </p>
      )}
      <div className="gap-4 grid lg:grid-cols-2 p-4">
        {/* The cards display the registered courses. */}
        {propsData?.registerCourse.map((course, index) => (
          <div key={index} className="card">
            <h2 className="text-lg font-semibold">{course.courseName}</h2>
            <p className="text-sm text-gray-600">{course.description}</p>
          </div>
        ))}
        {/* End card */}
      </div>
    </div>
  );
}

export default RegisteredCourses;
