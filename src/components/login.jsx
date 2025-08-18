import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../redux/features/userSlice";
import { Link } from "react-router-dom";
import { setLogout } from "../redux/features/userSlice";

const Login = () => {   
    const emailRef = useRef();
    const passRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { signupUsers, loginUser } = useSelector(state => state.user);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;

        if (!email || !pass) {
            setError("Please fill in all fields.");
            return;
        }

        const foundUser = signupUsers.find(user => user.email === email);

        if (foundUser) {
            if (foundUser.password === pass) {
                dispatch(setLogin(foundUser));
                setError("");
                navigate("/shop");
            } else {
                setError("Password does not match.");
            }
        } else {
            setError("User not found. Please sign up.");
            navigate("/signup");
        }
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
              <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  ref={emailRef}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  ref={passRef}
                  className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Login
                </button>
              </form>
              {error && (
                <p className="text-red-500 mt-4 text-center">{error}</p>
              )}
              <p className="text-center mt-4">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-500 hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
    );
};

export default Login;