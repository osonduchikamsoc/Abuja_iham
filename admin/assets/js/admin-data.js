/* =========================================================
   IHAM ADMIN — SAMPLE DATA (design stage)
   Replace each array with a fetch() returning the same shape.
   ========================================================= */

/* --- Realtors: who brings the business in --- */
window.ADMIN_REALTORS = [
  { id: "RL-001", name: "Ifeanyi Eze",        phone: "+234 803 111 2233", email: "ifeanyi@iham.org.ng", zone: "Lagos",  joined: "2024-02-14", clients: 18, closed: 11, volume: 412000000, commission: 8240000, status: "Active" },
  { id: "RL-002", name: "Hauwa Suleiman",     phone: "+234 806 444 5566", email: "hauwa@iham.org.ng",   zone: "Abuja",  joined: "2023-11-02", clients: 24, closed: 16, volume: 638000000, commission: 12760000, status: "Active" },
  { id: "RL-003", name: "Tunde Bakare",       phone: "+234 809 777 8899", email: "tunde@iham.org.ng",   zone: "Abuja",  joined: "2024-06-21", clients: 12, closed: 6,  volume: 198000000, commission: 3960000, status: "Active" },
  { id: "RL-004", name: "Ngozi Okoro",        phone: "+234 802 333 4455", email: "ngozi@iham.org.ng",   zone: "Lagos",  joined: "2025-01-09", clients: 9,  closed: 4,  volume: 121000000, commission: 2420000, status: "Active" },
  { id: "RL-005", name: "Musa Danladi",       phone: "+234 805 222 1100", email: "musa@iham.org.ng",    zone: "Kaduna", joined: "2025-03-30", clients: 6,  closed: 2,  volume: 47000000,  commission: 940000,  status: "Probation" },
  { id: "RL-006", name: "Blessing Etim",      phone: "+234 811 909 0909", email: "blessing@iham.org.ng",zone: "Port Harcourt", joined: "2024-09-17", clients: 14, closed: 8, volume: 286000000, commission: 5720000, status: "Active" },
  { id: "RL-007", name: "Segun Ajayi",        phone: "+234 807 656 4343", email: "segun@iham.org.ng",   zone: "Lagos",  joined: "2023-07-05", clients: 21, closed: 13, volume: 503000000, commission: 10060000, status: "Inactive" }
];

