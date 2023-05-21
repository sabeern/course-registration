function Courses({ propsData }) {
  return (
    <div className="border-gray-300 border-2 m-4 rounded">
      <h1 className="heading">Register Your Courses</h1>
      {/* Starting of search part */}
      <form className="m-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="search-input"
            placeholder="Search for classes"
            onChange={propsData?.searchClasses}
            ref={propsData?.searchBox}
          />
          <button
            type="submit"
            className="search-button"
            onClick={propsData?.searchClasses}
          >
            Search
          </button>
        </div>
      </form>
      {/* End search part */}
      <div className="gap-4 grid lg:grid-cols-2 p-4">
        {/* Listing all courses in card */}
        {propsData?.courseList.map((course, index) => (
          <div
            key={index}
            className={
              course.isRegistered
                ? "selected-card"
                : "card transform hover:scale-105 hover:bg-opacity-50"
            }
          >
            <h2 className="text-lg font-semibold">{course.courseName}</h2>
            <p className="text-sm text-gray-600">{course.description}</p>
            <p className="text-sm text-gray-600 my-3">
              Attendees:{" "}
              <span className="btn text-primary ml-2 border-primary border-2">
                {course.numberOfAttendees}
              </span>
            </p>
            <div className="flex justify-end">
              {course.isRegistered ? (
                <div className="btn bg-red-300 text-white cursor-none">
                  Already Registered
                </div>
              ) : (
                <div
                  className="btn bg-secondary-100 text-secondary-200 cursor-pointer hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300"
                  onClick={() => propsData?.register(course)}
                >
                  Register
                </div>
              )}
            </div>
          </div>
        ))}
        {/* End of cards */}
      </div>
    </div>
  );
}

export default Courses;
