import { useDispatch, useSelector } from "react-redux";
import { setSignupUser } from "../redux/features/userSlice";
import { useState } from "react";
import { setLogout } from "../redux/features/userSlice";
import { useNavigate, Link } from "react-router-dom"; // Added Link import

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { signupUsers, loginUser} = useSelector((state) => state.user);
    const [newUser, setNewUser] = useState({
        id: Date.now(),
        name: "",
        email: "",
        password: "",
        conformPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewUser((previousUser) => ({
            ...previousUser,
            [name]: value
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        let foundUser = signupUsers.find((u) => u.email === newUser.email);
        if (foundUser) {
            // Changed to alert for better UX, and removed unreachable return
            alert("User already exists");
            return;
        }
        if (newUser.password !== newUser.conformPassword) {
            alert("Passwords do not match");
            return;
        }
        dispatch(setSignupUser(newUser));
        navigate("/login");
    };
    const handleLogout = () => {
        dispatch(setLogout());
    };

    return (
      <div>
        {loginUser && Object.keys(loginUser).length > 0 && (
          <div>
            <h1 className="">{loginUser.name}</h1>
                    <p className="">{loginUser.email}</p>
                    <button onClick={handleLogout}>Logout</button>
          </div>
        )}

        {(!loginUser || Object.keys(loginUser).length === 0) && (
          <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
              <h1 className="text-2xl font-bold mb-6 text-center">Signup</h1>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={newUser.name}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={newUser.email}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={newUser.password}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="conformPassword"
                  value={newUser.conformPassword}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Sign Up
                </button>
              </form>
              <p className="text-center mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500 hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        )}

      </div>
    );
};

export default SignUp;