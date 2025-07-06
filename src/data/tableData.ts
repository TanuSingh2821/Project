export interface TableRow {
  id: number;
  jobRequest: string;
  submitted: string;
  status: {
    text: string;
    color: string;
    bg: string;
  };
  submitter: string;
  url: string;
  assigned: string;
  priority: {
    text: string;
    color: string;
  };
  dueDate: string;
  estValue: string;
}

export const tableData: TableRow[] = [
  {
    id: 1,
    jobRequest: "Launch social media campaign for pro...",
    submitted: "15-11-2024",
    status: {
      text: "In-process",
      color: "text-yellow-800",
      bg: "bg-yellow-100",
    },
    submitter: "Aisha Patel",
    url: "www.aishapatel.c...",
    assigned: "Sophie Choudhury",
    priority: {
      text: "Medium",
      color: "text-yellow-600",
    },
    dueDate: "20-11-2024",
    estValue: "6,200,000 ₹",
  },
  {
    id: 2,
    jobRequest: "Update press kit for company redesign",
    submitted: "28-10-2024",
    status: {
      text: "Need to start",
      color: "text-blue-800",
      bg: "bg-blue-100",
    },
    submitter: "Irfan Khan",
    url: "www.irfankhanc...",
    assigned: "Tejas Pandey",
    priority: {
      text: "High",
      color: "text-red-600",
    },
    dueDate: "30-10-2024",
    estValue: "3,500,000 ₹",
  },
  {
    id: 3,
    jobRequest: "Finalize user testing feedback for appli...",
    submitted: "05-12-2024",
    status: {
      text: "In-process",
      color: "text-yellow-800",
      bg: "bg-yellow-100",
    },
    submitter: "Mark Johnson",
    url: "www.markjohnso...",
    assigned: "Rachel Lee",
    priority: {
      text: "Medium",
      color: "text-yellow-600",
    },
    dueDate: "10-12-2024",
    estValue: "4,750,000 ₹",
  },
  {
    id: 4,
    jobRequest: "Design financial report for Q4",
    submitted: "10-01-2025",
    status: {
      text: "Complete",
      color: "text-green-800",
      bg: "bg-green-100",
    },
    submitter: "Emily Green",
    url: "www.emilygreen...",
    assigned: "Tom Wright",
    priority: {
      text: "Low",
      color: "text-blue-600",
    },
    dueDate: "15-01-2025",
    estValue: "5,900,000 ₹",
  },
 
   {
    id: 6,
    jobRequest: "Frontend Developer",
    submitted: "25-01-2025",
    status: {
      text: "Blocked",
      color: "text-red-800",
      bg: "bg-red-100",
    },
    submitter: "Jessica Brown",
    url: "www.jessicabrow...",
    assigned: "Kevin Smith",
    priority: {
      text: "Low",
      color: "text-blue-600",
    },
    dueDate: "3-01-2025",
    estValue: "2,800,00 ₹",
  },
];
