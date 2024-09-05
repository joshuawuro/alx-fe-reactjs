function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg sm:p-4 md:p-8 md:max-w-xs sm:max-w-xs">
      <img
        src="https://via.placeholder.com/150"
        className="rounded-full mx-auto md:w-36 md:h-36 sm:w-24 sm:h-24"
        alt="User"
      />
      <h1 className="text-xl text-blue-800 my-4 md:text-xl sm:text-lg">
        John Doe
      </h1>
      <p className="text-gray-600 text-base sm:text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
