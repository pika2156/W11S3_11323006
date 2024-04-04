import React, { useState } from 'react';
import './App.css';

function App() {
  // State untuk menyimpan data pengguna
  const [userData, setUserData] = useState({ nama: '', umur: '' });
  // State untuk menampilkan data pengguna yang sudah disimpan
  const [savedUserData, setSavedUserData] = useState(null);
  // State untuk menyimpan daftar tugas
  const [tasks, setTasks] = useState([]);
  // State untuk menyimpan tugas baru yang akan ditambahkan
  const [taskName, setTaskName] = useState('');

  // Fungsi untuk mengubah data pengguna
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value
    }));
  };

  // Fungsi untuk menyimpan data pengguna
  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedUserData(userData);
  };

  // Fungsi untuk menambahkan tugas baru ke daftar tugas
  const addTask = () => {
    if (taskName.trim() !== '') {
      setTasks([...tasks, taskName]);
      setTaskName('');
    }
  };

  // Fungsi untuk menghapus tugas dari daftar tugas
  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <div className="header">Implementasi Event Handling</div>
      {/* Formulir input data pengguna */}
      <div className="user-container">
        <h2>Data Pengguna</h2>
        <form onSubmit={handleSubmit}>
          <div className="data-item">
            <label>Nama:</label> 
            <input
              type="text"
              name="nama"
              value={userData.nama}
              onChange={handleChange}
              placeholder="Masukkan nama pengguna"
            />
          </div>
          <div className="data-item">
            <label>Umur:</label> 
            <input
              type="number"
              name="umur"
              value={userData.umur}
              onChange={handleChange}
              placeholder="Masukkan umur pengguna"
            />
          </div>
          <button type="submit">Simpan Data Pengguna</button>
        </form>
      </div>
      {/* Menampilkan data pengguna yang sudah disimpan */}
      {savedUserData && (
        <div className="user-container">
          <h2>Data Pengguna yang Disimpan</h2>
          <div className="data-item">
            <label>Nama:</label> {savedUserData.nama}
          </div>
          <div className="data-item">
            <label>Umur:</label> {savedUserData.umur}
          </div>
        </div>
      )}

      {/* Daftar tugas */}
      <div className="task-container">
        <h1>Task List</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter a task"
            value={taskName}
            onChange={e => setTaskName(e.target.value)}
          />
          <button onClick={addTask}>Add Task</button>
        </div>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => removeTask(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