/* --- Clients and their commitment to a property --- */
window.ADMIN_CLIENTS = [
  { id: "CL-1041", name: "Emmanuel Okonkwo", email: "emmanuel@gmail.com",  phone: "+234 803 221 0091", state: "Lagos",       occupation: "Banker / Finance",          property: "Premium Residential Plots — Ridgeview", track: "land",     total: 8500000,   paid: 8500000,  realtor: "RL-002", started: "2026-03-12", status: "Completed" },
  { id: "CL-1042", name: "Chidinma Nwosu",   email: "chidinma@yahoo.com",  phone: "+234 806 553 7712", state: "FCT — Abuja", occupation: "Medical Professional",      property: "Harvest Gardens Investment Plots",      track: "land",     total: 6400000,   paid: 3200000,  realtor: "RL-001", started: "2026-05-04", status: "On Plan" },
  { id: "CL-1043", name: "Babatunde Adebayo",email: "babatunde@outlook.com",phone: "+234 802 118 4420", state: "Oyo",         occupation: "Business Owner / Entrepreneur", property: "Modern Commercial Complex",         track: "property", total: 150000000, paid: 45000000, realtor: "RL-002", started: "2026-04-22", status: "On Plan" },
  { id: "CL-1044", name: "Amina Bello",      email: "amina.b@gmail.com",   phone: "+234 809 442 8831", state: "Kaduna",      occupation: "Civil / Public Servant",    property: "3 Bedroom Semi-Detached Bungalow",      track: "property", total: 38000000,  paid: 38000000, realtor: "RL-003", started: "2026-02-18", status: "Completed" },
  { id: "CL-1045", name: "Grace Adeyinka",   email: "grace.a@gmail.com",   phone: "+234 805 990 2214", state: "FCT — Abuja", occupation: "Tech / IT Professional",    property: "Luxury 4 Bedroom Detached Duplex",      track: "property", total: 85000000,  paid: 17000000, realtor: "RL-006", started: "2026-07-01", status: "On Plan" },
  { id: "CL-1046", name: "Okechukwu Nnamdi", email: "okey.n@gmail.com",    phone: "+234 807 331 5567", state: "Anambra",     occupation: "Trader / Merchant",         property: "Harvest Gardens Investment Plots",      track: "land",     total: 3200000,   paid: 800000,   realtor: "RL-004", started: "2026-08-09", status: "Behind" },
  { id: "CL-1047", name: "Fatima Yusuf",     email: "fatima.y@gmail.com",  phone: "+234 811 220 7788", state: "Kano",        occupation: "Academic / Educator",       property: "Premium Residential Plots — Ridgeview", track: "land",     total: 17000000,  paid: 11900000, realtor: "RL-002", started: "2026-04-15", status: "On Plan" },
  { id: "CL-1048", name: "Daniel Uche",      email: "d.uche@gmail.com",    phone: "+234 806 774 1122", state: "Rivers",      occupation: "Oil & Gas",                 property: "3 Bedroom Terrace with BQ",             track: "property", total: 62000000,  paid: 31000000, realtor: "RL-006", started: "2026-06-11", status: "On Plan" },
  { id: "CL-1049", name: "Zainab Abdullahi", email: "zainab.a@gmail.com",  phone: "+234 803 667 9900", state: "FCT — Abuja", occupation: "Legal Professional",        property: "Luxury 4 Bedroom Detached Duplex",      track: "property", total: 85000000,  paid: 8500000,  realtor: "RL-003", started: "2026-08-28", status: "Behind" },
  { id: "CL-1050", name: "Samuel Eze",       email: "s.eze@gmail.com",     phone: "+234 809 001 2345", state: "Enugu",       occupation: "Engineer / Technical",      property: "Harvest Gardens Investment Plots",      track: "land",     total: 9600000,   paid: 6400000,  realtor: "RL-001", started: "2026-05-27", status: "On Plan" },
  { id: "CL-1051", name: "Patience Obi",     email: "p.obi@gmail.com",     phone: "+234 802 556 3311", state: "Delta",       occupation: "Diaspora / Based Abroad",   property: "Premium Residential Plots — Ridgeview", track: "land",     total: 25500000,  paid: 25500000, realtor: "RL-007", started: "2026-01-30", status: "Completed" },
  { id: "CL-1052", name: "Ibrahim Lawal",    email: "i.lawal@gmail.com",   phone: "+234 805 443 2210", state: "FCT — Abuja", occupation: "Military / Paramilitary",   property: "3 Bedroom Semi-Detached Bungalow",      track: "property", total: 38000000,  paid: 15200000, realtor: "RL-002", started: "2026-07-19", status: "On Plan" }
];

/* --- Individual payment postings --- */
window.ADMIN_PAYMENTS = [
  { ref: "TXN-88231", client: "CL-1041", name: "Emmanuel Okonkwo", purpose: "Land — final instalment",  amount: 2500000,  method: "Bank Transfer", date: "2026-09-18", status: "Completed", realtor: "RL-002" },
  { ref: "TXN-88230", client: "CL-1045", name: "Grace Adeyinka",   purpose: "Property — 2nd instalment",amount: 8500000,  method: "Bank Transfer", date: "2026-09-17", status: "Completed", realtor: "RL-006" },
  { ref: "TXN-88229", client: "CL-1043", name: "Babatunde Adebayo",purpose: "Commercial — instalment",  amount: 15000000, method: "Bank Transfer", date: "2026-09-16", status: "Pending",   realtor: "RL-002" },
  { ref: "TXN-88228", client: "CL-1047", name: "Fatima Yusuf",     purpose: "Land — 5th instalment",    amount: 1700000,  method: "Card",          date: "2026-09-15", status: "Completed", realtor: "RL-002" },
  { ref: "TXN-88227", client: "CL-1046", name: "Okechukwu Nnamdi", purpose: "Land — 2nd instalment",    amount: 400000,   method: "USSD",          date: "2026-09-14", status: "Failed",    realtor: "RL-004" },
  { ref: "TXN-88226", client: "CL-1048", name: "Daniel Uche",      purpose: "Property — 3rd instalment",amount: 10000000, method: "Bank Transfer", date: "2026-09-12", status: "Completed", realtor: "RL-006" },
  { ref: "TXN-88225", client: "TR-2201", name: "Chioma Nwachukwu", purpose: "Training — Housing Mgmt",  amount: 450000,   method: "Card",          date: "2026-09-11", status: "Completed", realtor: "" },
  { ref: "TXN-88224", client: "CL-1050", name: "Samuel Eze",       purpose: "Land — 4th instalment",    amount: 1600000,  method: "Bank Transfer", date: "2026-09-10", status: "Completed", realtor: "RL-001" },
  { ref: "TXN-88223", client: "CL-1052", name: "Ibrahim Lawal",    purpose: "Property — 2nd instalment",amount: 7600000,  method: "Bank Transfer", date: "2026-09-09", status: "Completed", realtor: "RL-002" },
  { ref: "TXN-88222", client: "TR-2204", name: "Yusuf Aliyu",      purpose: "Training — Facility Safety",amount: 300000,  method: "Bank Transfer", date: "2026-09-08", status: "Pending",   realtor: "" },
  { ref: "TXN-88221", client: "CL-1049", name: "Zainab Abdullahi", purpose: "Property — deposit",       amount: 8500000,  method: "Bank Transfer", date: "2026-09-05", status: "Completed", realtor: "RL-003" },
  { ref: "TXN-88220", client: "CL-1042", name: "Chidinma Nwosu",   purpose: "Land — 3rd instalment",    amount: 1600000,  method: "Card",          date: "2026-09-03", status: "Completed", realtor: "RL-001" }
];

