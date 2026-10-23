export type Country = { code: string; name: string };

/** Primary target market first, then common export markets. */
export const COUNTRIES: Country[] = [
  { code: "IN", name: "India" },
  { code: "BD", name: "Bangladesh" },
  { code: "NP", name: "Nepal" },
  { code: "LK", name: "Sri Lanka" },
  { code: "BT", name: "Bhutan" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "QA", name: "Qatar" },
  { code: "OM", name: "Oman" },
  { code: "KW", name: "Kuwait" },
  { code: "BH", name: "Bahrain" },
  { code: "MY", name: "Malaysia" },
  { code: "ID", name: "Indonesia" },
  { code: "TH", name: "Thailand" },
  { code: "VN", name: "Vietnam" },
  { code: "PH", name: "Philippines" },
  { code: "KE", name: "Kenya" },
  { code: "NG", name: "Nigeria" },
  { code: "ZA", name: "South Africa" },
  { code: "EG", name: "Egypt" },
  { code: "Other", name: "Other" },
];

export const DEFAULT_COUNTRY = "India";

/** Indian states and union territories with major cities for the location selectors. */
export const INDIA_STATES: { state: string; cities: string[] }[] = [
  {
    state: "Andhra Pradesh",
    cities: [
      "Visakhapatnam",
      "Vijayawada",
      "Guntur",
      "Nellore",
      "Tirupati",
      "Kurnool",
      "Rajahmundry",
      "Kakinada",
    ],
  },
  { state: "Arunachal Pradesh", cities: ["Itanagar", "Naharlagun", "Pasighat"] },
  { state: "Assam", cities: ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon", "Tezpur"] },
  { state: "Bihar", cities: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga", "Purnia"] },
  { state: "Chhattisgarh", cities: ["Raipur", "Bhilai", "Bilaspur", "Korba", "Durg"] },
  { state: "Goa", cities: ["Panaji", "Margao", "Vasco da Gama", "Mapusa"] },
  {
    state: "Gujarat",
    cities: [
      "Ahmedabad",
      "Surat",
      "Vadodara",
      "Rajkot",
      "Bhavnagar",
      "Jamnagar",
      "Gandhinagar",
      "Anand",
    ],
  },
  {
    state: "Haryana",
    cities: ["Faridabad", "Gurugram", "Panipat", "Ambala", "Hisar", "Karnal", "Rohtak"],
  },
  { state: "Himachal Pradesh", cities: ["Shimla", "Solan", "Dharamshala", "Mandi", "Baddi"] },
  { state: "Jharkhand", cities: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh"] },
  {
    state: "Karnataka",
    cities: [
      "Bengaluru",
      "Mysuru",
      "Hubballi",
      "Mangaluru",
      "Belagavi",
      "Davanagere",
      "Ballari",
      "Shivamogga",
    ],
  },
  {
    state: "Kerala",
    cities: [
      "Thiruvananthapuram",
      "Kochi",
      "Kozhikode",
      "Thrissur",
      "Kollam",
      "Kannur",
      "Palakkad",
    ],
  },
  {
    state: "Madhya Pradesh",
    cities: ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Ratlam"],
  },
  {
    state: "Maharashtra",
    cities: [
      "Mumbai",
      "Pune",
      "Nagpur",
      "Nashik",
      "Thane",
      "Aurangabad",
      "Solapur",
      "Kolhapur",
      "Amravati",
      "Sangli",
    ],
  },
  { state: "Manipur", cities: ["Imphal", "Thoubal"] },
  { state: "Meghalaya", cities: ["Shillong", "Tura"] },
  { state: "Mizoram", cities: ["Aizawl", "Lunglei"] },
  { state: "Nagaland", cities: ["Kohima", "Dimapur"] },
  { state: "Odisha", cities: ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur"] },
  {
    state: "Punjab",
    cities: ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Mohali"],
  },
  {
    state: "Rajasthan",
    cities: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Bikaner", "Ajmer", "Bhilwara"],
  },
  { state: "Sikkim", cities: ["Gangtok", "Namchi"] },
  {
    state: "Tamil Nadu",
    cities: [
      "Chennai",
      "Coimbatore",
      "Madurai",
      "Tiruchirappalli",
      "Salem",
      "Tirunelveli",
      "Erode",
      "Vellore",
    ],
  },
  { state: "Telangana", cities: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"] },
  { state: "Tripura", cities: ["Agartala", "Udaipur"] },
  {
    state: "Uttar Pradesh",
    cities: [
      "Lucknow",
      "Kanpur",
      "Ghaziabad",
      "Agra",
      "Varanasi",
      "Meerut",
      "Prayagraj",
      "Bareilly",
      "Noida",
      "Gorakhpur",
    ],
  },
  { state: "Uttarakhand", cities: ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rudrapur"] },
  {
    state: "West Bengal",
    cities: ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri", "Darjeeling"],
  },
  { state: "Andaman and Nicobar Islands", cities: ["Port Blair"] },
  { state: "Chandigarh", cities: ["Chandigarh"] },
  { state: "Dadra and Nagar Haveli and Daman and Diu", cities: ["Daman", "Silvassa", "Diu"] },
  { state: "Delhi", cities: ["New Delhi", "Delhi"] },
  { state: "Jammu and Kashmir", cities: ["Srinagar", "Jammu", "Anantnag"] },
  { state: "Ladakh", cities: ["Leh", "Kargil"] },
  { state: "Lakshadweep", cities: ["Kavaratti"] },
  { state: "Puducherry", cities: ["Puducherry", "Karaikal"] },
];

export const INDIA_STATE_NAMES = INDIA_STATES.map((entry) => entry.state);

export function citiesForState(state: string): string[] {
  return INDIA_STATES.find((entry) => entry.state === state)?.cities ?? [];
}
