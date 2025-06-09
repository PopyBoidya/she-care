import { useState } from 'react';
import Swal from 'sweetalert2';

const RequestPads = () => {
  const buildingAndFloorData = {
    buildings: [
      {
        name: "Building A",
        floors: ["Ground Floor", "1st Floor", "2nd Floor"]
      },
      {
        name: "Building B",
        floors: ["Ground Floor", "1st Floor"]
      },
      {
        name: "Building C",
        floors: ["Ground Floor", "1st Floor", "2nd Floor", "3rd Floor"]
      }
    ]
  };

  const [floors, setFloors] = useState([]);

  // Controlled input na korar jonno handleChange remove kora hobe except building select er jonno floor update korar jonno
  const handleBuildingChange = (e) => {
    const selectedBuilding = buildingAndFloorData.buildings.find(b => b.name === e.target.value);
    setFloors(selectedBuilding ? selectedBuilding.floors : []);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const requestData = {
      building: formData.get('building'),
      floor: formData.get('floor'),
      specificLocation: formData.get('specificLocation'),
      urgencyLevel: formData.get('urgencyLevel'),
      additionalInfo: formData.get('additionalInfo'),
      yourNumber: formData.get('yourNumber'),
    };

    console.log("Form submitted with data:", requestData);

    Swal.fire({
      title: "Request Sent!",
      text: "Your anonymous request has been submitted successfully.",
      icon: "success",
      confirmButtonColor: "#dc3e7b"
    });

    // Form reset korar jonno:
    event.target.reset();
    setFloors([]);
  };

  return (
    <section className="bg-[#f9fafb] min-h-screen py-20 px-4 flex flex-col items-center justify-center">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-[#111827] font-inter">
        Request Sanitary Pads
      </h1>
      <p className="text-center text-base md:text-xl text-gray-700 mt-4 max-w-xl mx-auto font-inter">
        Submit an anonymous request and receive discreet delivery within 30 minutes
      </p>

      <div className="w-full flex justify-center mt-12 max-w-6xl mx-auto">
        <div className="w-full max-w-xl">
          <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Anonymous Pad Request</h2>
            <p className="text-gray-600 mb-6">
              Fill out the form below to request pads. No personal information required.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Building */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label className="block font-medium">
                    Building <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="building"
                    required
                    className="w-full mt-1 p-2 border rounded"
                    onChange={handleBuildingChange}
                    defaultValue=""
                  >
                    <option value="" disabled>Select building</option>
                    {buildingAndFloorData.buildings.map((building, idx) => (
                      <option key={idx} value={building.name}>
                        {building.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Floor */}
                <div>
                  <label className="block font-medium">
                    Floor <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="floor"
                    required
                    className="w-full mt-1 p-2 border rounded"
                    disabled={floors.length === 0}
                    defaultValue=""
                  >
                    <option value="" disabled>Select floor</option>
                    {floors.map((floor, idx) => (
                      <option key={idx} value={floor}>
                        {floor}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Specific Location */}
              <div>
                <label className="block font-medium">Specific Location (e.g. near room number)</label>
                <input
                  type="text"
                  name="specificLocation"
                  placeholder="e.g., Near washroom, Room 201, Main entrance"
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>

              {/* Your Number */}
              <div>
                <label className="block font-medium">Your Number</label>
                <input
                  type="tel"
                  name="yourNumber"
                  required
                  placeholder="01XXXXXXXXX"
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>

              {/* Urgency Level */}
              <div>
                <label className="block font-medium">
                  Urgency Level <span className="text-red-500">*</span>
                </label>
                <select
                  name="urgencyLevel"
                  required
                  className="w-full mt-1 p-2 border rounded"
                  defaultValue=""
                >
                  <option value="" disabled>How urgent is your request?</option>
                  <option value="🚨 Emergency (Immediate)">🚨 Emergency (Immediate)</option>
                  <option value="⚡ Urgent (Within 5 mins)">⚡ Urgent (Within 5 mins)</option>
                  <option value="📅 Normal (Within 15 mins)">📅 Normal (Within 15 mins)</option>
                </select>
              </div>

              {/* Additional Info */}
              <div>
                <label className="block font-medium">Additional Information</label>
                <textarea
                  name="additionalInfo"
                  rows="3"
                  placeholder="Any additional details..."
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>

              {/* Privacy Notice */}
              <div className="text-sm text-gray-500">
                <strong>Privacy Notice:</strong> This request is completely anonymous. We only collect
                location information to help volunteers assist you effectively. No personal data is stored or shared.
              </div>

              <button
                type="submit"
                className="bg-[#dc3e7b] text-white px-4 py-2 rounded hover:bg-[#c5336a]"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestPads;