/* --- Trainees currently on a programme --- */
window.ADMIN_TRAINEES = [
  { id: "TR-2201", name: "Chioma Nwachukwu", email: "chioma.n@gmail.com", phone: "+234 803 445 1122", state: "FCT — Abuja", program: "Housing Management & Practice", mode: "Online",   cohort: "Oct 2026", fee: 450000, paid: 450000, progress: 68, status: "In Training" },
  { id: "TR-2202", name: "Adewale Ogundipe", email: "adewale.o@gmail.com",phone: "+234 806 220 8833", state: "Lagos",       program: "Real Estate Financial Leadership", mode: "Physical", cohort: "Nov 2026", fee: 850000, paid: 425000, progress: 40, status: "In Training" },
  { id: "TR-2203", name: "Halima Sani",      email: "halima.s@gmail.com", phone: "+234 809 776 5544", state: "Kano",        program: "Housing Management & Practice", mode: "Online",   cohort: "Oct 2026", fee: 450000, paid: 450000, progress: 72, status: "In Training" },
  { id: "TR-2204", name: "Yusuf Aliyu",      email: "yusuf.a@gmail.com",  phone: "+234 802 334 9911", state: "Kaduna",      program: "Facility & Safety Compliance",  mode: "Hybrid",   cohort: "Nov 2026", fee: 600000, paid: 300000, progress: 25, status: "In Training" },
  { id: "TR-2205", name: "Esther Bassey",    email: "esther.b@gmail.com", phone: "+234 811 552 7766", state: "Cross River", program: "Housing Management & Practice", mode: "Online",   cohort: "Jul 2026", fee: 450000, paid: 450000, progress: 100, status: "Certified" },
  { id: "TR-2206", name: "Kelechi Anyanwu",  email: "kelechi.a@gmail.com",phone: "+234 805 118 2200", state: "Imo",         program: "Facility & Safety Compliance",  mode: "Hybrid",   cohort: "Jul 2026", fee: 600000, paid: 600000, progress: 100, status: "Certified" },
  { id: "TR-2207", name: "Aisha Mohammed",   email: "aisha.m@gmail.com",  phone: "+234 807 909 3344", state: "FCT — Abuja", program: "Real Estate Financial Leadership", mode: "Physical", cohort: "Nov 2026", fee: 850000, paid: 850000, progress: 18, status: "In Training" },
  { id: "TR-2208", name: "Peter Adeyemi",    email: "peter.a@gmail.com",  phone: "+234 803 667 1188", state: "Ogun",        program: "Housing Management & Practice", mode: "Online",   cohort: "Oct 2026", fee: 450000, paid: 225000, progress: 55, status: "In Training" }
];

