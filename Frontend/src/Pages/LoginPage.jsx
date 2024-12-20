import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginPelanggan } from '../Redux/action/user.action';

function LoginPage() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const pelangganLogin = {
        email: userData.email,
        password: userData.password,
      };
      const response = await dispatch(loginPelanggan(pelangganLogin));
      if (response?.role === 'admin') {
        console.log('Login berhasil sebagai admin');
      } else {
        setErrorMessage('Hanya admin yang dapat login.');
      }
    } catch (error) {
      console.log(error);
      setErrorMessage('Terjadi kesalahan. Silakan coba lagi.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-semibold mb-6 text-center text-pink-500">Login Admin</h2>
        {errorMessage && (
          <div className="text-red-500 text-center mb-4">{errorMessage}</div>
        )}
        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
              placeholder="Masukkan email"
              className="mt-1 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
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
              onChange={(e) => setUserData({ ...userData, [e.target.name]: e.target.value })}
              placeholder="Masukkan password"
              className="mt-1 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>
          <div className="flex justify-between items-center mt-3">
            <div className="text-sm text-gray-600">
              <Link to="/forgot-password" className="hover:underline">
                Lupa Password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-400 text-white p-3 rounded-md mt-4 hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            Masuk
          </button>
        </form>
        <div className="text-center mt-6">
          <span className="text-gray-600">Belum punya akun?</span>{' '}
          <Link to="/register" className="text-pink-600 hover:underline">
            Daftar di sini
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
