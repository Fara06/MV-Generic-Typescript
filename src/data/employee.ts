interface Employee {
    firstName: string;
    lastName: string;
    address: string;
    absence: number;
    email: string;
    verified?: boolean;
}
export const employees: Employee[] = [
    {
        firstName: "Desthrie",
        lastName: "Tsaqibah",
        absence : 9,
        address: "Candi",
        email: "gmail.com",
        verified: true,
    },
    {
        firstName: "Nailah",
        lastName: "Anastasya",
        absence: 26,
        address: "Tulangan",
        email: "gmail.com",
    },
    {
        firstName: "Debby",
        lastName: "Maria",
        absence: 8,
        address: "sidokare",
        email: "gmail.com",
    },
    {
        firstName: "Aufa",
        lastName: "Ramadhani",
        absence: 5,
        address: "sidokare",
        email: "gmail.com",
    },
    {
        firstName: "Sabrina",
        lastName: "Mutiara",
        absence: 0,
        address: "sidokare",
        email: "gmail.com",
    },
    
];
