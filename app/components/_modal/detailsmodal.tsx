import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { AiOutlineLineChart } from "react-icons/ai";
import PinIcon from "../../../public/pin.png";
import Modal from "react-modal";
import Chart from 'chart.js/auto';
import  { CategoryScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { SearchResult } from '../../redux/types';


type props = {
    location: SearchResult;
    isOpen: boolean;
    onClose: () => void;
}

Chart.register(CategoryScale);


export const DetailsModal = ({location, isOpen, onClose}: props) => {
    const [viewChart, setViewChart] = useState(false);    
    const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Average Store Traffic',
                data: [
                    location.details?.avgStoreTraffic?.monday || 0,
                    location.details?.avgStoreTraffic?.tuesday || 0,
                    location.details?.avgStoreTraffic?.wednesday || 0,
                    location.details?.avgStoreTraffic?.thursday || 0,
                    location.details?.avgStoreTraffic?.friday || 0,
                    location.details?.avgStoreTraffic?.saturday || 0,
                    location.details?.avgStoreTraffic?.sunday || 0,
                ],
                backgroundColor: 'rgba(12, 111, 210, 0.8)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };
     const chartOptions = {
        scales: {
            y: {
                beginAtZero: false,
                min: 10,
                stepSize: 1,
            },
        },
    };

  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={`bg-white w-[90%] sm:w-[90%] lg:w-[480px] shadow-sm rounded-sm h-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-1`}
        overlayClassName={`bg-black bg-opacity-50 fixed inset-0 z-50`}
    >
        <div className={`flex flex-col justify-between`}>
           <div  className={`flex flex-col justify-between gap-3`}>
                <div className={`flex fleax-row items-center justify-between border-b-[1px] p-3 border-gray-300`}>
                    <div className={`flex flex-row items-center gap-2`}>
                        <Image src={PinIcon} alt="pin" width={40} height={40} />
                        <div>
                            <h2 className={`font-bold text-[15px]`}>{location.name}</h2>
                            <p className={`text-[12px] text-gray-400`}>{location.location.lat}, {location.location.lon}</p>
                        </div>
                    </div>

                    <div className={`flex flex-row items-center gap-2`}>
                        {location.details?.avgStoreTraffic && (
                                <div>
                                    <button className={`flex flex-row items-center gap-1 bg-transparent text-sm text-gray-400 hover:text-blue-500`} type="button" onClick={() => setViewChart(!viewChart)}>
                                        <AiOutlineLineChart className={`w-6 h-6`}
                                            title = {viewChart ? "Hide Chart" : "View Chart"}
                                        />
                                    </button>
                                </div>
                        )}

                        {location.details?.website && (
                           <a
                                className={`w-28 lg:w-32 cursor-pointer p-3 bg-blue-500 text-white font-medium text-[12px] rounded-sm text-center hover:bg-blue-600 ${
                                    !location.details?.website ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                                href={location.details?.website || "#"}
                                target="_blank"
                                rel="noreferrer"
                                title={!location.details?.website ? "No website" : ""}
                                >
                                Visit Website
                            </a>

                        )}
                    </div>

                   
                </div>

                <div className={`p-3 text-[14px] font-medium`}>
                    {location.details?.description || (
                        <p className={`text-gray-400`}>No description!</p>
                    )}
                </div>
            </div>
            <div className={`flex flex-row items-end lg:justify-center gap-1 p-1 mt-7 overflow-scroll`}>
                {location?.images?.map((image, index) => (
                    <Image key={index} src={image} alt={location?.name} width={200} height={150} className={`w-[200px] h-[150px] object-contain`} />
                )).reverse()}
            </div>  

           {location.details?.avgStoreTraffic && (
             <div className={`${viewChart && "p-3"}`}>
                {viewChart && (
                    <div className={`p-2 h-64 w-full`}>
                        <Line 
                            data={chartData}
                            options={chartOptions}
                        />
                    </div>
               )}
            </div>
           )}
        </div>
    </Modal>
  )
}

