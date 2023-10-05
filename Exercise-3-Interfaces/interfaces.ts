//Interfaces

interface Vehicle {
   brand: string;
   speed: number;
   
   accelerate(): void;

   brake:() => void;
}

const car: Vehicle = {
   brand: "Toyota",
   speed: 120,
   accelerate(): void {
       console.log(`The ${this.brand} is accelerating!`);
   },

   brake() {
      console.log(`The ${this.brand} is deccelerating!`);
      
   },
}


car.accelerate();
car.brake();