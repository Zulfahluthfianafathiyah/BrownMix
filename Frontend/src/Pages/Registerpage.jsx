import { useState } from 'react';
import {useDispatch} from 'react-redux';
import {createPelanggan} from '../Redux/action/user.action';

function Registerpage() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
      email: '',
      password: '',
      username: '',
      passwordConfirm: '',
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
          const pelangganRegister ={
          email:userData.email,
          username:userData.username,
          password:userData.password,
          passwordConfirm:userData.passwordConfirm,
        };
      dispatch(createPelanggan(pelangganRegister))
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-md flex p-6 bg-white ">
        <div className="w-full p-6">
          <h2 className="text-3xl font-semibold mb-6 text-center text-pink-300">REGISTER</h2>
          <form className="flex flex-col gap-4" onSubmit={handleRegister}>

            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={userData.username}
                onChange={(e) => setUserData({...userData, [e.target.name]: e.target.value})}
                placeholder="Masukkan username"
                className="mt-1 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={(e) => setUserData({...userData, [e.target.name]: e.target.value})}
                placeholder="Masukkan email"
                className="mt-1 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={userData.password}
                onChange={(e) => setUserData({...userData, [e.target.name]: e.target.value})}
                placeholder="Masukkan password"
                className="mt-1 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                id="passwordConfirm"
                name="passwordConfirm"
                value={userData.passwordConfirm}
                onChange={(e) => setUserData({...userData, [e.target.name]: e.target.value})}
                placeholder="Konfirmasi password"
                className="mt-1 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-300 text-white p-3 rounded-md mt-4 hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
            >
              Daftar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registerpage;
