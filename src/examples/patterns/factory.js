export function FactoryDesignPattern() {
    
    function Laptop(name, hdd){
        this.name = name;
        this.hdd = hdd;
    };
    function Tablet(name, ram){
        this.name = name;
        this.ram = ram;
    };
  
    const Gagets = { Laptop, Tablet};
    
    const CreateGadget = (type, attributes) => {
        const GagetType = Gagets[type];
        return new GagetType(attributes[0], attributes[1]);
    }
  
    const g = CreateGadget('Laptop', ["Asus", "SSD"]);
    console.log(JSON.stringify(g));
}
