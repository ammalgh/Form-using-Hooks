import { useState } from "react";
import "./App.css";


function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");
  const [english, setEnglish] = useState("");
  const [experience, setExperience] = useState("");
  const [relatives, setRelatives] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length < 4) {
      setError("The name must be at least 4 letters");
      return;
    }

    const userAge = new Date().getFullYear() - new Date(age).getFullYear();
    if (userAge < 18 || userAge > 70) {
      setError("Age must be between 18 and 70");
      return;
    }

    if (!city) {
      setError("You must select the city");
      return;
    }

    if (!salary) {
      setError("You must choose the expected salary");
      return;
    }

    if (!english || !experience || !relatives) {
      setError("All questions must be answered");
      return;
    }

    setError("");
    setIsModalOpen(true);
  };

  return (
    <>
    
    <div className="max-w-xl mx-auto mt-10 p-4">
      <div className="border-4 border-[#243c5a] px-8 py-8 rounded-md shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Age:
            </label>
            <input
              type="date"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              City:
            </label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">Select the city</option>
              <option value="Riyadh">Riyadh</option>
              <option value="Dammam">Dammam</option>
              <option value="Jeddah">Jeddah</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              {" "}
              Expected Salary:
            </label>
            <select
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            >
              <option value=""> Select Salary</option>
              <option value="3000-8000">3000 to 8000</option>
              <option value="9000-13000">9000 to 13000</option>
              <option value="15000+">15000 and above</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Describe the reason for applying for the job :
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Are you fluent in the English language?{" "}
            </label>
            <div className="mt-1 space-x-4">
              <label>
                <input
                  type="radio"
                  value="yes"
                  checked={english === "yes"}
                  onChange={(e) => setEnglish(e.target.value)}
                  required
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  value="no"
                  checked={english === "no"}
                  onChange={(e) => setEnglish(e.target.value)}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Do you have experience?{" "}
            </label>
            <div className="mt-1 space-x-4">
              <label>
                <input
                  type="radio"
                  value="yes"
                  checked={experience === "yes"}
                  onChange={(e) => setExperience(e.target.value)}
                  required
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  value="no"
                  checked={experience === "no"}
                  onChange={(e) => setExperience(e.target.value)}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Do you have relatives who work in the same company?{" "}
            </label>
            <div className="mt-1 space-x-4">
              <label>
                <input
                  type="radio"
                  value="yes"
                  checked={relatives === "yes"}
                  onChange={(e) => setRelatives(e.target.value)}
                  required
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  value="no"
                  checked={relatives === "no"}
                  onChange={(e) => setRelatives(e.target.value)}
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="mt-4 bg-[#476488] text-white p-2 rounded-md shadow-sm"
          >
            Submit
          </button>
        </form>

        {error && (
          <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="bg-black bg-opacity-50 absolute inset-0"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="bg-white p-4 rounded-md shadow-md relative z-10">
            <h2 className="text-lg font-bold">
              {" "}
              Your request has been submitted successfully
            </h2>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 bg-blue-500 text-white p-2 rounded-md shadow-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default App;