/* --- Training applications awaiting review --- */
window.ADMIN_APPLICATIONS = [
  { id: "AP-5512", name: "Blessing Umeh",    email: "b.umeh@gmail.com",   phone: "+234 806 221 4433", state: "Enugu",       occupation: "Estate Officer",      program: "Housing Management & Practice", mode: "Online",   education: "Bachelor's Degree", heard: "Referred by an IHAM realtor", date: "2026-09-20", status: "New" },
  { id: "AP-5511", name: "Michael Ojo",      email: "m.ojo@gmail.com",    phone: "+234 809 552 1100", state: "Lagos",       occupation: "Facility Supervisor", program: "Facility & Safety Compliance",  mode: "Hybrid",   education: "HND",              heard: "Search engine",               date: "2026-09-20", status: "New" },
  { id: "AP-5510", name: "Rukayat Balogun",  email: "r.balogun@gmail.com",phone: "+234 802 889 7766", state: "Oyo",         occupation: "Banker",              program: "Real Estate Financial Leadership", mode: "Physical", education: "Master's Degree", heard: "Facebook / Instagram",        date: "2026-09-19", status: "Reviewing" },
  { id: "AP-5509", name: "Godwin Effiong",   email: "g.effiong@gmail.com",phone: "+234 805 443 2299", state: "Akwa Ibom",   occupation: "Civil Servant",       program: "Housing Management & Practice", mode: "Online",   education: "OND / NCE",        heard: "WhatsApp",                    date: "2026-09-18", status: "Reviewing" },
  { id: "AP-5508", name: "Nkechi Obiora",    email: "n.obiora@gmail.com", phone: "+234 811 334 5588", state: "Anambra",     occupation: "Property Manager",    program: "Facility & Safety Compliance",  mode: "Hybrid",   education: "Bachelor's Degree",heard: "Referred by a friend",        date: "2026-09-16", status: "Accepted" },
  { id: "AP-5507", name: "Abubakar Garba",   email: "a.garba@gmail.com",  phone: "+234 807 776 1122", state: "Bauchi",      occupation: "Surveyor",            program: "Housing Management & Practice", mode: "Online",   education: "Bachelor's Degree",heard: "Radio or TV",                 date: "2026-09-15", status: "Accepted" },
  { id: "AP-5506", name: "Temitope Salami",  email: "t.salami@gmail.com", phone: "+234 803 998 2211", state: "Lagos",       occupation: "Student",             program: "Housing Management & Practice", mode: "Online",   education: "SSCE / WAEC",      heard: "Event or seminar",            date: "2026-09-13", status: "Declined" }
];

/* --- Inspection bookings taken on the public site --- */
window.ADMIN_INSPECTIONS = [
  { id: "IN-3301", name: "Grace Adeyinka",   phone: "+234 805 990 2214", state: "FCT — Abuja", occupation: "Tech / IT Professional",       property: "Luxury 4 Bedroom Detached Duplex",      date: "2026-09-23", time: "10:00 AM", realtor: "RL-006", status: "Confirmed" },
  { id: "IN-3302", name: "Olumide Fashola",  phone: "+234 803 112 9988", state: "Lagos",       occupation: "Business Owner / Entrepreneur",property: "3 Bedroom Terrace with BQ",             date: "2026-09-23", time: "1:00 PM",  realtor: "RL-001", status: "Confirmed" },
  { id: "IN-3303", name: "Maryam Idris",     phone: "+234 809 443 7766", state: "Kano",        occupation: "Medical Professional",         property: "Premium Residential Plots — Ridgeview", date: "2026-09-24", time: "9:00 AM",  realtor: "RL-002", status: "Pending" },
  { id: "IN-3304", name: "Chinedu Agu",      phone: "+234 806 221 3344", state: "Enugu",       occupation: "Trader / Merchant",            property: "Harvest Gardens Investment Plots",      date: "2026-09-24", time: "11:00 AM", realtor: "RL-004", status: "Pending" },
  { id: "IN-3305", name: "Funke Adeniyi",    phone: "+234 802 556 8899", state: "Lagos",       occupation: "Legal Professional",           property: "Modern Commercial Complex",             date: "2026-09-25", time: "2:00 PM",  realtor: "RL-007", status: "Pending" },
  { id: "IN-3306", name: "Sadiq Umar",       phone: "+234 811 667 2200", state: "FCT — Abuja", occupation: "Civil / Public Servant",       property: "3 Bedroom Semi-Detached Bungalow",      date: "2026-09-20", time: "10:00 AM", realtor: "RL-003", status: "Completed" },
  { id: "IN-3307", name: "Ada Nwankwo",      phone: "+234 801 234 5678", state: "Lagos",       occupation: "Banker / Finance",             property: "Luxury 4 Bedroom Detached Duplex",      date: "2026-09-19", time: "11:00 AM", realtor: "RL-001", status: "Completed" },
  { id: "IN-3308", name: "Bola Ogunleye",    phone: "+234 805 778 1234", state: "Ogun",        occupation: "Engineer / Technical",         property: "Harvest Gardens Investment Plots",      date: "2026-09-18", time: "3:00 PM",  realtor: "RL-004", status: "No Show" }
];

