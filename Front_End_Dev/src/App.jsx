import React, { useState, useEffect } from "react";

const App = () => {
    const [cars, setCars] = useState([]);
    const [form, setForm] = useState({ brand: "", model: "", year: "", pricePerDay: "" });

    // Funkcja do wczytywania danych z pliku JSON
    const fetchCars = async () => {
        try {
            const response = await fetch("/data.json"); // Œcie¿ka do pliku JSON w katalogu public
            const data = await response.json();
            setCars(data.cars); // Zapisanie danych w stanie
        } catch (error) {
            console.error("Error fetching JSON data:", error);
        }
    };

    useEffect(() => {
        fetchCars(); // Wywo³anie funkcji po za³adowaniu komponentu
    }, []);

    // Dodanie nowego samochodu
    const addCar = () => {
        const newCar = {
            id: Date.now(), // Unikalny identyfikator
            brand: form.brand,
            model: form.model,
            year: parseInt(form.year, 10),
            pricePerDay: parseFloat(form.pricePerDay),
        };
        setCars([...cars, newCar]);
        setForm({ brand: "", model: "", year: "", pricePerDay: "" });
    };

    // Usuniêcie samochodu
    const deleteCar = (id) => {
        setCars(cars.filter((car) => car.id !== id));
    };

    // Aktualizacja samochodu
    const updateCar = (id, updatedCar) => {
        setCars(cars.map((car) => (car.id === id ? updatedCar : car)));
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Car Rental</h1>

            <h2>Add New Car</h2>
            <input
                type="text"
                placeholder="Brand"
                value={form.brand}
                onChange={(e) => setForm({ ...form, brand: e.target.value })}
            />
            <input
                type="text"
                placeholder="Model"
                value={form.model}
                onChange={(e) => setForm({ ...form, model: e.target.value })}
            />
            <input
                type="number"
                placeholder="Year"
                value={form.year}
                onChange={(e) => setForm({ ...form, year: e.target.value })}
            />
            <input
                type="number"
                placeholder="Price Per Day"
                value={form.pricePerDay}
                onChange={(e) => setForm({ ...form, pricePerDay: e.target.value })}
            />
            <button onClick={addCar}>Add Car</button>

            <h2>Cars List</h2>
            <ul>
                {cars.map((car) => (
                    <li key={car.id}>
                        <p>
                            {car.brand} {car.model} ({car.year}) - ${car.pricePerDay}/day
                        </p>
                        <button onClick={() => deleteCar(car.id)}>Delete</button>
                        <button
                            onClick={() =>
                                updateCar(car.id, { ...car, pricePerDay: car.pricePerDay + 5 })
                            }
                        >
                            Increase Price by $5
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;
