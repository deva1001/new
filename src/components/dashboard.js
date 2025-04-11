import React, { useState } from 'react';
import { FaAppleAlt, FaDrumstickBite, FaBreadSlice, FaPlus, FaUser } from 'react-icons/fa';

const Dashboard = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    height: '175 cm',
    weight: '70 kg',
    goal: 'Maintain Weight',
    dailyCalories: 2200,
    caloriesConsumed: 1800
  });

  const [foodLog, setFoodLog] = useState([
    { id: 1, name: 'Banana', calories: 100, icon: <FaAppleAlt />, iconColor: '#fdcb6e' },
    { id: 2, name: 'Chicken Breast', calories: 250, icon: <FaDrumstickBite />, iconColor: '#d63031' },
    { id: 3, name: 'Rice', calories: 200, icon: <FaBreadSlice />, iconColor: '#fdcb6e' }
  ]);

  const [newFood, setNewFood] = useState({ name: '', calories: '' });

  const handleAddFood = () => {
    if (newFood.name && newFood.calories) {
      const foodItem = {
        id: Date.now(),
        name: newFood.name,
        calories: parseInt(newFood.calories),
        icon: <FaAppleAlt />,
        iconColor: '#00b894'
      };
      setFoodLog([...foodLog, foodItem]);
      setUser({ ...user, caloriesConsumed: user.caloriesConsumed + foodItem.calories });
      setNewFood({ name: '', calories: '' });
    }
  };

  const progressPercentage = Math.min((user.caloriesConsumed / user.dailyCalories) * 100, 100);
  const remainingCalories = user.dailyCalories - user.caloriesConsumed;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Welcome, <span className="text-pink-300">{user.name}</span></h1>
              <p className="text-indigo-100">Track your nutrition and stay healthy</p>
            </div>
            <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-2xl font-bold">
              <FaUser className="text-white" />
            </div>
          </div>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6">
          {[
            { label: 'Email', value: user.email },
            { label: 'Height', value: user.height },
            { label: 'Weight', value: user.weight },
            { label: 'Goal', value: user.goal }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-sm text-gray-500 uppercase font-medium">{stat.label}</h3>
              <p className="text-xl font-semibold mt-1">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Calorie Progress */}
        <div className="px-6 pb-6">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Daily Calories</h2>
              <h2 className="text-xl font-semibold text-indigo-600">
                {user.caloriesConsumed} / {user.dailyCalories} kcal
              </h2>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Consumed</span>
              <span>Remaining: {remainingCalories > 0 ? remainingCalories : 0} kcal</span>
            </div>
          </div>
        </div>

        {/* Food Log */}
        <div className="px-6 pb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Today's Food Log</h2>
            
            <div className="space-y-3 mb-6">
              {foodLog.map((food) => (
                <div key={food.id} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="flex items-center">
                    <span className="text-lg mr-3" style={{ color: food.iconColor }}>
                      {food.icon}
                    </span>
                    <span className="font-medium">{food.name}</span>
                  </div>
                  <span className="font-semibold text-indigo-600">{food.calories} kcal</span>
                </div>
              ))}
            </div>

            {/* Add Food Form */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-indigo-400 transition-colors">
              <h3 className="text-lg font-medium text-gray-700 mb-3 flex items-center">
                <FaPlus className="text-indigo-500 mr-2" />
                Add Food Item
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <input
                    type="text"
                    placeholder="Food name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={newFood.name}
                    onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
                  />
                </div>
                <div className="sm:col-span-1">
                  <input
                    type="number"
                    placeholder="Calories"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={newFood.calories}
                    onChange={(e) => setNewFood({ ...newFood, calories: e.target.value })}
                  />
                </div>
              </div>
              <button
                onClick={handleAddFood}
                className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Add to Log
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;