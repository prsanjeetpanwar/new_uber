import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../../components/LocationSearchPanel';
import VehiclePanel from '../../components/VehiclePanel';
import ConfirmRide from '../../components/ConfirmRide';
import WaitingForDriver from '../../components/WaitingForDriver';
import LookingForDriver from '../../components/LookingForDirver';

const UserHome = () => {
  const [pickUp, setPickup] = useState('');
  const [dropOff, setDropOff] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const [vehicleFound,setVehicleFound]=useState(false)
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [activeField, setActiveField] = useState(null);
  

  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const VehicleFoundRef=useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelRef.current) {
      gsap.to(panelRef.current, {
        height: panelOpen ? '70%' : '0%',
        duration: 0.3,
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    gsap.to(vehiclePanelRef.current, {
      transform: vehiclePanel ? 'translateY(0)' : 'translateY(100%)',
    });
  }, [vehiclePanel]);

  useGSAP(() => {
    gsap.to(confirmRidePanelRef.current, {
      transform: confirmRidePanel ? 'translateY(0)' : 'translateY(100%)',
    });
  }, [confirmRidePanel]);

  useGSAP(() => {
    gsap.to(waitingForDriverRef.current, {
      transform: waitingForDriver ? 'translateY(0)' : 'translateY(100%)',
    });
  }, [waitingForDriver]);

  useGSAP(() => {
    gsap.to(VehicleFoundRef.current, {
      transform: vehicleFound ? 'translateY(0)' : 'translateY(100%)',
    });
  }, [vehicleFound]);
  

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber Logo"
      />

      <div className="w-screen h-screen">
        <img
          className="h-full w-full object-cover"
          src="https://s.wsj.net/public/resources/images/BN-XR453_201802_M_20180228165619.gif"
          alt="Background"
        />
      </div>

      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            onClick={() => setPanelOpen(!panelOpen)}
            className={`absolute right-6 top-6 text-2xl transition-transform duration-300 ${
              panelOpen ? 'rotate-180' : ''
            }`}
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>

          <h4 className="text-2xl font-semibold">Find a trip</h4>

          <form onSubmit={handleSubmit} className="relative py-3">
            <div className="line absolute h-16 w-1 top-[50%] -translate-y-1/2 left-5 bg-gray-700 rounded-full"></div>

            <input
              onClick={() => setPanelOpen(true)}
              value={pickUp}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full"
              type="text"
              placeholder="Add a pick-up location"
            />

            <input
              onClick={() => setPanelOpen(true)}
              value={dropOff}
              onChange={(e) => setDropOff(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>

        <div ref={panelRef} className="pl-5 bg-white h-0">
          <LocationSearchPanel
            suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
            setPickup={setPickup}
            setDestination={setDropOff}
            activeField={activeField}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="fixed z-10 translate-y-full bottom-0 w-full bg-white p-3 py-10 pt-12"
      >
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
      </div>

      <div
        ref={confirmRidePanelRef}
        className="fixed z-10 translate-y-full bottom-0 w-full bg-white p-3 py-6 pt-12"
      >
        <ConfirmRide
          setVehiclePanel={setVehiclePanel}
          setConfirmRidePanel={setConfirmRidePanel}
          setVehicleFound={setVehicleFound}
        />
      </div>

      <div ref={VehicleFoundRef} className="fixed z-10 translate-y-full bottom-0 w-full bg-white p-3 py-6 pt-12">
        <LookingForDriver
        setVehicleFound={setVehicleFound}
        />
      </div>

      <div
        ref={waitingForDriverRef}
        className="fixed z-10 translate-y-full bottom-0 w-full bg-white p-3 py-6 pt-12"
      >
        <WaitingForDriver
          setWaitingForDriver={setWaitingForDriver}
          waitingForDriver={ waitingForDriver}
        />
      </div>
    </div>
  );
};

export default UserHome;