/* --- General enquiries --- */
window.ADMIN_ENQUIRIES = [
  { id: "EN-7701", name: "Victor Ibe",     email: "v.ibe@gmail.com",     phone: "+234 803 221 7788", state: "Abia",        subject: "Land investment",   message: "Please send me the layout and price list for the Epe plots.", date: "2026-09-21", status: "New" },
  { id: "EN-7702", name: "Sandra Ekong",   email: "s.ekong@gmail.com",   phone: "+234 806 334 2211", state: "Rivers",      subject: "Property management",message: "I have two flats in PH I would like you to manage for me.",  date: "2026-09-21", status: "New" },
  { id: "EN-7703", name: "Kunle Adebisi",  email: "k.adebisi@gmail.com", phone: "+234 809 112 5566", state: "Lagos",       subject: "Becoming a realtor", message: "How do I join the realtor partner network?",                 date: "2026-09-20", status: "Replied" },
  { id: "EN-7704", name: "Halima Bature",  email: "h.bature@gmail.com",  phone: "+234 802 998 3344", state: "FCT — Abuja", subject: "Buying a property",  message: "Do you have anything under 50m in Lokogoma or Galadimawa?",  date: "2026-09-19", status: "Replied" },
  { id: "EN-7705", name: "Joseph Terver",  email: "j.terver@gmail.com",  phone: "+234 811 443 9900", state: "Benue",       subject: "Training",           message: "Is the online programme available to people outside Abuja?", date: "2026-09-18", status: "Closed" }
];

/* --- Insight aggregates (would be SQL GROUP BY in production) --- */
window.ADMIN_INSIGHTS = {
  demandByState: [
    { name: "FCT — Abuja", value: 312 },
    { name: "Lagos", value: 268 },
    { name: "Rivers", value: 94 },
    { name: "Kaduna", value: 71 },
    { name: "Oyo", value: 63 },
    { name: "Enugu", value: 58 },
    { name: "Kano", value: 44 },
    { name: "Anambra", value: 39 },
    { name: "Delta", value: 31 },
    { name: "Outside Nigeria", value: 86 }
  ],
  demandByOccupation: [
    { name: "Business Owner / Entrepreneur", value: 214 },
    { name: "Civil / Public Servant", value: 186 },
    { name: "Banker / Finance", value: 142 },
    { name: "Medical Professional", value: 118 },
    { name: "Tech / IT Professional", value: 103 },
    { name: "Oil & Gas", value: 87 },
    { name: "Legal Professional", value: 64 },
    { name: "Diaspora / Based Abroad", value: 96 },
    { name: "Engineer / Technical", value: 58 },
    { name: "Academic / Educator", value: 41 }
  ],
  revenueByMonth: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    property: [42000000, 61000000, 55000000, 78000000, 69000000, 94000000],
    land: [18000000, 24000000, 31000000, 27000000, 38000000, 41000000],
    training: [3600000, 4200000, 3900000, 5100000, 4800000, 6300000]
  },
  channels: [
    { name: "Referred by realtor", value: 38 },
    { name: "Search engine", value: 22 },
    { name: "Facebook / Instagram", value: 18 },
    { name: "WhatsApp", value: 12 },
    { name: "Friend or colleague", value: 7 },
    { name: "Radio / TV / Event", value: 3 }
  ],
  budgetBands: [
    { name: "Under ₦10m", value: 156 },
    { name: "₦10m – ₦50m", value: 211 },
    { name: "₦50m – ₦100m", value: 128 },
    { name: "Above ₦100m", value: 47 }
  ]
};

/* --- Activity feed --- */
window.ADMIN_ACTIVITY = [
  { icon: "fa-money-bill-transfer", tone: "ok",   title: "Payment received",       text: "₦2,500,000 from Emmanuel Okonkwo — Ridgeview final instalment.", time: "12 minutes ago" },
  { icon: "fa-calendar-check",      tone: "",     title: "Inspection booked",      text: "Maryam Idris — Ridgeview Estate, 24 Sep at 9:00 AM.",            time: "48 minutes ago" },
  { icon: "fa-user-graduate",       tone: "info", title: "New training application", text: "Blessing Umeh applied for Housing Management & Practice.",     time: "2 hours ago" },
  { icon: "fa-triangle-exclamation",tone: "warn", title: "Payment overdue",        text: "Zainab Abdullahi is 14 days behind on her duplex plan.",         time: "5 hours ago" },
  { icon: "fa-building",            tone: "",     title: "Property published",     text: "3 Bedroom Terrace with BQ — Lekki Phase 1 is now live.",         time: "Yesterday" },
  { icon: "fa-handshake",           tone: "ok",   title: "Sale closed",            text: "Amina Bello completed payment on the Kubwa bungalow.",           time: "2 days ago" }
];
