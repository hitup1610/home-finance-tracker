// ==========================================================================
// JavaScript Logic: Rent & Expense Tracker Dashboard (ભાડા અને ખર્ચ વ્યવસ્થાપક)
// Phase 2 - With Property Tax, UGVCL, Gas, Torrent Power, Daily Ledger & BoB Bank
// ==========================================================================

// Translation Dictionary
const TRANSLATIONS = {
    gu: {
        appName: "ગૃહ-નાણા વ્યવસ્થાપક",
        navDashboard: "ડેશબોર્ડ",
        navHouses: "૪ મકાન ભાડું",
        navTaxes: "ઘર-પાણી વેરો",
        navUtilities: "લાઈટ-ગેસ બિલ",
        navMilk: "દૂધનું બિલ",
        navDaily: "રોજિંદા ખર્ચ",
        navBob: "બીઓબી ખાતું",
        navBackup: "બેકઅપ & સેટિંગ્સ",
        
        // Dashboard
        welcomeMessage: "નાણાકીય ડેશબોર્ડમાં આપનું સ્વાગત છે",
        dashboardSubtitle: "તમામ આવક, ખર્ચ, ભાડા અને વેરાની વિગતો એક જગ્યાએ.",
        kpiIncome: "કુલ આવક (આ મહિને)",
        kpiExpense: "કુલ ખર્ચ (આ મહિને)",
        kpiRentReceived: "મળેલ ભાડું",
        kpiRentPending: "બાકી ભાડું",
        kpiDeposit: "કુલ ડિપોઝિટ",
        activityTitle: "તાજેતરની પ્રવૃત્તિઓ",
        noActivity: "કોઈ તાજેતરની પ્રવૃત્તિ નથી.",
        chartTitle: "માસિક આવક વિરુદ્ધ ખર્ચ",
        incomeLabel: "આવક (Income)",
        expenseLabel: "ખર્ચ (Expense)",

        // Houses Page
        addRentBtn: "ભાડું ઉમેરો",
        rentHistoryBtn: "ઇતિહાસ જુઓ",
        editHouseBtn: "મકાન વિગત સુધારો",
        tenantLabel: "ભાડુઆત:",
        phoneLabel: "મોબાઈલ:",
        monthlyRentLabel: "માસિક ભાડું:",
        depositLabel: "ડિપોઝિટ:",
        statusLabel: "સ્ટેટસ:",
        statusOccupied: "ભાડે આપેલ",
        statusVacant: "ખાલી",
        rentCycleLabel: "ભાડા ચક્ર:",
        rentHistoryTitle: "ભાડા ચુકવણીનો ઇતિહાસ",
        noHistory: "કોઈ હિસ્ટ્રી નથી.",
        
        // Forms & Modals
        modalAddRentTitle: "નવી ભાડા ચૂકવણી ઉમેરો",
        modalEditHouseTitle: "મકાન અને ભાડુઆતની માહિતી",
        selectHouse: "મકાન પસંદ કરો",
        payMonth: "ચુકવણીનો મહિનો",
        payAmount: "રકમ (રૂ.)",
        payDate: "ચુકવણી તારીખ",
        payMode: "ચુકવણી પદ્ધતિ",
        payStatus: "ચુકવણી સ્ટેટસ",
        notes: "નોંધ (નોટ્સ)",
        saveBtn: "સેવ કરો",
        cancelBtn: "રદ કરો",
        
        // Mode options
        modeCash: "રોકડા (Cash)",
        modeGPay: "GPay / UPI",
        modeBank: "બેંક ટ્રાન્સફર",
        modeOther: "અન્ય",
        
        // Status options
        statusPaid: "ચૂકવેલ (Paid)",
        statusUnpaid: "બાકી (Unpaid)",
        statusPartial: "અંશતઃ ચૂકવેલ",

        // Taxes & Vero Screen
        titleTaxes: "મકાન વેરા અને ગટર/પાણી વેરો",
        propTaxTitle: "૧. ઘર વેરો (Property Tax - Yearly)",
        waterTaxTitle: "૨. ગટર-પાણી વેરો (Water Tax - 533/1)",
        addPropTaxBtn: "ઘર વેરો ઉમેરો",
        addWaterTaxBtn: "ગટર-પાણી વેરો ઉમેરો",
        thTenament: "ટેનામેન્ટ નંબર",
        thPaidYear: "આકારણી વર્ષ",
        modalAddPropTax: "નવી ઘર વેરો ચુકવણી ઉમેરો",
        modalAddWaterTax: "નવી ગટર-પાણી વેરો ચુકવણી ઉમેરો",

        // Utilities Page
        titleUtilities: "વીજળી અને ગેસ બિલ ચૂકવણીઓ",
        torrentGasTitle: "૧. ૫૩૩/૧ ગાંધીનગર બિલો (Torrent & Gas)",
        ugvclTitle: "૨. કોલાવડા UGVCL લાઈટ બિલ (ભાડુઆતો ભરે છે)",
        addTorrentBtn: "Torrent બિલ ઉમેરો",
        addGasBtn: "ગુજરાત ગેસ બિલ ઉમેરો",
        addUgvclBtn: "UGVCL બિલ ઉમેરો",
        billType: "બિલનો પ્રકાર",
        billGas: "ગુજરાત ગેસ (Gujarat Gas)",
        billPower: "ટોરેન્ટ પાવર (Torrent Power)",
        billPeriod: "બિલ સમયગાળો (દર ૨ મહિને)",
        refNo: "ટ્રાન્ઝેક્શન / રેફરન્સ નં.",
        thConsumer: "કન્ઝ્યુમર નંબર",
        thPaidBy: "કોણે ભર્યું",
        paidByTenant: "ભાડુઆત (Tenant)",
        paidByOwner: "માલિક (Owner)",
        modalAddTorrent: "નવું Torrent Power બિલ ઉમેરો",
        modalAddGas: "નવું ગુજરાત ગેસ બિલ ઉમેરો",
        modalAddUgvcl: "નવું UGVCL લાઈટ બિલ ઉમેરો",
        
        // Milk Page
        addMilkBtn: "દૂધનું બિલ ઉમેરો",
        vendorName: "ડેરી / દૂધવાળાનું નામ",
        milkLiters: "કુલ લીટર",
        milkRate: "ભાવ પ્રતિ લીટર",
        totalAmount: "કુલ રકમ",
        historyMilkTitle: "દૂધ બિલનો માસિક ઇતિહાસ",

        // Daily Ledger Page
        titleDaily: "રોજિંદા ખર્ચ પત્રક (Daily Expenses)",
        addDailyBtn: "નવો રોજિંદો ખર્ચ",
        modalAddDaily: "નવો રોજિંદો ખર્ચ ઉમેરો",
        thDescription: "ખર્ચ વિગત / વર્ણન",
        thCategory: "શ્રેણી",
        catHousehold: "ઘર વપરાશ",
        catMaintenance: "મકાન રિપેરીંગ",
        catFuel: "વાહન પેટ્રોલ",
        catPersonal: "વ્યક્તિગત ખર્ચ",
        catOther: "અન્ય ખર્ચ",

        // Bank of Baroda Screen
        titleBob: "બેંક ઓફ બરોડા ઉપાડ હિસ્ટ્રી (BOB Debits)",
        kpiBobTotal: "કુલ ઉપાડ (BOB)",
        kpiBobFd: "કુલ એફ.ડી. (FD)",
        kpiBobTax: "વેરા ચુકવણી (BOB)",
        addBobBtn: "બીઓબી એન્ટ્રી ઉમેરો",
        modalAddBob: "નવી બીઓબી બેંક એન્ટ્રી ઉમેરો",
        thNarration: "બેંક વિગત (Narration)",
        exportExcelBtn: "એક્સેલ શીટ ડાઉનલોડ",

        // Backup Screen
        backupTitle: "ડેટા બેકઅપ અને સેવિંગ્સ",
        backupDesc: "તમારો ડેટા તમારા બ્રાઉઝરમાં આપમેળે સેવ થાય છે. ડેટાનો કાયમી બેકઅપ લેવા માટે તેને ફાઇલ તરીકે ડાઉનલોડ કરો.",
        downloadBackupBtn: "બેકઅપ ફાઈલ ડાઉનલોડ કરો",
        uploadBackupBtn: "બેકઅપ ફાઈલ અપલોડ કરો",
        googleSheetSyncTitle: "Google Sheet સિંક્રોનાઇઝેશન (ઓનલાઇન બેકઅપ)",
        googleSheetUrlLabel: "Google Apps Script URL:",
        syncBtn: "Google Sheet માં સેવ કરો",
        syncSuccess: "ડેટા સફળતાપૂર્વક Google Sheet માં સેવ થઈ ગયો!",
        syncError: "સિંક કરવામાં ભૂલ થઈ. કૃપા કરીને URL ચેક કરો.",
        resetDataBtn: "બધો ડેટા સાફ કરો (રિસેટ)",
        resetConfirm: "શું તમે ખરેખર બધો ડેટા રિસેટ કરવા માંગો છો? આનાથી તમારો બધો ઇતિહાસ ભૂંસાઈ જશે.",
        importSuccess: "ડેટા સફળતાપૂર્વક ઈમ્પોર્ટ થઈ ગયો છે!",
        importFailed: "બેકઅપ ફાઈલ રીડ કરવામાં ભૂલ થઈ. કૃપા કરીને સાચી ફાઈલ અપલોડ કરો.",
        
        // Table Headers
        thHouse: "મકાન",
        thMonth: "મહિનો",
        thAmount: "રકમ",
        thDate: "તારીખ",
        thMode: "પદ્ધતિ",
        thStatus: "સ્ટેટસ",
        thNotes: "નોંધ",
        thType: "પ્રકાર",
        thPeriod: "સમયગાળો",
        thRef: "રેફરન્સ",
        thLiters: "લીટર",
        thRate: "ભાવ",
        thAction: "એક્શન"
    },
    en: {
        appName: "Home Finance Manager",
        navDashboard: "Dashboard",
        navHouses: "4 Houses Rent",
        navTaxes: "Property & Water Tax",
        navUtilities: "Light & Gas Bills",
        navMilk: "Milk Payment",
        navDaily: "Daily Expenses",
        navBob: "BOB Account",
        navBackup: "Backup & Settings",
        
        // Dashboard
        welcomeMessage: "Welcome to Financial Dashboard",
        dashboardSubtitle: "All income, expenses, rents, and taxes in one place.",
        kpiIncome: "Total Income (This Month)",
        kpiExpense: "Total Expense (This Month)",
        kpiRentReceived: "Rent Received",
        kpiRentPending: "Rent Pending",
        kpiDeposit: "Total Deposit Held",
        activityTitle: "Recent Activities",
        noActivity: "No recent activities recorded.",
        chartTitle: "Monthly Income vs Expense",
        incomeLabel: "Income",
        expenseLabel: "Expense",

        // Houses Page
        addRentBtn: "Add Rent Record",
        rentHistoryBtn: "View History",
        editHouseBtn: "Edit House Config",
        tenantLabel: "Tenant:",
        phoneLabel: "Phone:",
        monthlyRentLabel: "Monthly Rent:",
        depositLabel: "Deposit:",
        statusLabel: "Status:",
        statusOccupied: "Occupied",
        statusVacant: "Vacant",
        rentCycleLabel: "Cycle:",
        rentHistoryTitle: "Rent Payment History",
        noHistory: "No payment history found.",
        
        // Forms & Modals
        modalAddRentTitle: "Add New Rent Payment",
        modalEditHouseTitle: "Configure House & Tenant",
        selectHouse: "Select House",
        payMonth: "Payment Month",
        payAmount: "Amount (₹)",
        payDate: "Date Paid",
        payMode: "Payment Mode",
        payStatus: "Status",
        notes: "Notes",
        saveBtn: "Save Details",
        cancelBtn: "Cancel",
        
        // Mode options
        modeCash: "Cash",
        modeGPay: "GPay / UPI",
        modeBank: "Bank Transfer",
        modeOther: "Other",
        
        // Status options
        statusPaid: "Paid",
        statusUnpaid: "Unpaid",
        statusPartial: "Partial",

        // Taxes & Vero Screen
        titleTaxes: "Property Tax & Water/Drainage Tax Logs",
        propTaxTitle: "1. Yearly Property Tax (Ghar Vero)",
        waterTaxTitle: "2. Water & Drainage Tax (533/1)",
        addPropTaxBtn: "Add Property Tax",
        addWaterTaxBtn: "Add Water Tax",
        thTenament: "Tenament Number",
        thPaidYear: "Assessment Year",
        modalAddPropTax: "Add New Property Tax Payment",
        modalAddWaterTax: "Add New Water/Drainage Tax Payment",

        // Utilities Page
        titleUtilities: "Electricity & Gas Bill Payments",
        torrentGasTitle: "1. 533/1 Gandhinagar Accounts (Torrent & Gas)",
        ugvclTitle: "2. Kolavada UGVCL Electricity (Paid by Tenants)",
        addTorrentBtn: "Add Torrent Bill",
        addGasBtn: "Add Gas Bill",
        addUgvclBtn: "Add UGVCL Bill",
        billType: "Bill Type",
        billGas: "Gujarat Gas",
        billPower: "Torrent Power",
        billPeriod: "Billing Period (Every 2 Months)",
        refNo: "Transaction Ref No",
        thConsumer: "Consumer Number",
        thPaidBy: "Paid By",
        paidByTenant: "Tenant",
        paidByOwner: "Owner",
        modalAddTorrent: "Add Torrent Power Bill (533/1)",
        modalAddGas: "Add Gujarat Gas Bill (533/1)",
        modalAddUgvcl: "Add UGVCL Light Bill (Kolavada)",
        
        // Milk Page
        addMilkBtn: "Add Milk Bill",
        vendorName: "Dairy/Vendor Name",
        milkLiters: "Total Liters",
        milkRate: "Rate per Liter",
        totalAmount: "Total Amount",
        historyMilkTitle: "Milk Bill History",

        // Daily Ledger Page
        titleDaily: "Daily Expense Ledger",
        addDailyBtn: "Add Daily Expense",
        modalAddDaily: "Add New Daily Expense",
        thDescription: "Expense Description",
        thCategory: "Category",
        catHousehold: "Household Stuff",
        catMaintenance: "House Repairing",
        catFuel: "Vehicle Petrol",
        catPersonal: "Personal Cash",
        catOther: "Other Expenses",

        // Bank of Baroda Screen
        titleBob: "Bank of Baroda Debits Ledger",
        kpiBobTotal: "Total BOB Debits",
        kpiBobFd: "Total Fixed Deposit (FD)",
        kpiBobTax: "Property Taxes (BOB)",
        addBobBtn: "Add BOB Record",
        modalAddBob: "Add New BOB Bank Record",
        thNarration: "Narration",
        exportExcelBtn: "Download Excel Sheet",

        // Backup Screen
        backupTitle: "Data Backup & Settings",
        backupDesc: "Your data is automatically saved locally. Download the data file to keep a permanent backup.",
        downloadBackupBtn: "Download Backup File",
        uploadBackupBtn: "Upload Backup File",
        googleSheetSyncTitle: "Google Sheet Synchronization",
        googleSheetUrlLabel: "Google Apps Script URL:",
        syncBtn: "Sync to Google Sheet",
        syncSuccess: "Data synced successfully to Google Sheet!",
        syncError: "Error syncing data. Please check your URL.",
        resetDataBtn: "Clear All Data (Reset)",
        resetConfirm: "Are you sure you want to clear all data? This will wipe out all of your history.",
        importSuccess: "Data imported successfully!",
        importFailed: "Error reading backup file. Please make sure it is a valid backup JSON file.",
        
        // Table Headers
        thHouse: "House",
        thMonth: "Month",
        thAmount: "Amount",
        thDate: "Date Paid",
        thMode: "Mode",
        thStatus: "Status",
        thNotes: "Notes",
        thType: "Type",
        thPeriod: "Period",
        thRef: "Ref No",
        thLiters: "Liters",
        thRate: "Rate",
        thAction: "Action"
    }
};

// Initial state with specified addresses and mappings
const DEFAULT_STATE = {
    lang: "gu", // default language is Gujarati
    houses: [
        { id: 1, date: "2024-01-01", name: "533/1, 5B, Gandhinagar", tenamentNo: "1007A09729", waterCustomerNo: "051822", torrentCustomerId: "1007968", gasCustomerNo: "500000270187", tenantName: "", tenantPhone: "", rentAmount: 0, depositAmount: 0, depositStatus: "unpaid", status: "vacant" },
        { id: 2, date: "2024-01-01", name: "2658, Dholanagar, Kolavada", tenamentNo: "1007C102107", ugvclConsumerNo: "26919022419", tenantName: "", tenantPhone: "", rentAmount: 0, depositAmount: 0, depositStatus: "unpaid", status: "vacant" },
        { id: 3, date: "2024-01-01", name: "733, Vah, Kolavada", tenamentNo: "1007C101208", ugvclConsumerNo: "26919004879", tenantName: "", tenantPhone: "", rentAmount: 0, depositAmount: 0, depositStatus: "unpaid", status: "vacant" },
        { id: 4, date: "2024-01-01", name: "81, Hudco, Kolavada", tenamentNo: "1007C100824", ugvclConsumerNo: "26919105284", tenantName: "", tenantPhone: "", rentAmount: 0, depositAmount: 0, depositStatus: "unpaid", status: "vacant" }
    ],
    googleSheetUrl: "https://script.google.com/macros/s/AKfycbwOdO55SFljjPM5-hUNv5R7DSgQIf6tYcTvWrzXmH0QO_PHZmKbGQDTfvDmSYGNdNpf/exec",
    rentPayments: [
        // Samples removed to prevent old history from reappearing
    ],
    propertyTaxes: [
    ],
    waterTaxes: [
    ],
    torrentBills: [
    ],
    gasBills: [
    ],
    ugvclBills: [
    ],
    milkBills: [
    ],
    dailyExpenses: [
    ],
    transactions: [], // general transactions
    
    // Transcribed Bank of Baroda Debits History
    bobTransactions: [
        // Samples removed
    ]
};

// Security Configuration
const APP_CONFIG = {
    accessPin: "1610" // અહીં તમારો મનપસંદ પિન સેટ કરો
};

// Global App State
let appState = null;

// Global variables to store the ID of the transaction being edited
let currentRentEditId = null;
let currentPropTaxEditId = null;
let currentWaterTaxEditId = null;
let currentTorrentEditId = null;
let currentGasEditId = null;
let currentUgvclEditId = null;
let currentMilkEditId = null;
let currentDailyEditId = null;
let currentBobEditId = null;

// Initialize State with Backward Compatibility and Migration
function initApp() {
    // સાઈટ લોડ થાય ત્યારે લોગિન સ્ક્રીન છુપાવી દેવી જેથી બીજા ટેબ ખુલે
    document.getElementById("login-screen").style.display = "none";

    const stored = localStorage.getItem("hitesh_home_finance_state");
    if (stored) {
        try {
            appState = JSON.parse(stored);
            
            // missing keys ઉમેરવી (પણ existing ડેટા ભૂંસવો નહીં)
            Object.keys(DEFAULT_STATE).forEach(key => {
                if (appState[key] === undefined) {
                    appState[key] = JSON.parse(JSON.stringify(DEFAULT_STATE[key]));
                }
            });
            
            // Sync structure changes
            if (!appState.propertyTaxes) appState.propertyTaxes = [];
            if (!appState.waterTaxes) appState.waterTaxes = [];
            if (!appState.torrentBills) appState.torrentBills = [];
            if (!appState.gasBills) appState.gasBills = [];
            if (!appState.ugvclBills) appState.ugvclBills = [];
            if (!appState.dailyExpenses) appState.dailyExpenses = [];
            if (!appState.transactions) appState.transactions = [];
            
            // જો બ્રાઉઝરમાં જૂની URL સેવ થયેલી હોય, તો તેને નવી URL થી ફોર્સ અપડેટ કરવી
            const oldUrl1 = "https://script.google.com/macros/s/AKfycbzi36UWtO2dMO9ynaZgONYzA_Dukfc4RDm_xBJiD9Frkl9sanC5O5tV3OUuqRcYD3Pl9Q/exec";
            const oldUrl2 = "https://script.google.com/macros/s/AKfycbz7g0-_NDY-lUbqi_uw2nwr_TDLDVa9LkxZC9oz2ZGV6lr-AEggjr5mp2az1Isu7VWe/exec";
            const newDefaultUrl = "https://script.google.com/macros/s/AKfycbwOdO55SFljjPM5-hUNv5R7DSgQIf6tYcTvWrzXmH0QO_PHZmKbGQDTfvDmSYGNdNpf/exec";
            
            if (!appState.googleSheetUrl || appState.googleSheetUrl === oldUrl1 || appState.googleSheetUrl === oldUrl2) {
                appState.googleSheetUrl = newDefaultUrl;
            }
            
            // Sync BOB Transactions list
            if (!appState.bobTransactions) {
                appState.bobTransactions = JSON.parse(JSON.stringify(DEFAULT_STATE.bobTransactions));
            }
            
            // *** DATA MIGRATION: monthYear ને "YYYY-MM-DD" અથવા "YYYY-MM-DDThh:mm:ssZ" માંથી "YYYY-MM" ફોર્મેટ માં convert કરો ***
            // Google Sheets માંથી import કરેલ ડેટા ક્યારેક full date format માં આવે છે
            if (appState.rentPayments) {
                appState.rentPayments.forEach(rp => {
                    if (rp.monthYear && typeof rp.monthYear === 'string') {
                        // ISO timestamp clean
                        const clean = rp.monthYear.split('T')[0];
                        // If YYYY-MM-DD, take first 7 chars → YYYY-MM
                        if (/^\d{4}-\d{2}-\d{2}$/.test(clean)) {
                            rp.monthYear = clean.substring(0, 7);
                        }
                    }
                });
            }
            if (appState.milkBills) {
                appState.milkBills.forEach(mb => {
                    if (mb.monthYear && typeof mb.monthYear === 'string') {
                        const clean = mb.monthYear.split('T')[0];
                        if (/^\d{4}-\d{2}-\d{2}$/.test(clean)) {
                            mb.monthYear = clean.substring(0, 7);
                        }
                    }
                });
            }
        } catch (e) {
            console.error("Error loading local storage state", e);
            appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
        }
    } else {
        appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
        saveState();
    }
    
    // Set active language
    setLanguage(appState.lang || "gu");
    
    // Set active navigation tab (default: Dashboard)
    console.log("initApp: appState after loading/merging:", appState); // Add this for debugging
    switchTab("dashboard");
    
    // Setup Event Listeners
    setupEventListeners();
    
    // Populate select dropdowns for houses dynamically
    populateHouseDropdowns();
}

// Handle Login Logic
function handleLogin() {
    const pinInput = document.getElementById("login-pin");
    const errorMsg = document.getElementById("login-error");
    
    if (pinInput.value === APP_CONFIG.accessPin) {
        sessionStorage.setItem("hitesh_auth", "true");
        document.getElementById("login-screen").style.opacity = "0";
        setTimeout(() => {
            document.getElementById("login-screen").style.display = "none";
            switchTab("bob"); // પિન સાચો હોય તો BOB ટેબ પર લઈ જવું
        }, 300);
        errorMsg.style.display = "none";
    } else {
        errorMsg.style.display = "block";
        pinInput.value = "";
        pinInput.focus();
        // Simple shake effect
        document.querySelector(".login-card").style.animation = "none";
        setTimeout(() => document.querySelector(".login-card").style.animation = "fadeIn 0.4s ease", 10);
    }
}

// Save State to LocalStorage
// Auto-sync debounce timer
let _autoSyncTimer = null;

function saveState() {
    localStorage.setItem("hitesh_home_finance_state", JSON.stringify(appState));
    // Debounced silent background sync to Google Sheets (5 second delay)
    scheduleAutoSync();
}

// Schedule a background silent sync to Google Sheets
function scheduleAutoSync() {
    if (!appState.googleSheetUrl) return;
    if (_autoSyncTimer) clearTimeout(_autoSyncTimer);
    // Show syncing indicator
    showSyncStatus('pending');
    _autoSyncTimer = setTimeout(() => {
        silentSyncToGoogleSheets();
    }, 5000);
}

// Show sync status indicator
function showSyncStatus(status) {
    let indicator = document.getElementById('auto-sync-indicator');
    if (!indicator) return;
    if (status === 'pending') {
        indicator.title = appState.lang === 'gu' ? 'Google Sheet માં સેવ કરવામાં આવી રહ્યું છે...' : 'Saving to Google Sheet...';
        indicator.style.background = '#f59e0b'; // amber = pending
        indicator.style.display = 'block';
    } else if (status === 'success') {
        indicator.title = appState.lang === 'gu' ? 'Google Sheet માં સેવ થઈ ગયું ✓' : 'Synced to Google Sheet ✓';
        indicator.style.background = '#22c55e'; // green = success
        indicator.style.display = 'block';
        setTimeout(() => { if (indicator) indicator.style.display = 'none'; }, 3000);
    } else if (status === 'error') {
        indicator.title = appState.lang === 'gu' ? 'Google Sheet sync ભૂલ' : 'Google Sheet sync error';
        indicator.style.background = '#ef4444'; // red = error
        indicator.style.display = 'block';
    }
}

// Silent background sync (no alerts, no button state changes)
async function silentSyncToGoogleSheets() {
    const currentUrl = appState.googleSheetUrl;
    if (!currentUrl) return;
    try {
        const syncState = JSON.parse(JSON.stringify(appState));
        // Format monthYear to readable strings for Google Sheets
        if (syncState.rentPayments) {
            syncState.rentPayments.forEach(rp => {
                rp.monthYear = formatDisplayMonth(rp.monthYear);
            });
        }
        if (syncState.milkBills) {
            syncState.milkBills.forEach(mb => {
                mb.monthYear = formatDisplayMonth(mb.monthYear);
            });
        }
        await fetch(currentUrl, {
            method: 'POST',
            mode: 'no-cors',
            cache: 'no-cache',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify(syncState)
        });
        showSyncStatus('success');
    } catch (err) {
        console.warn('Auto-sync failed:', err);
        showSyncStatus('error');
    }
}

// Set Active Language
function setLanguage(lang) {
    appState.lang = lang;
    saveState();
    
    // Update active state on language switcher buttons
    document.querySelectorAll(".lang-toggle-btn").forEach(btn => {
        if (btn.getAttribute("data-lang") === lang) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    // Set body language class for CSS selectors
    document.body.className = lang === "gu" ? "lang-gu" : "lang-en";
    
    // Translate all static nodes with data-i18n tags
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
            element.textContent = TRANSLATIONS[lang][key];
        }
    });
    
    // Translate all input placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
        const key = element.getAttribute("data-i18n-placeholder");
        if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
            element.setAttribute("placeholder", TRANSLATIONS[lang][key]);
        }
    });
    
    // Refresh the currently active view to update dynamic translations
    const activeTab = document.querySelector(".menu-item.active")?.getAttribute("data-tab") || "dashboard";
    renderView(activeTab);
}

// Navigation Tab Switcher
function switchTab(tabId) {
    // સુરક્ષા તપાસ: જો BOB ટેબ પર ક્લિક થાય અને લોગિન ન હોય તો પિન માંગવો
    if (tabId === "bob" && sessionStorage.getItem("hitesh_auth") !== "true") {
        document.getElementById("login-screen").style.display = "flex";
        document.getElementById("login-screen").style.opacity = "1";
        return; // ટેબ બદલવાનું રોકો
    }

    // Update active sidebar elements
    document.querySelectorAll(".menu-item").forEach(item => {
        if (item.getAttribute("data-tab") === tabId) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
    
    // Update active mobile bottom-nav elements
    document.querySelectorAll(".mobile-nav-item").forEach(item => {
        if (item.getAttribute("data-tab") === tabId) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    // Update active view visibility
    document.querySelectorAll(".dashboard-view").forEach(view => {
        if (view.id === `${tabId}-view`) {
            view.classList.add("active");
        } else {
            view.classList.remove("active");
        }
    });

    // Render components for the selected tab
    renderView(tabId);
}

// Render dynamic components for each view
function renderView(viewId) {
    switch (viewId) {
        case "dashboard":
            renderDashboard();
            break;
        case "houses":
            renderHouses();
            break;
        case "taxes":
            renderTaxes();
            break;
        case "utilities":
            renderUtilities();
            break;
        case "milk":
            renderMilk();
            break;
        case "daily":
            renderDailyLedger();
            break;
        case "bob":
            renderBob();
            break;
        case "backup":
            renderBackupSettings();
            break;
    }
}

// Get the current selected month/year filter (defaults to current month)
function getCurrentFilterMonth() {
    const today = new Date();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}`;
}

// Helper to filter dates falling in the current month
function isCurrentMonth(dateStr, filterMonth) {
    if (!dateStr) return false;
    return dateStr.substring(0, 7) === filterMonth;
}

// 1. Dashboard View Logic
function renderDashboard() {
    const currentMonth = getCurrentFilterMonth(); // YYYY-MM
    
    // Rents received this month
    const rentReceived = appState.rentPayments
        .filter(pay => pay.monthYear === currentMonth && pay.status === "paid")
        .reduce((sum, pay) => sum + pay.amount, 0);

    // Total expected rent from active tenants
    const expectedRent = appState.houses
        .filter(h => h.status === "occupied")
        .reduce((sum, h) => sum + h.rentAmount, 0);
        
    const rentPending = Math.max(0, expectedRent - rentReceived);

    // General income registered in current month
    const generalIncome = appState.transactions
        .filter(t => t.type === "income" && isCurrentMonth(t.date, currentMonth))
        .reduce((sum, t) => sum + t.amount, 0);

    const totalIncome = rentReceived + generalIncome;

    // Expenses calculations:
    // Milk expenses
    const milkCost = appState.milkBills
        .filter(b => b.monthYear === currentMonth)
        .reduce((sum, b) => sum + b.amount, 0);

    // Torrent Power (533/1)
    const torrentCost = appState.torrentBills
        .filter(u => isCurrentMonth(u.datePaid, currentMonth))
        .reduce((sum, u) => sum + u.amount, 0);

    // Gujarat Gas (533/1)
    const gasCost = appState.gasBills
        .filter(u => isCurrentMonth(u.datePaid, currentMonth))
        .reduce((sum, u) => sum + u.amount, 0);

    // UGVCL (Only where paid by Owner)
    const ugvclCost = appState.ugvclBills
        .filter(u => isCurrentMonth(u.datePaid, currentMonth) && u.paidBy === "owner")
        .reduce((sum, u) => sum + u.amount, 0);

    // Property Taxes
    const propTaxCost = appState.propertyTaxes
        .filter(t => isCurrentMonth(t.datePaid, currentMonth))
        .reduce((sum, t) => sum + t.amount, 0);

    // Water Taxes
    const waterTaxCost = appState.waterTaxes
        .filter(t => isCurrentMonth(t.datePaid, currentMonth))
        .reduce((sum, t) => sum + t.amount, 0);

    // Daily Ledger Expenses
    const dailyCost = appState.dailyExpenses
        .filter(d => isCurrentMonth(d.date, currentMonth))
        .reduce((sum, d) => sum + d.amount, 0);

    // General Ledger expenses
    const generalExpense = appState.transactions
        .filter(t => t.type === "expense" && isCurrentMonth(t.date, currentMonth))
        .reduce((sum, t) => sum + t.amount, 0);

    const totalExpense = milkCost + torrentCost + gasCost + ugvclCost + propTaxCost + waterTaxCost + dailyCost + generalExpense;

    const totalDeposits = appState.houses
        .filter(h => h.depositStatus === "paid")
        .reduce((sum, h) => sum + h.depositAmount, 0);

    // Update UI numbers
    document.getElementById("dashboard-income-amt").textContent = `₹${totalIncome}`;
    document.getElementById("dashboard-expense-amt").textContent = `₹${totalExpense}`;
    document.getElementById("dashboard-rent-rec-amt").textContent = `₹${rentReceived}`;
    document.getElementById("dashboard-rent-pend-amt").textContent = `₹${rentPending}`;
    document.getElementById("dashboard-deposit-amt").textContent = `₹${totalDeposits}`;

    // Render simple HTML-based progress bars for visual graphs (Income vs Expense)
    const totalFinancePool = totalIncome + totalExpense;
    let incomePercent = 50;
    let expensePercent = 50;
    if (totalFinancePool > 0) {
        incomePercent = Math.round((totalIncome / totalFinancePool) * 100);
        expensePercent = Math.round((totalExpense / totalFinancePool) * 100);
    }
    
    document.getElementById("bar-income-percent").style.width = `${incomePercent}%`;
    document.getElementById("bar-income-lbl").textContent = `${incomePercent}%`;
    document.getElementById("bar-expense-percent").style.width = `${expensePercent}%`;
    document.getElementById("bar-expense-lbl").textContent = `${expensePercent}%`;

    // Render Recent Activities (last 5 sorted by date)
    const activities = [];
    
    // Add Rent logs
    appState.rentPayments.forEach(p => {
        const house = appState.houses.find(h => h.id === p.houseId);
        const houseName = house ? house.name.split(',')[0] : `Ghar ${p.houseId}`;
        activities.push({
            type: "rent",
            desc: appState.lang === "gu" ? `${houseName} ભાડું મળ્યું` : `Rent received: ${houseName}`,
            date: p.datePaid,
            amount: p.amount,
            isIncome: true
        });
    });

    // Add Property Taxes
    appState.propertyTaxes.forEach(t => {
        const house = appState.houses.find(h => h.id === t.houseId);
        const houseName = house ? house.name.split(',')[0] : `Ghar ${t.houseId}`;
        activities.push({
            type: "expense",
            desc: appState.lang === "gu" ? `${houseName} ઘરવેરો (${t.year})` : `${houseName} Property Tax (${t.year})`,
            date: t.datePaid,
            amount: t.amount,
            isIncome: false
        });
    });

    // Add Water/Drainage Taxes
    appState.waterTaxes.forEach(w => {
        activities.push({
            type: "expense",
            desc: appState.lang === "gu" ? `૫૩૩/૧ પાણી-ગટર વેરો` : `533/1 Water-Drainage Tax`,
            date: w.datePaid,
            amount: w.amount,
            isIncome: false
        });
    });

    // Add Torrent Power
    appState.torrentBills.forEach(b => {
        activities.push({
            type: "utility",
            desc: `Torrent Power (${b.period})`,
            date: b.datePaid,
            amount: b.amount,
            isIncome: false
        });
    });

    // Add Gas
    appState.gasBills.forEach(g => {
        activities.push({
            type: "utility",
            desc: `Gujarat Gas (${g.period})`,
            date: g.datePaid,
            amount: g.amount,
            isIncome: false
        });
    });

    // Add UGVCL
    appState.ugvclBills.forEach(u => {
        const house = appState.houses.find(h => h.id === u.houseId);
        const houseName = house ? house.name.split(',')[0] : `Kolavada`;
        activities.push({
            type: "utility",
            desc: appState.lang === "gu" ? `${houseName} UGVCL બિલ (${u.period})` : `${houseName} UGVCL Light (${u.period})`,
            date: u.datePaid,
            amount: u.amount,
            isIncome: u.paidBy === "tenant" ? true : false,
            isNeutral: u.paidBy === "tenant"
        });
    });

    // Add Milk
    appState.milkBills.forEach(m => {
        activities.push({
            type: "milk",
            desc: appState.lang === "gu" ? `દૂધ ચૂકવણી (${formatDisplayMonth(m.monthYear)})` : `Milk bill paid (${formatDisplayMonth(m.monthYear)})`,
            date: m.datePaid,
            amount: m.amount,
            isIncome: false
        });
    });

    // Add Daily Expenses
    appState.dailyExpenses.forEach(d => {
        activities.push({
            type: "expense",
            desc: d.description,
            date: d.date,
            amount: d.amount,
            isIncome: false
        });
    });

    // Sort descending by date
    activities.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Render activity list
    const listContainer = document.getElementById("dashboard-activity-list");
    listContainer.innerHTML = "";
    
    if (activities.length === 0) {
        listContainer.innerHTML = `<p class="lang-gu">કોઈ પ્રવૃત્તિ નથી.</p><p class="lang-en">No activities recorded.</p>`;
        return;
    }

    activities.slice(0, 5).forEach(act => {
        const row = document.createElement("div");
        row.className = "activity-item";
        
        let iconHtml = '<i class="fa-solid fa-receipt"></i>';
        if (act.type === "rent") iconHtml = '<i class="fa-solid fa-home"></i>';
        else if (act.type === "utility") iconHtml = '<i class="fa-solid fa-bolt-lightning"></i>';
        else if (act.type === "milk") iconHtml = '<i class="fa-solid fa-cow"></i>';
        
        let amtClass = act.isIncome ? "positive" : "negative";
        let amtSign = act.isIncome ? "+" : "-";
        
        if (act.isNeutral) {
            amtClass = "neutral";
            amtSign = "✓";
            row.style.opacity = "0.7";
        }

        row.innerHTML = `
            <div class="activity-icon-bg ${act.type}">
                ${iconHtml}
            </div>
            <div class="activity-details">
                <div class="activity-desc">${act.desc}</div>
                <div class="activity-time">${formatDisplayDate(act.date)}</div>
            </div>
            <div class="activity-amount ${amtClass}">${amtSign}₹${act.amount}</div>
        `;
        listContainer.appendChild(row);
    });
}

// Helper to format date nicely
function formatDisplayDate(dateStr) {
    if (!dateStr) return "";
    try {
        // જો તારીખમાં સમય હોય (ISO format), તો ફક્ત તારીખનો ભાગ જ લેવો
        const cleanDate = dateStr.split("T")[0];
        const parts = cleanDate.split("-");
        if (parts.length === 2) {
            const monthsEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const monthsGu = ["જાન્યુઆરી", "ફેબ્રુઆરી", "માર્ચ", "એપ્રિલ", "મે", "જૂન", "જુલાઈ", "ઓગસ્ટ", "સપ્ટેમ્બર", "ઓક્ટોબર", "નવેમ્બર", "ડિસેમ્બર"];
            const mIdx = parseInt(parts[1], 10) - 1;
            return appState.lang === "gu" ? `${monthsGu[mIdx]} ${parts[0]}` : `${monthsEn[mIdx]} ${parts[0]}`;
        } else if (parts.length === 3) {
            return `${parts[2]}/${parts[1]}/${parts[0]}`;
        }
    } catch(e) {
        return dateStr;
    }
    return dateStr;
}

// ફક્ત મહિનો અને વર્ષ બતાવવા માટેનું હેલ્પર ફંક્શન
function formatDisplayMonth(dateStr) {
    if (!dateStr) return "";
    try {
        const cleanDate = dateStr.split("T")[0];
        const parts = cleanDate.split("-");
        if (parts.length >= 2) {
            const monthsEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const monthsGu = ["જાન્યુઆરી", "ફેબ્રુઆરી", "માર્ચ", "એપ્રિલ", "મે", "જૂન", "જુલાઈ", "ઓગસ્ટ", "સપ્ટેમ્બર", "ઓક્ટોબર", "નવેમ્બર", "ડિસેમ્બર"];
            const mIdx = parseInt(parts[1], 10) - 1;
            return appState.lang === "gu" ? `${monthsGu[mIdx]} ${parts[0]}` : `${monthsEn[mIdx]} ${parts[0]}`;
        }
    } catch(e) {
        return dateStr;
    }
    return dateStr;
}

// 2. Houses View Logic
function renderHouses() {
    const listContainer = document.getElementById("houses-card-grid");
    listContainer.innerHTML = "";
    
    appState.houses.forEach(house => {
        const card = document.createElement("div");
        card.className = "house-card";
        
        const lang = appState.lang;
        const tenantVal = house.tenantName ? house.tenantName : (lang === "gu" ? "ખાલી" : "Vacant");
        const depositText = house.depositAmount > 0 
            ? `₹${house.depositAmount} (${lang === "gu" ? "ચૂકવેલ" : "Paid"})` 
            : (lang === "gu" ? "કોઈ નહીં" : "None");
            
        const statusClass = house.status === "occupied" ? "occupied" : "vacant";
        const statusText = house.status === "occupied" 
            ? (lang === "gu" ? "ભાડે આપેલ" : "Occupied") 
            : (lang === "gu" ? "ખાલી" : "Vacant");

        card.innerHTML = `
            <div class="house-card-header">
                <span class="house-title">${house.name}</span>
                <span class="house-status-tag ${statusClass}">${statusText}</span>
            </div>
            <div class="house-card-body">
                <div class="house-detail-row">
                    <span class="house-detail-label">${TRANSLATIONS[lang].tenantLabel}</span>
                    <span class="house-detail-value">${tenantVal}</span>
                </div>
                <div class="house-detail-row">
                    <span class="house-detail-label">${TRANSLATIONS[lang].phoneLabel}</span>
                    <span class="house-detail-value">${house.tenantPhone || "-"}</span>
                </div>
                <div class="house-detail-row">
                    <span class="house-detail-label">${TRANSLATIONS[lang].monthlyRentLabel}</span>
                    <span class="house-detail-value">₹${house.rentAmount}</span>
                </div>
                <div class="house-detail-row">
                    <span class="house-detail-label">${TRANSLATIONS[lang].depositLabel}</span>
                    <span class="house-detail-value">${depositText}</span>
                </div>
            </div>
            <div class="house-card-actions">
                <button class="house-btn house-btn-pay" onclick="openRentPaymentModal(${house.id})">
                    <i class="fa-solid fa-plus"></i> ${TRANSLATIONS[lang].addRentBtn}
                </button>
                <button class="house-btn house-btn-history" onclick="viewRentHistory(${house.id})">
                    <i class="fa-solid fa-history"></i> ${TRANSLATIONS[lang].rentHistoryBtn}
                </button>
            </div>
        `;
        listContainer.appendChild(card);
    });
}

let selectedHouseHistoryId = null;
function viewRentHistory(houseId) {
    selectedHouseHistoryId = houseId;
    const historyContainer = document.getElementById("house-history-panel");
    historyContainer.style.display = "flex";
    
    const house = appState.houses.find(h => h.id === houseId);
    document.getElementById("history-house-name").textContent = house ? house.name.split(',')[0] : "";

    renderRentHistoryTable();
}

function renderRentHistoryTable() {
    const listBody = document.getElementById("rent-history-table-body");
    listBody.innerHTML = "";

    const filtered = appState.rentPayments.filter(pay => pay.houseId === selectedHouseHistoryId);
    
    if (filtered.length === 0) {
        listBody.innerHTML = `<tr><td colspan="7" style="text-align: center;">No history found.</td></tr>`;
        return;
    }

    filtered.sort((a,b) => new Date(b.monthYear) - new Date(a.monthYear));

    filtered.forEach(p => {
        const row = document.createElement("tr");
        
        let statusBadge = "";
        if (p.status === "paid") {
            statusBadge = `<span class="badge-status paid">${TRANSLATIONS[appState.lang].statusPaid}</span>`;
        } else if (p.status === "partial") {
            statusBadge = `<span class="badge-status partial">${TRANSLATIONS[appState.lang].statusPartial}</span>`;
        } else {
            statusBadge = `<span class="badge-status unpaid">${TRANSLATIONS[appState.lang].statusUnpaid}</span>`;
        }

        row.innerHTML = `
            <td>${formatDisplayMonth(p.monthYear)}</td>
            <td>₹${p.amount}</td>
            <td>${formatDisplayDate(p.datePaid)}</td>
            <td>${p.paymentMode || ""}</td>
            <td>${statusBadge}</td>
            <td>${p.note || ""}</td>
            <td>
                <button class="btn btn-secondary btn-sm" onclick="deleteRentRecord('${p.id}')">
                    <i class="fa-solid fa-trash text-danger"></i>
                </button>
                <button class="btn btn-secondary btn-sm" onclick="openEditRentModal('${p.id}')">
                    <i class="fa-solid fa-edit text-info"></i>
                </button>
            </td>
        `;
        listBody.appendChild(row);
    });
}

function closeRentHistory() {
    document.getElementById("house-history-panel").style.display = "none";
}

function deleteRentRecord(payId) {
    if (confirm(appState.lang === "gu" ? "ખરેખર આ રેકોર્ડ રદ કરવો છે?" : "Are you sure you want to delete this record?")) {
        appState.rentPayments = appState.rentPayments.filter(p => p.id !== payId);
        saveState();
        renderRentHistoryTable();
        renderDashboard();
    }
}

// 3. Taxes & Vero Module Logic
function renderTaxes() {
    // Render Property Taxes Table
    const propBody = document.getElementById("proptax-table-body");
    propBody.innerHTML = "";

    const sortedProp = [...appState.propertyTaxes].sort((a, b) => new Date(b.datePaid) - new Date(a.datePaid));
    
    if (sortedProp.length === 0) {
        propBody.innerHTML = `<tr><td colspan="7" style="text-align: center;">No property tax logs.</td></tr>`;
    } else {
        sortedProp.forEach(t => {
            const house = appState.houses.find(h => h.id === t.houseId);
            const houseName = house ? house.name.split(',')[0] : `Ghar ${t.houseId}`;
            const row = document.createElement("tr");
            row.innerHTML = `
                <td><strong>${houseName}</strong></td>
                <td><code>${t.tenamentNo}</code></td>
                <td>${t.year}</td>
                <td>₹${t.amount}</td>
                <td>${formatDisplayDate(t.datePaid)}</td>
                <td>${t.note || ""}</td>
                <td>
                    <button class="btn btn-secondary btn-sm" onclick="deletePropertyTax('${t.id}')">
                        <i class="fa-solid fa-trash text-danger"></i>
                    </button>
                    <button class="btn btn-secondary btn-sm" onclick="openEditPropTaxModal('${t.id}')">
                        <i class="fa-solid fa-edit text-info"></i>
                    </button>
                </td>
            `;
            propBody.appendChild(row);
        });
    }

    // Render Water Taxes Table (533/1 Specific)
    const waterBody = document.getElementById("watertax-table-body");
    waterBody.innerHTML = "";

    const sortedWater = [...appState.waterTaxes].sort((a, b) => new Date(b.datePaid) - new Date(a.datePaid));

    if (sortedWater.length === 0) {
        waterBody.innerHTML = `<tr><td colspan="6" style="text-align: center;">No water tax logs.</td></tr>`;
    } else {
        sortedWater.forEach(w => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td><code>${w.customerNo}</code></td>
                <td>${w.year}</td>
                <td>₹${w.amount}</td>
                <td>${formatDisplayDate(w.datePaid)}</td>
                <td>${w.note || ""}</td>
                <td>
                    <button class="btn btn-secondary btn-sm" onclick="deleteWaterTax('${w.id}')">
                        <i class="fa-solid fa-trash text-danger"></i>
                    </button>
                    <button class="btn btn-secondary btn-sm" onclick="openEditWaterTaxModal('${w.id}')">
                        <i class="fa-solid fa-edit text-info"></i>
                    </button>
                </td>
            `;
            waterBody.appendChild(row);
        });
    }
}

function deletePropertyTax(id) {
    if (confirm(appState.lang === "gu" ? "ઘરવેરો કાઢી નાખવો છે?" : "Delete this property tax log?")) {
        appState.propertyTaxes = appState.propertyTaxes.filter(t => t.id !== id);
        saveState();
        renderTaxes();
        renderDashboard();
    }
}

function deleteWaterTax(id) {
    if (confirm(appState.lang === "gu" ? "પાણી વેરો કાઢી નાખવો છે?" : "Delete this water tax log?")) {
        appState.waterTaxes = appState.waterTaxes.filter(w => w.id !== id);
        saveState();
        renderTaxes();
        renderDashboard();
    }
}

// 4. Utilities Module Logic (Torrent, Gas & UGVCL)
function renderUtilities() {
    const torrentBody = document.getElementById("torrent-table-body");
    torrentBody.innerHTML = "";

    const torrents = appState.torrentBills.map(b => ({ ...b, source: "torrent" }));
    const gases = appState.gasBills.map(b => ({ ...b, source: "gas" }));
    const combined533 = [...torrents, ...gases].sort((a, b) => new Date(b.datePaid) - new Date(a.datePaid));

    if (combined533.length === 0) {
        torrentBody.innerHTML = `<tr><td colspan="7" style="text-align: center;">No logs for 533/1.</td></tr>`;
    } else {
        combined533.forEach(b => {
            const row = document.createElement("tr");
            const typeText = b.source === "torrent" 
                ? `<span class="badge-status paid">${TRANSLATIONS[appState.lang].billPower}</span>`
                : `<span class="badge-status partial">${TRANSLATIONS[appState.lang].billGas}</span>`;
            
            const custNo = b.source === "torrent" ? b.customerId : b.customerNo;

            row.innerHTML = `
                <td>${typeText}</td>
                <td><code>${custNo}</code></td>
                <td>${b.period}</td>
                <td>₹${b.amount}</td>
                <td>${formatDisplayDate(b.datePaid)}</td>
                <td>${b.note || ""}</td>
                <td>
                    <button class="btn btn-secondary btn-sm" onclick="delete533Bill('${b.id}', '${b.source}')">
                        <i class="fa-solid fa-trash text-danger"></i>
                    </button>
                    <button class="btn btn-secondary btn-sm" onclick="openEdit533BillModal('${b.id}', '${b.source}')">
                        <i class="fa-solid fa-edit text-info"></i>
                    </button>
                </td>
            `;
            torrentBody.appendChild(row);
        });
    }

    const ugvclBody = document.getElementById("ugvcl-table-body");
    ugvclBody.innerHTML = "";

    const sortedUgvcl = [...appState.ugvclBills].sort((a, b) => new Date(b.datePaid) - new Date(a.datePaid));

    if (sortedUgvcl.length === 0) {
        ugvclBody.innerHTML = `<tr><td colspan="8" style="text-align: center;">No UGVCL logs.</td></tr>`;
    } else {
        sortedUgvcl.forEach(u => {
            const house = appState.houses.find(h => h.id === u.houseId);
            const houseName = house ? house.name.split(',')[0] : `Kolavada`;
            const row = document.createElement("tr");

            const paidByTag = u.paidBy === "tenant"
                ? `<span class="badge-status paid">${TRANSLATIONS[appState.lang].paidByTenant}</span>`
                : `<span class="badge-status unpaid">${TRANSLATIONS[appState.lang].paidByOwner}</span>`;

            row.innerHTML = `
                <td><strong>${houseName}</strong></td>
                <td><code>${u.consumerNo}</code></td>
                <td>${u.period}</td>
                <td>₹${u.amount}</td>
                <td>${formatDisplayDate(u.datePaid)}</td>
                <td>${paidByTag}</td>
                <td>${u.note || ""}</td>
                <td>
                    <button class="btn btn-secondary btn-sm" onclick="deleteUgvclBill('${u.id}')">
                        <i class="fa-solid fa-trash text-danger"></i>
                    </button>
                    <button class="btn btn-secondary btn-sm" onclick="openEditUgvclModal('${u.id}')">
                        <i class="fa-solid fa-edit text-info"></i>
                    </button>
                </td>
            `;
            ugvclBody.appendChild(row);
        });
    }
}

function delete533Bill(id, source) {
    if (confirm(appState.lang === "gu" ? "બિલ રેકોર્ડ કાઢી નાખવો છે?" : "Delete this bill record?")) {
        if (source === "torrent") {
            appState.torrentBills = appState.torrentBills.filter(b => b.id !== id);
        } else {
            appState.gasBills = appState.gasBills.filter(b => b.id !== id);
        }
        saveState();
        renderUtilities();
        renderDashboard();
    }
}

function deleteUgvclBill(id) {
    if (confirm(appState.lang === "gu" ? "UGVCL બિલ રેકોર્ડ કાઢી નાખવો છે?" : "Delete this UGVCL record?")) {
        appState.ugvclBills = appState.ugvclBills.filter(u => u.id !== id);
        saveState();
        renderUtilities();
        renderDashboard();
    }
}

// 5. Milk Payments View Logic
function renderMilk() {
    const listBody = document.getElementById("milk-table-body");
    listBody.innerHTML = "";

    const sorted = [...appState.milkBills].sort((a, b) => new Date(b.datePaid || b.monthYear + "-01") - new Date(a.datePaid || a.monthYear + "-01"));
    sorted.reverse();

    if (sorted.length === 0) {
        listBody.innerHTML = `<tr><td colspan="8" style="text-align: center;">No milk bill logs.</td></tr>`;
        return;
    }

    sorted.forEach(m => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${formatDisplayMonth(m.monthYear)}</td>
            <td>${m.vendorName}</td>
            <td>${m.liters} L</td>
            <td>₹${m.rate}</td>
            <td><strong>₹${m.amount}</strong></td>
            <td>${formatDisplayDate(m.datePaid)}</td>
            <td>${m.note || ""}</td>
            <td>
                <button class="btn btn-secondary btn-sm" onclick="deleteMilkRecord('${m.id}')">
                    <i class="fa-solid fa-trash text-danger"></i>
                </button>
                <button class="btn btn-secondary btn-sm" onclick="openEditMilkModal('${m.id}')">
                    <i class="fa-solid fa-edit text-info"></i>
                </button>
            </td>
        `;
        listBody.appendChild(row);
    });
}

function deleteMilkRecord(milkId) {
    if (confirm(appState.lang === "gu" ? "ખરેખર આ દૂધ પેમેન્ટ હિસ્ટ્રી કાઢી નાખવી છે?" : "Are you sure you want to delete this milk bill record?")) {
        appState.milkBills = appState.milkBills.filter(m => m.id !== milkId);
        saveState();
        renderMilk();
        renderDashboard();
    }
}

// 6. Daily Ledger (Expenses) View Logic
function renderDailyLedger() {
    const listBody = document.getElementById("daily-table-body");
    listBody.innerHTML = "";

    const sorted = [...appState.dailyExpenses].sort((a, b) => new Date(b.date) - new Date(a.date));

    if (sorted.length === 0) {
        listBody.innerHTML = `<tr><td colspan="6" style="text-align: center;">No expense ledger logs.</td></tr>`;
        return;
    }

    sorted.forEach(d => {
        const row = document.createElement("tr");
        const catKey = "cat" + d.category.charAt(0).toUpperCase() + d.category.slice(1);
        const catLabel = TRANSLATIONS[appState.lang][catKey] || d.category;

        row.innerHTML = `
            <td>${formatDisplayDate(d.date)}</td>
            <td>${d.description}</td>
            <td><span class="badge-status partial">${catLabel}</span></td>
            <td><strong>₹${d.amount}</strong></td>
            <td>${d.paymentMode}</td>
            <td>
                <button class="btn btn-secondary btn-sm" onclick="deleteDailyExpense('${d.id}')">
                    <i class="fa-solid fa-trash text-danger"></i>
                </button>
                <button class="btn btn-secondary btn-sm" onclick="openEditDailyModal('${d.id}')">
                    <i class="fa-solid fa-edit text-info"></i>
                </button>
            </td>
        `;
        listBody.appendChild(row);
    });
}

function deleteDailyExpense(id) {
    if (confirm(appState.lang === "gu" ? "આ રોજિંદો ખર્ચ કાઢી નાખવો છે?" : "Delete this expense record?")) {
        appState.dailyExpenses = appState.dailyExpenses.filter(d => d.id !== id);
        saveState();
        renderDailyLedger();
        renderDashboard();
    }
}

// 7. Bank of Baroda View Logic
function renderBob() {
    const listBody = document.getElementById("bob-table-body");
    listBody.innerHTML = "";

    const sorted = [...appState.bobTransactions].sort((a, b) => new Date(b.date) - new Date(a.date));

    // Stats calculations
    const totalWithdrawal = appState.bobTransactions.reduce((sum, t) => sum + t.amount, 0);
    const totalFD = appState.bobTransactions
        .filter(t => t.description.toLowerCase().includes("fd") || t.description.toLowerCase().includes("fixed deposit"))
        .reduce((sum, t) => sum + t.amount, 0);
    const totalTaxes = appState.bobTransactions
        .filter(t => t.description.toLowerCase().includes("tax") || t.description.toLowerCase().includes("property tax"))
        .reduce((sum, t) => sum + t.amount, 0);
        
    document.getElementById("bob-total-withdrawal").textContent = `₹${Math.round(totalWithdrawal).toLocaleString('en-IN')}`;
    document.getElementById("bob-total-fd").textContent = `₹${Math.round(totalFD).toLocaleString('en-IN')}`;
    document.getElementById("bob-total-taxes").textContent = `₹${Math.round(totalTaxes).toLocaleString('en-IN')}`;

    if (sorted.length === 0) {
        listBody.innerHTML = `<tr><td colspan="5" style="text-align: center;">No BOB transactions logged.</td></tr>`;
        return;
    }

    sorted.forEach(t => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${formatDisplayDate(t.date)}</td>
            <td><code>${t.narration}</code></td>
            <td><strong>₹${t.amount.toLocaleString('en-IN')}</strong></td>
            <td>${t.description}</td>
            <td>
                <button class="btn btn-secondary btn-sm" onclick="deleteBobTransaction('${t.id}')">
                    <i class="fa-solid fa-trash text-danger"></i>
                </button>
                <button class="btn btn-secondary btn-sm" onclick="openEditBobModal('${t.id}')">
                    <i class="fa-solid fa-edit text-info"></i>
                </button>
            </td>
        `;
        listBody.appendChild(row);
    });
}

function deleteBobTransaction(id) {
    if (confirm(appState.lang === "gu" ? "આ ટ્રાન્ઝેક્શન કાઢી નાખવું છે?" : "Delete this bank transaction?")) {
        appState.bobTransactions = appState.bobTransactions.filter(t => t.id !== id);
        saveState();
        renderBob();
        renderDashboard();
    }
}

// Export BOB Transactions to Excel (CSV)
function exportBobToExcel() {
    const lang = appState.lang;
    const headers = lang === "gu" 
        ? ["તારીખ", "બેંક વિગત (Narration)", "રકમ (રૂ.)", "ખર્ચ વિગત / વર્ણન"]
        : ["Date", "Narration", "Amount (₹)", "Description"];
        
    let csvContent = "\uFEFF"; // UTF-8 BOM for Excel compatibility
    csvContent += headers.map(h => `"${h.replace(/"/g, '""')}"`).join(",") + "\n";
    
    // Sort transactions chronologically
    const sorted = [...appState.bobTransactions].sort((a, b) => new Date(b.date) - new Date(a.date));
    
    sorted.forEach(t => {
        const dateStr = formatDisplayDate(t.date);
        const row = [
            dateStr,
            t.narration,
            t.amount,
            t.description
        ];
        csvContent += row.map(v => `"${String(v).replace(/"/g, '""')}"`).join(",") + "\n";
    });
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    
    const today = new Date().toISOString().split('T')[0];
    const fileName = lang === "gu" 
        ? `બીઓબી_ખાતું_ઉપાડ_હિસ્ટ્રી_${today}.csv`
        : `BOB_Bank_Debits_History_${today}.csv`;
        
    link.setAttribute("href", url);
    link.setAttribute("download", fileName);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Helper function to download CSV
function downloadCSV(csvContent, baseName) {
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const today = new Date().toISOString().split('T')[0];
    link.setAttribute("href", url);
    link.setAttribute("download", `${baseName}_${today}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Export Rent Payments to Excel
function exportRentToExcel() {
    const lang = appState.lang;
    const headers = lang === "gu" 
        ? ["મકાન (House)", "મહિનો", "રકમ (રૂ.)", "તારીખ", "પદ્ધતિ", "સ્ટેટસ", "નોંધ"]
        : ["House Name", "Month", "Amount (₹)", "Date Paid", "Mode", "Status", "Notes"];
    let csvContent = "\uFEFF";
    csvContent += headers.map(h => `"${h.replace(/"/g, '""')}"`).join(",") + "\n";
    const sorted = [...appState.rentPayments].sort((a, b) => new Date(b.datePaid) - new Date(a.datePaid));
    sorted.forEach(p => {
        const house = appState.houses.find(h => h.id === p.houseId);
        // Full house name for clarity in spreadsheet
        const houseName = house ? house.name : `House ${p.houseId}`;
        const row = [houseName, formatDisplayMonth(p.monthYear), p.amount, formatDisplayDate(p.datePaid), p.paymentMode, p.status, p.note || ""];
        csvContent += row.map(v => `"${String(v).replace(/"/g, '""')}"`).join(",") + "\n";
    });
    downloadCSV(csvContent, lang === "gu" ? "ભાડા_ચુકવણી_હિસ્ટ્રી" : "Rent_Payment_History");
}

// Export Taxes to Excel (Property + Water)
function exportTaxesToExcel() {
    const lang = appState.lang;
    const headers = lang === "gu" 
        ? ["પ્રકાર", "મકાન (House)", "વર્ષ", "રકમ (રૂ.)", "તારીખ", "નોંધ"]
        : ["Tax Type", "House Name", "Year", "Amount (₹)", "Date", "Notes"];
    let csvContent = "\uFEFF";
    csvContent += headers.map(h => `"${h.replace(/"/g, '""')}"`).join(",") + "\n";
    appState.propertyTaxes.forEach(t => {
        const house = appState.houses.find(h => h.id === t.houseId);
        const houseName = house ? house.name : t.tenamentNo;
        const row = [lang === "gu" ? "ઘર વેરો" : "Property Tax", houseName, t.year, t.amount, formatDisplayDate(t.datePaid), t.note || ""];
        csvContent += row.map(v => `"${String(v).replace(/"/g, '""')}"`).join(",") + "\n";
    });
    const mainHouse = appState.houses.find(h => h.id === 1);
    const mainHouseName = mainHouse ? mainHouse.name : "533/1, 5B, Gandhinagar";
    appState.waterTaxes.forEach(w => {
        const row = [lang === "gu" ? "પાણી વેરો" : "Water Tax", mainHouseName, w.year, w.amount, formatDisplayDate(w.datePaid), w.note || ""];
        csvContent += row.map(v => `"${String(v).replace(/"/g, '""')}"`).join(",") + "\n";
    });
    downloadCSV(csvContent, lang === "gu" ? "વેરા_ચુકવણી_હિસ્ટ્રી" : "Tax_Payment_History");
}

// Export Utilities to Excel (Torrent, Gas, UGVCL)
function exportUtilitiesToExcel() {
    const lang = appState.lang;
    const headers = lang === "gu" 
        ? ["પ્રકાર", "મકાન (House)", "સમયગાળો", "રકમ (રૂ.)", "તારીખ", "ભરનાર", "નોંધ"]
        : ["Utility Type", "House Name", "Period", "Amount (₹)", "Date", "Paid By", "Notes"];
    let csvContent = "\uFEFF";
    csvContent += headers.map(h => `"${h.replace(/"/g, '""')}"`).join(",") + "\n";
    const mainHouse = appState.houses.find(h => h.id === 1);
    const mainHouseName = mainHouse ? mainHouse.name : "533/1, 5B, Gandhinagar";
    appState.torrentBills.forEach(b => {
        const row = ["Torrent Power", mainHouseName, b.period, b.amount, formatDisplayDate(b.datePaid), lang === "gu" ? "માલિક" : "Owner", b.note || ""];
        csvContent += row.map(v => `"${String(v).replace(/"/g, '""')}"`).join(",") + "\n";
    });
    appState.gasBills.forEach(b => {
        const row = ["Gujarat Gas", mainHouseName, b.period, b.amount, formatDisplayDate(b.datePaid), lang === "gu" ? "માલિક" : "Owner", b.note || ""];
        csvContent += row.map(v => `"${String(v).replace(/"/g, '""')}"`).join(",") + "\n";
    });
    appState.ugvclBills.forEach(b => {
        const house = appState.houses.find(h => h.id === b.houseId);
        const houseName = house ? house.name : b.consumerNo;
        const row = ["UGVCL", houseName, b.period, b.amount, formatDisplayDate(b.datePaid), b.paidBy, b.note || ""];
        csvContent += row.map(v => `"${String(v).replace(/"/g, '""')}"`).join(",") + "\n";
    });
    downloadCSV(csvContent, lang === "gu" ? "બિલ_ચુકવણી_હિસ્ટ્રી" : "Utility_Bills_History");
}

// Export Milk Bills to Excel
function exportMilkToExcel() {
    const lang = appState.lang;
    const headers = lang === "gu" 
        ? ["મકાન (House)", "મહિનો", "ડેરી", "લીટર", "ભાવ", "કુલ રકમ", "તારીખ", "નોંધ"]
        : ["House Name", "Month", "Vendor", "Liters", "Rate", "Total Amount", "Date Paid", "Notes"];
    let csvContent = "\uFEFF";
    csvContent += headers.map(h => `"${h.replace(/"/g, '""')}"`).join(",") + "\n";
    const sorted = [...appState.milkBills].sort((a, b) => new Date(b.datePaid) - new Date(a.datePaid));
    const mainHouse = appState.houses.find(h => h.id === 1);
    const mainHouseName = mainHouse ? mainHouse.name : "533/1, 5B, Gandhinagar";
    sorted.forEach(m => {
        const row = [mainHouseName, formatDisplayMonth(m.monthYear), m.vendorName, m.liters, m.rate, m.amount, formatDisplayDate(m.datePaid), m.note || ""];
        csvContent += row.map(v => `"${String(v).replace(/"/g, '""')}"`).join(",") + "\n";
    });
    downloadCSV(csvContent, lang === "gu" ? "દૂધ_બિલ_હિસ્ટ્રી" : "Milk_Bills_History");
}

// Export Daily Expenses to Excel
function exportDailyToExcel() {
    const lang = appState.lang;
    const headers = lang === "gu" 
        ? ["મકાન (House)", "તારીખ", "વિગત", "શ્રેણી", "રકમ (રૂ.)", "પદ્ધતિ", "નોંધ"]
        : ["House Name", "Date", "Description", "Category", "Amount (₹)", "Mode", "Notes"];
    let csvContent = "\uFEFF";
    csvContent += headers.map(h => `"${h.replace(/"/g, '""')}"`).join(",") + "\n";
    const sorted = [...appState.dailyExpenses].sort((a, b) => new Date(b.date) - new Date(a.date));
    const mainHouse = appState.houses.find(h => h.id === 1);
    const mainHouseName = mainHouse ? mainHouse.name : "533/1, 5B, Gandhinagar";
    sorted.forEach(d => {
        const catKey = "cat" + d.category.charAt(0).toUpperCase() + d.category.slice(1);
        const catLabel = TRANSLATIONS[lang][catKey] || d.category;
        const row = [mainHouseName, formatDisplayDate(d.date), d.description, catLabel, d.amount, d.paymentMode, d.note || ""];
        csvContent += row.map(v => `"${String(v).replace(/"/g, '""')}"`).join(",") + "\n";
    });
    downloadCSV(csvContent, lang === "gu" ? "રોજિંદા_ખર્ચ_હિસ્ટ્રી" : "Daily_Expenses_History");
}

// 8. Backup & Settings View Logic
function renderBackupSettings() {
    const listContainer = document.getElementById("house-settings-list");
    listContainer.innerHTML = "";
    
    appState.houses.forEach(h => {
        const item = document.createElement("div");
        item.style.backgroundColor = "rgba(255,255,255,0.01)";
        item.style.padding = "16px";
        item.style.borderRadius = "var(--border-radius-md)";
        item.style.border = "1px solid var(--border-color)";
        item.style.display = "flex";
        item.style.justifyContent = "space-between";
        item.style.alignItems = "center";
        item.style.marginBottom = "12px";

        const mappedDetails = h.id === 1
            ? `Tenament: ${h.tenamentNo} | Water A/C: ${h.waterCustomerNo}`
            : `Tenament: ${h.tenamentNo} | UGVCL A/C: ${h.ugvclConsumerNo || "-"}`;

        item.innerHTML = `
            <div>
                <strong>${h.name}</strong><br>
                <span class="text-muted" style="font-size: 12px; display:block; margin: 4px 0;">
                    ${TRANSLATIONS[appState.lang].tenantLabel} ${h.tenantName || "-"} | 
                    ${TRANSLATIONS[appState.lang].monthlyRentLabel} ₹${h.rentAmount} | 
                    ${TRANSLATIONS[appState.lang].depositLabel} ₹${h.depositAmount}
                </span>
                <span class="text-blue" style="font-size: 11px; font-family: monospace;">${mappedDetails}</span>
            </div>
            <button class="btn btn-secondary btn-sm" onclick="openConfigureHouseModal(${h.id})">
                <i class="fa-solid fa-edit"></i>
            </button>
        `;
        listContainer.appendChild(item);
    });

    // Populate GSheet URL input if exists
    const gInput = document.getElementById("gsheet-url");
    if (gInput) gInput.value = appState.googleSheetUrl || "";
}

// Save Google Sheet URL to state
function saveGoogleSheetUrl() {
    const url = document.getElementById("gsheet-url").value.trim();
    appState.googleSheetUrl = url;
    saveState();
    alert(appState.lang === "gu" ? "URL સેવ થઈ ગઈ!" : "URL Saved Successfully!");
}

// Sync data to Google Sheets via Apps Script
async function syncToGoogleSheets() {
    // Get the latest URL from input field in case user didn't click save
    const urlInput = document.getElementById("gsheet-url");
    // Priority: Input field value (if not empty) > Saved appState URL
    let currentUrl = (urlInput && urlInput.value.trim() !== "") ? urlInput.value.trim() : appState.googleSheetUrl;

    if (!currentUrl) {
        alert(appState.lang === "gu" ? "કૃપા કરીને પહેલા URL સેટ કરો." : "Please set the Google Apps Script URL first.");
        return;
    }

    const btn = document.querySelector(".btn-sync-cloud");
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Syncing...';
    btn.disabled = true;

    try {
        // Send a copy with formatted monthYear for Google Sheets display
        const syncState = JSON.parse(JSON.stringify(appState));
        if (syncState.rentPayments) {
            syncState.rentPayments.forEach(rp => {
                rp.monthYear = formatDisplayMonth(rp.monthYear);
            });
        }
        if (syncState.milkBills) {
            syncState.milkBills.forEach(mb => {
                mb.monthYear = formatDisplayMonth(mb.monthYear);
            });
        }
        
        await fetch(currentUrl, {
            method: 'POST',
            mode: 'no-cors', // 'no-cors' વાપરવાથી "Failed to fetch" એરર નહીં આવે
            cache: 'no-cache',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify(syncState)
        });
        
        // no-cors મોડમાં આપણે સર્વરનો જવાબ વાંચી શકતા નથી, 
        // પણ જો fetch એરર ન આપે તો તેનો અર્થ છે કે ડેટા મોકલાઈ ગયો છે.
        alert(TRANSLATIONS[appState.lang].syncSuccess);
    } catch (error) {
        console.error("Sync error:", error);
        alert(`${TRANSLATIONS[appState.lang].syncError} ${error.message || ''}`);
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
    }
}

// Google Sheet માંથી ડેટા ડાઉનલોડ કરીને આ સિસ્ટમમાં અપડેટ કરવા માટે
async function importFromGoogleSheets() {
    // પ્લેસહોલ્ડર કે ઇનપુટ માંથી લેટેસ્ટ URL લો
    const urlInput = document.getElementById("gsheet-url");
    const url = (urlInput && urlInput.value.trim() !== "") ? urlInput.value.trim() : (appState.googleSheetUrl ? appState.googleSheetUrl.trim() : null);

    if (!url) {
        alert(appState.lang === "gu" ? "કૃપા કરીને પહેલા URL સેટ કરો." : "Please set the URL first.");
        return;
    }

    if (!confirm(appState.lang === "gu" ? "શું તમે Google Sheet માંથી ડેટા લોડ કરવા માંગો છો? આનાથી અત્યારનો લોકલ ડેટા બદલાઈ જશે." : "Load data from Google Sheet? This will overwrite local data.")) return;

    console.log("Fetching from URL:", url); // Debugging માટે

    try {
        if (url.includes("docs.google.com/spreadsheets")) {
            throw new Error(appState.lang === "gu" ? "તમે શીટનું URL નાખ્યું છે. કૃપા કરીને Apps Script નું Web App URL નાખો." : "You entered Spreadsheet URL. Please use Web App URL.");
        }

        console.log("Starting load from:", url);
        // બ્રાઉઝર કેશ બાયપાસ કરવા માટે ટાઈમસ્ટેમ્પ ઉમેર્યો
        const fetchUrl = url + (url.includes('?') ? '&' : '?') + 't=' + Date.now();

        const response = await fetch(fetchUrl, { 
            method: 'GET'
        });
        
        if (!response.ok) {
            throw new Error(`HTTP status ${response.status}`);
        }

            try {
                const cloudData = await response.json();
                
                // ચેક કરો કે ડેટા ખરેખર મળ્યો છે અને તે ખાલી નથી
                console.log("Cloud data check:", cloudData);
                if (cloudData && typeof cloudData === 'object' && Object.keys(cloudData).length > 0) {
                    // Cloud data માં જો એરર હોય તો
                    if (cloudData.success === false) {
                        throw new Error(cloudData.error || "Unknown server error");
                    }
                    
                    // Clean date strings from ISO format to YYYY-MM-DD for all relevant arrays
                    if (cloudData.houses) {
                        cloudData.houses.forEach(h => {
                            h.date = cleanDateString(h.date);
                        });
                    }
                    if (cloudData.rentPayments) {
                        cloudData.rentPayments.forEach(rp => {
                            rp.monthYear = parseFormattedMonth(rp.monthYear);
                            rp.datePaid = cleanDateString(rp.datePaid);
                        });
                    }
                    if (cloudData.propertyTaxes) {
                        cloudData.propertyTaxes.forEach(pt => {
                            pt.datePaid = cleanDateString(pt.datePaid);
                        });
                    }
                    if (cloudData.waterTaxes) {
                        cloudData.waterTaxes.forEach(wt => {
                            wt.datePaid = cleanDateString(wt.datePaid);
                        });
                    }
                    if (cloudData.torrentBills) {
                        cloudData.torrentBills.forEach(tb => {
                            tb.datePaid = cleanDateString(tb.datePaid);
                        });
                    }
                    if (cloudData.gasBills) {
                        cloudData.gasBills.forEach(gb => {
                            gb.datePaid = cleanDateString(gb.datePaid);
                        });
                    }
                    if (cloudData.ugvclBills) {
                        cloudData.ugvclBills.forEach(ub => {
                            ub.datePaid = cleanDateString(ub.datePaid);
                        });
                    }
                    if (cloudData.milkBills) {
                        cloudData.milkBills.forEach(mb => {
                            mb.monthYear = parseFormattedMonth(mb.monthYear);
                            mb.datePaid = cleanDateString(mb.datePaid);
                        });
                    }
                    if (cloudData.dailyExpenses) {
                        cloudData.dailyExpenses.forEach(de => {
                            de.date = cleanDateString(de.date);
                        });
                    }
                    if (cloudData.bobTransactions) {
                        cloudData.bobTransactions.forEach(bt => {
                            bt.date = cleanDateString(bt.date);
                        });
                    }

                    // ખાતરી કરો કે 'houses' કે 'rentPayments' જેવી મુખ્ય વિગતો ડેટામાં છે
                    console.log("importFromGoogleSheets: cloudData received:", cloudData); // Add this for debugging
                    if (!cloudData.houses && !cloudData.rentPayments) {
                        throw new Error(appState.lang === "gu" ? "શીટમાં ડેટા મળ્યો નથી." : "No data found in sheet.");
                    }

                    Object.keys(cloudData).forEach(key => {
                        if (Array.isArray(cloudData[key])) {
                            // જો Houses લોડ કરતા હોઈએ અને તારીખ ના હોય તો આજની તારીખ સેટ કરવી
                            if (key === 'houses') {
                                cloudData[key].forEach(h => { if (!h.date) h.date = new Date().toISOString().split('T')[0]; });
                            }
                            
                            // ખાતરી કરો કે રકમ અને ID વાળા ખાના નંબર તરીકે જ રહે
                            cloudData[key].forEach(item => {
                                if (item.amount !== undefined) item.amount = Number(item.amount);
                                if (item.rentAmount !== undefined) item.rentAmount = Number(item.rentAmount);
                                if (item.depositAmount !== undefined) item.depositAmount = Number(item.depositAmount);
                                
                                // ID અને HouseId ને નંબરમાં ફેરવો જેથી Comparison માં ભૂલ ના આવે
                                if (item.id !== undefined && key === 'houses') item.id = Number(item.id);
                                if (item.houseId !== undefined) item.houseId = Number(item.houseId);
                                
                                if (item.rate !== undefined) item.rate = Number(item.rate);
                                if (item.liters !== undefined) item.liters = Number(item.liters);
                            });
                            appState[key] = cloudData[key];
                        }
                    });
                    saveState();
                    // After importing, just re-render the current view, no need to re-initialize the whole app
                    const activeTab = document.querySelector(".menu-item.active")?.getAttribute("data-tab") || "dashboard";
                    renderView(activeTab);
                    alert(appState.lang === "gu" ? "ડેટા સફળતાપૂર્વક લોડ થઈ ગયો!" : "Data loaded successfully!");
                } else {
                    throw new Error("Invalid data format from sheet");
                }
            } catch (jsonError) {
                throw new Error(appState.lang === "gu" ? "Google Script એ JSON ને બદલે ખોટો જવાબ આપ્યો. સ્ક્રિપ્ટ એરર હોઈ શકે." : "Google Script sent non-JSON response. Might be a script error.");
            }
    } catch (error) {
        console.error("Load error:", error);
        let msg = appState.lang === "gu" ? "ડેટા લોડ કરવામાં ભૂલ થઈ: " : "Error loading data: ";
        
        if (error.message === "Failed to fetch") {
            msg += (appState.lang === "gu" 
                ? "Failed to fetch (CORS એરર). આ એરર ત્યારે જ આવે છે જ્યારે Apps Script માં 'Who has access' માં 'Anyone' પસંદ કરેલ ના હોય. પર્સનલ Gmail આઈડી વાપરો." 
                : "Failed to fetch (CORS). This happens if 'Who has access' is not set to 'Anyone'. Please use a personal Gmail account.");
        } else {
            msg += error.message;
        }
        alert(msg);
    }
}

// Open Edit House Config Modal
function openConfigureHouseModal(houseId) {
    const modal = document.getElementById("modal-edit-house");
    const house = appState.houses.find(h => h.id === houseId);
    if (!house) return;

    document.getElementById("edit-house-id").value = house.id;
    document.getElementById("edit-house-name").value = house.name;
    document.getElementById("edit-tenant-name").value = house.tenantName || "";
    document.getElementById("edit-tenant-phone").value = house.tenantPhone || "";
    document.getElementById("edit-rent-amount").value = house.rentAmount;
    document.getElementById("edit-deposit-amount").value = house.depositAmount || 0;
    document.getElementById("edit-deposit-status").value = house.depositStatus || "unpaid";
    document.getElementById("edit-house-status").value = house.status || "vacant";

    modal.classList.add("active");
}

function handleSaveHouseConfig(event) {
    event.preventDefault();
    const id = parseInt(document.getElementById("edit-house-id").value, 10);
    const house = appState.houses.find(h => h.id === id);
    if (!house) return;

    house.name = document.getElementById("edit-house-name").value;
    house.tenantName = document.getElementById("edit-tenant-name").value;
    house.tenantPhone = document.getElementById("edit-tenant-phone").value;
    house.rentAmount = parseInt(document.getElementById("edit-rent-amount").value, 10) || 0;
    house.depositAmount = parseInt(document.getElementById("edit-deposit-amount").value, 10) || 0;
    house.depositStatus = document.getElementById("edit-deposit-status").value;
    house.status = document.getElementById("edit-house-status").value;

    saveState();
    closeModal("modal-edit-house");
    renderBackupSettings();
    renderHouses();
    renderDashboard();
    populateHouseDropdowns();
}

// Dropdowns initialization
function populateHouseDropdowns() {
    const rentHouseSelect = document.getElementById("rent-house-id");
    const taxHouseSelect = document.getElementById("proptax-house-id");
    const ugvclHouseSelect = document.getElementById("ugvcl-house-id");

    const selectText = TRANSLATIONS[appState.lang].selectHouse;

    if (rentHouseSelect) {
        rentHouseSelect.innerHTML = `<option value="" disabled selected>${selectText}</option>`;
        appState.houses.forEach(h => {
            if (h.status === "occupied") {
                rentHouseSelect.innerHTML += `<option value="${h.id}">${h.name.split(',')[0]} (${h.tenantName})</option>`;
            }
        });
    }

    if (taxHouseSelect) {
        taxHouseSelect.innerHTML = `<option value="" disabled selected>${selectText}</option>`;
        appState.houses.forEach(h => {
            taxHouseSelect.innerHTML += `<option value="${h.id}">${h.name.split(',')[0]}</option>`;
        });
    }

    if (ugvclHouseSelect) {
        ugvclHouseSelect.innerHTML = `<option value="" disabled selected>${selectText}</option>`;
        appState.houses.forEach(h => {
            if (h.id > 1) {
                ugvclHouseSelect.innerHTML += `<option value="${h.id}">${h.name.split(',')[0]}</option>`;
            }
        });
    }
}

// Backup Utilities
function downloadBackup() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState, null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    
    const today = new Date();
    const dStr = today.toISOString().split('T')[0];
    dlAnchorElem.setAttribute("download", `hitesh_finance_backup_${dStr}.json`);
    dlAnchorElem.click();
}

function handleImportBackup(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const parsed = JSON.parse(e.target.result);
            if (parsed.houses && parsed.rentPayments) {
                appState = parsed;
                saveState();
                alert(TRANSLATIONS[appState.lang].importSuccess);
                initApp();
            } else {
                alert(TRANSLATIONS[appState.lang].importFailed);
            }
        } catch (error) {
            alert(TRANSLATIONS[appState.lang].importFailed);
        }
    };
    reader.readAsText(file);
}

function resetAllData() {
    if (confirm(TRANSLATIONS[appState.lang].resetConfirm)) {
        appState = JSON.parse(JSON.stringify(DEFAULT_STATE));
        saveState();
        initApp();
    }
}

// 9. Modal Handlers
function openRentPaymentModal(houseId = null) {
    const modal = document.getElementById("modal-add-rent");
    document.getElementById("rent-form").reset();
    currentRentEditId = null;
    
    const today = new Date().toISOString().split('T')[0];
    document.getElementById("rent-pay-date").value = today;
    
    const filterMonth = getCurrentFilterMonth();
    document.getElementById("rent-pay-month").value = filterMonth;

    if (houseId) {
        document.getElementById("rent-house-id").value = houseId;
        const house = appState.houses.find(h => h.id === houseId);
        if (house) {
            document.getElementById("rent-amount").value = house.rentAmount;
            document.getElementById("rent-tenant-name").value = house.tenantName || "";
            document.getElementById("rent-tenant-phone").value = house.tenantPhone || "";
        }
    }
    document.getElementById("modal-add-rent-title").textContent = TRANSLATIONS[appState.lang].modalAddRentTitle;
    
    modal.classList.add("active");
}

function handleRentHouseChange(event) {
    const houseId = parseInt(event.target.value, 10);
    const house = appState.houses.find(h => h.id === houseId);
    if (house) {
        document.getElementById("rent-amount").value = house.rentAmount;
        document.getElementById("rent-tenant-name").value = house.tenantName || "";
        document.getElementById("rent-tenant-phone").value = house.tenantPhone || "";
    }
}

function handleAddRentSubmit(event) {
    event.preventDefault();
    const houseId = parseInt(document.getElementById("rent-house-id").value, 10);
    const tenantName = document.getElementById("rent-tenant-name").value;
    const tenantPhone = document.getElementById("rent-tenant-phone").value;
    const amount = parseInt(document.getElementById("rent-amount").value, 10);
    const payMonth = document.getElementById("rent-pay-month").value;
    const payDate = document.getElementById("rent-pay-date").value;
    const payMode = document.getElementById("rent-pay-mode").value;
    const payStatus = document.getElementById("rent-pay-status").value;
    const notes = document.getElementById("rent-notes").value;

    // Update tenant name in the master house record if changed
    const house = appState.houses.find(h => h.id === houseId);
    if (house) {
        if (tenantName) house.tenantName = tenantName;
        if (tenantPhone) house.tenantPhone = tenantPhone;
    }

    if (currentRentEditId) {
        const idx = appState.rentPayments.findIndex(p => p.id === currentRentEditId);
        if (idx !== -1) {
            appState.rentPayments[idx] = { ...appState.rentPayments[idx], houseId, monthYear: payMonth, amount, datePaid: payDate, paymentMode: payMode, status: payStatus, note: notes };
        }
        currentRentEditId = null;
        document.getElementById("modal-add-rent-title").textContent = TRANSLATIONS[appState.lang].modalAddRentTitle;
    } else {
        const newPayment = {
            id: "rp_" + Date.now(),
            houseId,
            monthYear: payMonth,
            amount,
            datePaid: payDate,
            paymentMode: payMode,
            status: payStatus,
            note: notes
        };
        appState.rentPayments.push(newPayment);
    }

    saveState();
    closeModal("modal-add-rent");
    
    renderDashboard();
    renderHouses();
    if (selectedHouseHistoryId === houseId) {
        renderRentHistoryTable();
    }
}

// Add Property Tax
function openAddPropTaxModal() {
    const modal = document.getElementById("modal-add-proptax");
    document.getElementById("proptax-form").reset();
    currentPropTaxEditId = null;
    const today = new Date().toISOString().split('T')[0];
    document.getElementById("proptax-pay-date").value = today;
    document.getElementById("modal-add-proptax-title").textContent = TRANSLATIONS[appState.lang].modalAddPropTax;
    modal.classList.add("active");
}

function handlePropTaxHouseChange(event) {
    const houseId = parseInt(event.target.value, 10);
    const house = appState.houses.find(h => h.id === houseId);
    if (house) {
        document.getElementById("proptax-tenament").value = house.tenamentNo || "";
    }
}

function handleAddPropTaxSubmit(event) {
    event.preventDefault();
    const houseId = parseInt(document.getElementById("proptax-house-id").value, 10);
    const tenamentNo = document.getElementById("proptax-tenament").value;
    const year = document.getElementById("proptax-year").value;
    const amount = parseInt(document.getElementById("proptax-amount").value, 10);
    const datePaid = document.getElementById("proptax-pay-date").value;
    const refNo = document.getElementById("proptax-ref-no").value;
    const note = document.getElementById("proptax-notes").value;

    if (currentPropTaxEditId) {
        const idx = appState.propertyTaxes.findIndex(t => t.id === currentPropTaxEditId);
        if (idx !== -1) {
            appState.propertyTaxes[idx] = { ...appState.propertyTaxes[idx], houseId, tenamentNo, year, amount, datePaid, refNo, note };
        }
        currentPropTaxEditId = null;
    } else {
        const newTax = {
            id: "pt_" + Date.now(),
            houseId,
            tenamentNo,
            year,
            amount,
            datePaid,
            refNo,
            note
        };
        appState.propertyTaxes.push(newTax);
    }

    saveState();
    closeModal("modal-add-proptax");
    renderTaxes();
    renderDashboard();
}

// Add Water/Drainage Tax (533/1)
function openAddWaterTaxModal() {
    const modal = document.getElementById("modal-add-watertax");
    document.getElementById("watertax-form").reset();
    currentWaterTaxEditId = null;
    document.getElementById("watertax-customer").value = "051822";
    
    const today = new Date().toISOString().split('T')[0];
    document.getElementById("watertax-pay-date").value = today;
    document.getElementById("modal-add-watertax-title").textContent = TRANSLATIONS[appState.lang].modalAddWaterTax;
    modal.classList.add("active");
}

function handleAddWaterTaxSubmit(event) {
    event.preventDefault();
    const customerNo = document.getElementById("watertax-customer").value;
    const year = document.getElementById("watertax-year").value;
    const amount = parseInt(document.getElementById("watertax-amount").value, 10);
    const datePaid = document.getElementById("watertax-pay-date").value;
    const refNo = document.getElementById("watertax-ref-no").value;
    const note = document.getElementById("watertax-notes").value;

    if (currentWaterTaxEditId) {
        const idx = appState.waterTaxes.findIndex(w => w.id === currentWaterTaxEditId);
        if (idx !== -1) {
            appState.waterTaxes[idx] = { ...appState.waterTaxes[idx], customerNo, year, amount, datePaid, refNo, note };
        }
        currentWaterTaxEditId = null;
    } else {
        const newWaterTax = {
            id: "wt_" + Date.now(),
            customerNo,
            year,
            amount,
            datePaid,
            refNo,
            note
        };
        appState.waterTaxes.push(newWaterTax);
    }

    saveState();
    closeModal("modal-add-watertax");
    renderTaxes();
    renderDashboard();
}

// Torrent Power (533/1)
function openAddTorrentModal() {
    const modal = document.getElementById("modal-add-torrent");
    document.getElementById("torrent-form").reset();
    currentTorrentEditId = null;
    document.getElementById("torrent-customer").value = "1007968";
    const today = new Date().toISOString().split('T')[0];
    document.getElementById("torrent-pay-date").value = today;
    document.getElementById("modal-add-torrent-title").textContent = TRANSLATIONS[appState.lang].modalAddTorrent;
    modal.classList.add("active");
}

function openEditPropTaxModal(id) {
    const modal = document.getElementById("modal-add-proptax");
    const t = appState.propertyTaxes.find(tax => tax.id === id);
    if (!t) return;
    currentPropTaxEditId = id;
    document.getElementById("proptax-house-id").value = t.houseId;
    document.getElementById("proptax-tenament").value = t.tenamentNo;
    document.getElementById("proptax-year").value = t.year;
    document.getElementById("proptax-amount").value = t.amount;
    document.getElementById("proptax-pay-date").value = cleanDateString(t.datePaid);
    document.getElementById("proptax-ref-no").value = t.refNo;
    document.getElementById("proptax-notes").value = t.note;
    document.getElementById("modal-add-proptax-title").textContent = appState.lang === "gu" ? "ઘર વેરો એડિટ કરો" : "Edit Property Tax";
    modal.classList.add("active");
}

function openEditWaterTaxModal(id) {
    const modal = document.getElementById("modal-add-watertax");
    const w = appState.waterTaxes.find(tax => tax.id === id);
    if (!w) return;
    currentWaterTaxEditId = id;
    document.getElementById("watertax-customer").value = w.customerNo;
    document.getElementById("watertax-year").value = w.year;
    document.getElementById("watertax-amount").value = w.amount;
    document.getElementById("watertax-pay-date").value = cleanDateString(w.datePaid);
    document.getElementById("watertax-ref-no").value = w.refNo;
    document.getElementById("watertax-notes").value = w.note;
    document.getElementById("modal-add-watertax-title").textContent = appState.lang === "gu" ? "પાણી વેરો એડિટ કરો" : "Edit Water Tax";
    modal.classList.add("active");
}

function openEdit533BillModal(id, source) {
    if (source === "torrent") {
        const modal = document.getElementById("modal-add-torrent");
        const b = appState.torrentBills.find(bill => bill.id === id);
        if (!b) return;
        currentTorrentEditId = id;
        document.getElementById("torrent-customer").value = b.customerId;
        document.getElementById("torrent-period").value = b.period;
        document.getElementById("torrent-amount").value = b.amount;
        document.getElementById("torrent-pay-date").value = cleanDateString(b.datePaid);
        document.getElementById("torrent-ref-no").value = b.refNo;
        document.getElementById("torrent-notes").value = b.note;
        document.getElementById("modal-add-torrent-title").textContent = "Torrent Bill Edit";
        modal.classList.add("active");
    } else {
        const modal = document.getElementById("modal-add-gas");
        const b = appState.gasBills.find(bill => bill.id === id);
        if (!b) return;
        currentGasEditId = id;
        document.getElementById("gas-customer").value = b.customerNo;
        document.getElementById("gas-period").value = b.period;
        document.getElementById("gas-amount").value = b.amount;
        document.getElementById("gas-pay-date").value = cleanDateString(b.datePaid);
        document.getElementById("gas-ref-no").value = b.refNo;
        document.getElementById("gas-notes").value = b.note;
        document.getElementById("modal-add-gas-title").textContent = "Gas Bill Edit";
        modal.classList.add("active");
    }
}

function openEditUgvclModal(id) {
    const modal = document.getElementById("modal-add-ugvcl");
    const u = appState.ugvclBills.find(bill => bill.id === id);
    if (!u) return;
    currentUgvclEditId = id;
    document.getElementById("ugvcl-house-id").value = u.houseId;
    document.getElementById("ugvcl-consumer").value = u.consumerNo;
    document.getElementById("ugvcl-period").value = u.period;
    document.getElementById("ugvcl-amount").value = u.amount;
    document.getElementById("ugvcl-pay-date").value = cleanDateString(u.datePaid);
    document.getElementById("ugvcl-paid-by").value = u.paidBy;
    document.getElementById("ugvcl-ref-no").value = u.refNo;
    document.getElementById("ugvcl-notes").value = u.note;
    document.getElementById("modal-add-ugvcl-title").textContent = "UGVCL Bill Edit";
    modal.classList.add("active");
}

function openEditMilkModal(id) {
    const modal = document.getElementById("modal-add-milk");
    const m = appState.milkBills.find(bill => bill.id === id);
    if (!m) return;
    currentMilkEditId = id;
    document.getElementById("milk-vendor").value = m.vendorName;
    document.getElementById("milk-pay-month").value = cleanDateString(m.monthYear).substring(0, 7);
    document.getElementById("milk-pay-date").value = cleanDateString(m.datePaid);
    document.getElementById("milk-liters").value = m.liters;
    document.getElementById("milk-rate").value = m.rate;
    document.getElementById("milk-amount").value = m.amount;
    document.getElementById("milk-notes").value = m.note;
    document.getElementById("modal-add-milk-title").textContent = "Milk Bill Edit";
    modal.classList.add("active");
}

function openEditDailyModal(id) {
    const modal = document.getElementById("modal-add-daily");
    const d = appState.dailyExpenses.find(exp => exp.id === id);
    if (!d) return;
    currentDailyEditId = id;
    document.getElementById("daily-date").value = cleanDateString(d.date);
    document.getElementById("daily-desc").value = d.description;
    document.getElementById("daily-category").value = d.category;
    document.getElementById("daily-amount").value = d.amount;
    document.getElementById("daily-pay-mode").value = d.paymentMode;
    document.getElementById("daily-notes").value = d.note;
    document.getElementById("modal-add-daily-title").textContent = "Expense Edit";
    modal.classList.add("active");
}

function handleAddTorrentSubmit(event) {
    event.preventDefault();
    const customerId = document.getElementById("torrent-customer").value;
    const period = document.getElementById("torrent-period").value;
    const amount = parseInt(document.getElementById("torrent-amount").value, 10);
    const datePaid = document.getElementById("torrent-pay-date").value;
    const refNo = document.getElementById("torrent-ref-no").value;
    const note = document.getElementById("torrent-notes").value;

    if (currentTorrentEditId) {
        const idx = appState.torrentBills.findIndex(b => b.id === currentTorrentEditId);
        if (idx !== -1) {
            appState.torrentBills[idx] = { ...appState.torrentBills[idx], customerId, period, amount, datePaid, refNo, note };
        }
        currentTorrentEditId = null;
    } else {
        const newTorrent = {
            id: "tb_" + Date.now(),
            customerId,
            period,
            amount,
            datePaid,
            refNo,
            note
        };
        appState.torrentBills.push(newTorrent);
    }

    saveState();
    closeModal("modal-add-torrent");
    renderUtilities();
    renderDashboard();
}

// Gujarat Gas (533/1)
function openAddGasModal() {
    const modal = document.getElementById("modal-add-gas");
    document.getElementById("gas-form").reset();
    currentGasEditId = null;
    document.getElementById("gas-customer").value = "500000270187";
    const today = new Date().toISOString().split('T')[0];
    document.getElementById("gas-pay-date").value = today;
    document.getElementById("modal-add-gas-title").textContent = TRANSLATIONS[appState.lang].modalAddGas;
    modal.classList.add("active");
}

function handleAddGasSubmit(event) {
    event.preventDefault();
    const customerNo = document.getElementById("gas-customer").value;
    const period = document.getElementById("gas-period").value;
    const amount = parseInt(document.getElementById("gas-amount").value, 10);
    const datePaid = document.getElementById("gas-pay-date").value;
    const refNo = document.getElementById("gas-ref-no").value;
    const note = document.getElementById("gas-notes").value;

    if (currentGasEditId) {
        const idx = appState.gasBills.findIndex(b => b.id === currentGasEditId);
        if (idx !== -1) {
            appState.gasBills[idx] = { ...appState.gasBills[idx], customerNo, period, amount, datePaid, refNo, note };
        }
        currentGasEditId = null;
    } else {
        const newGas = {
            id: "gb_" + Date.now(),
            customerNo,
            period,
            amount,
            datePaid,
            refNo,
            note
        };
        appState.gasBills.push(newGas);
    }

    saveState();
    closeModal("modal-add-gas");
    renderUtilities();
    renderDashboard();
}

// Kolavada UGVCL
function openAddUgvclModal() {
    const modal = document.getElementById("modal-add-ugvcl");
    document.getElementById("ugvcl-form").reset();
    currentUgvclEditId = null;
    const today = new Date().toISOString().split('T')[0];
    document.getElementById("ugvcl-pay-date").value = today;
    document.getElementById("modal-add-ugvcl-title").textContent = TRANSLATIONS[appState.lang].modalAddUgvcl;
    modal.classList.add("active");
}

function handleUgvclHouseChange(event) {
    const houseId = parseInt(event.target.value, 10);
    const house = appState.houses.find(h => h.id === houseId);
    if (house) {
        document.getElementById("ugvcl-consumer").value = house.ugvclConsumerNo || "";
    }
}

function handleAddUgvclSubmit(event) {
    event.preventDefault();
    const houseId = parseInt(document.getElementById("ugvcl-house-id").value, 10);
    const consumerNo = document.getElementById("ugvcl-consumer").value;
    const period = document.getElementById("ugvcl-period").value;
    const amount = parseInt(document.getElementById("ugvcl-amount").value, 10);
    const datePaid = document.getElementById("ugvcl-pay-date").value;
    const paidBy = document.getElementById("ugvcl-paid-by").value;
    const refNo = document.getElementById("ugvcl-ref-no").value;
    const note = document.getElementById("ugvcl-notes").value;

    if (currentUgvclEditId) {
        const idx = appState.ugvclBills.findIndex(u => u.id === currentUgvclEditId);
        if (idx !== -1) {
            appState.ugvclBills[idx] = { ...appState.ugvclBills[idx], houseId, consumerNo, period, amount, datePaid, paidBy, refNo, note };
        }
        currentUgvclEditId = null;
    } else {
        const newUgvcl = {
            id: "ub_" + Date.now(),
            houseId,
            consumerNo,
            period,
            amount,
            datePaid,
            paidBy,
            refNo,
            note
        };
        appState.ugvclBills.push(newUgvcl);
    }

    saveState();
    closeModal("modal-add-ugvcl");
    renderUtilities();
    renderDashboard();
}

// Milk Payments Modal
function openAddMilkModal() {
    const modal = document.getElementById("modal-add-milk");
    document.getElementById("milk-form").reset();
    currentMilkEditId = null;
    
    const today = new Date().toISOString().split('T')[0];
    document.getElementById("milk-pay-date").value = today;
    
    const filterMonth = getCurrentFilterMonth();
    document.getElementById("milk-pay-month").value = filterMonth;
    
    document.getElementById("modal-add-milk-title").textContent = TRANSLATIONS[appState.lang].addMilkBtn;
    modal.classList.add("active");
}

function handleMilkCalculation() {
    const liters = parseFloat(document.getElementById("milk-liters").value) || 0;
    const rate = parseFloat(document.getElementById("milk-rate").value) || 0;
    document.getElementById("milk-amount").value = Math.round(liters * rate);
}

function handleAddMilkSubmit(event) {
    event.preventDefault();
    const monthYear = document.getElementById("milk-pay-month").value;
    const vendorName = document.getElementById("milk-vendor").value;
    const liters = parseFloat(document.getElementById("milk-liters").value) || 0;
    const rate = parseFloat(document.getElementById("milk-rate").value) || 0;
    const amount = parseInt(document.getElementById("milk-amount").value, 10) || Math.round(liters * rate);
    const datePaid = document.getElementById("milk-pay-date").value;
    const note = document.getElementById("milk-notes").value;

    if (currentMilkEditId) {
        const idx = appState.milkBills.findIndex(m => m.id === currentMilkEditId);
        if (idx !== -1) {
            appState.milkBills[idx] = { ...appState.milkBills[idx], monthYear, vendorName, liters, rate, amount, datePaid, note };
        }
        currentMilkEditId = null;
    } else {
        const newMilkRecord = {
            id: "mk_" + Date.now(),
            monthYear,
            vendorName,
            liters,
            rate,
            amount,
            datePaid,
            note
        };
        appState.milkBills.push(newMilkRecord);
    }

    saveState();
    closeModal("modal-add-milk");
    renderMilk();
    renderDashboard();
}

// Daily Expense Modal
function openAddDailyModal() {
    const modal = document.getElementById("modal-add-daily");
    document.getElementById("daily-form").reset();
    currentDailyEditId = null;
    const today = new Date().toISOString().split('T')[0];
    document.getElementById("daily-date").value = today;
    document.getElementById("modal-add-daily-title").textContent = TRANSLATIONS[appState.lang].modalAddDaily;
    modal.classList.add("active");
}

function handleAddDailySubmit(event) {
    event.preventDefault();
    const date = document.getElementById("daily-date").value;
    const description = document.getElementById("daily-desc").value;
    const category = document.getElementById("daily-category").value;
    const amount = parseInt(document.getElementById("daily-amount").value, 10);
    const paymentMode = document.getElementById("daily-pay-mode").value;
    const note = document.getElementById("daily-notes").value;

    if (currentDailyEditId) {
        const idx = appState.dailyExpenses.findIndex(d => d.id === currentDailyEditId);
        if (idx !== -1) {
            appState.dailyExpenses[idx] = { ...appState.dailyExpenses[idx], date, description, category, amount, paymentMode, note };
        }
        currentDailyEditId = null;
    } else {
        const newExpense = {
            id: "de_" + Date.now(),
            date,
            description,
            category,
            amount,
            paymentMode,
            note
        };
        appState.dailyExpenses.push(newExpense);
    }

    saveState();
    closeModal("modal-add-daily");
    renderDailyLedger();
    renderDashboard();
}

// Add BoB Bank Transaction
function openAddBobModal() {
    const modal = document.getElementById("modal-add-bob");
    document.getElementById("bob-form").reset();
    currentBobEditId = null;
    const today = new Date().toISOString().split('T')[0];
    document.getElementById("bob-date").value = today;
    document.getElementById("modal-add-bob-title").textContent = TRANSLATIONS[appState.lang].modalAddBob;
    modal.classList.add("active");
}

function openEditRentModal(id) {
    const modal = document.getElementById("modal-add-rent");
    const p = appState.rentPayments.find(pay => pay.id === id);
    if (!p) return;
    currentRentEditId = id;
    document.getElementById("rent-house-id").value = p.houseId;
    
    const house = appState.houses.find(h => h.id === p.houseId);
    if (house) {
        document.getElementById("rent-tenant-name").value = house.tenantName || "";
        document.getElementById("rent-tenant-phone").value = house.tenantPhone || "";
    }

    document.getElementById("rent-pay-month").value = cleanDateString(p.monthYear).substring(0, 7);
    document.getElementById("rent-amount").value = p.amount;
    document.getElementById("rent-pay-date").value = cleanDateString(p.datePaid);
    document.getElementById("rent-pay-mode").value = p.paymentMode;
    document.getElementById("rent-pay-status").value = p.status;
    document.getElementById("rent-notes").value = p.note;
    document.getElementById("modal-add-rent-title").textContent = appState.lang === "gu" ? "ભાડું એડિટ કરો" : "Edit Rent Payment";
    modal.classList.add("active");
}

function openEditBobModal(id) {
    const modal = document.getElementById("modal-add-bob");
    const transaction = appState.bobTransactions.find(t => t.id === id);
    if (!transaction) return;

    document.getElementById("bob-form").reset();
    document.getElementById("bob-date").value = cleanDateString(transaction.date);
    document.getElementById("bob-narration").value = transaction.narration;
    document.getElementById("bob-amount").value = transaction.amount;
    document.getElementById("bob-desc").value = transaction.description;
    
    currentBobEditId = id; // Set the ID for editing
    const title = TRANSLATIONS[appState.lang].modalAddBob;
    document.getElementById("modal-add-bob-title").textContent = appState.lang === "gu" ? title.replace("નવી", "એડિટ") : "Edit BOB Entry"; // Update modal title
    
    modal.classList.add("active");
}

function handleAddBobSubmit(event) {
    event.preventDefault();
    const date = document.getElementById("bob-date").value;
    const narration = document.getElementById("bob-narration").value;
    const amount = parseFloat(document.getElementById("bob-amount").value);
    const description = document.getElementById("bob-desc").value;

    if (currentBobEditId) {
        // Editing an existing transaction
        const index = appState.bobTransactions.findIndex(t => t.id === currentBobEditId);
        if (index !== -1) {
            appState.bobTransactions[index].date = date;
            appState.bobTransactions[index].narration = narration;
            appState.bobTransactions[index].amount = amount;
            appState.bobTransactions[index].description = description;
        }
        currentBobEditId = null; // Clear edit ID
        document.getElementById("modal-add-bob-title").textContent = TRANSLATIONS[appState.lang].modalAddBob; // Reset modal title
    } else {
        // Adding a new transaction
        const newTxn = {
            id: "bob_" + Date.now(),
            date,
            narration,
            amount,
            description
        };
        appState.bobTransactions.push(newTxn);
    }
    saveState();
    closeModal("modal-add-bob");
    renderBob();
    renderDashboard();
}

// Add General Transaction
function openAddTransModal() {
    openAddDailyModal();
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove("active");
}

// Helper function to clean date strings from ISO format to YYYY-MM-DD
function cleanDateString(dateStr) {
    if (typeof dateStr === 'string' && dateStr.includes('T')) {
        return dateStr.split('T')[0];
    }
    return dateStr;
}

// Parse formatted month string (e.g., "મે 2026" or "May 2026" or "2026-05-31") back to "YYYY-MM"
function parseFormattedMonth(displayStr) {
    if (!displayStr) return "";
    displayStr = String(displayStr).trim();
    
    // Case 1: Standard YYYY-MM-DD or YYYY-MM
    if (/^\d{4}-\d{2}/.test(displayStr)) {
        return displayStr.substring(0, 7);
    }
    
    // Case 2: Standard DD/MM/YYYY
    if (/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(displayStr)) {
        const parts = displayStr.split("/");
        return `${parts[2]}-${parts[1].padStart(2, '0')}`;
    }
    
    // Case 3: "Month Year" (e.g., "મે 2026" or "May 2026" or "જાન્યુઆરી 2024")
    const monthsGu = ["જાન્યુઆરી", "ફેબ્રુઆરી", "માર્ચ", "એપ્રિલ", "મે", "જૂન", "જુલાઈ", "ઓગસ્ટ", "સપ્ટેમ્બર", "ઓક્ટોબર", "નવેમ્બર", "ડિસેમ્બર"];
    const monthsEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthsEnFull = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const parts = displayStr.split(/\s+/);
    if (parts.length >= 2) {
        let monthName = parts[0];
        let yearStr = parts[1];
        
        if (/^\d{4}$/.test(parts[0])) {
            yearStr = parts[0];
            monthName = parts[1];
        }
        
        let mIdx = -1;
        mIdx = monthsGu.indexOf(monthName);
        
        if (mIdx === -1) {
            mIdx = monthsEn.findIndex(m => monthName.toLowerCase().startsWith(m.toLowerCase()));
        }
        
        if (mIdx === -1) {
            mIdx = monthsEnFull.findIndex(m => monthName.toLowerCase() === m.toLowerCase());
        }
        
        if (mIdx !== -1 && /^\d{4}$/.test(yearStr)) {
            const mm = String(mIdx + 1).padStart(2, '0');
            return `${yearStr}-${mm}`;
        }
    }
    
    return displayStr;
}

// Event Listeners Setup
function setupEventListeners() {
    // Menu switching
    document.querySelectorAll(".menu-item").forEach(item => {
        item.addEventListener("click", () => {
            switchTab(item.getAttribute("data-tab"));
        });
    });

    document.querySelectorAll(".mobile-nav-item").forEach(item => {
        item.addEventListener("click", () => {
            switchTab(item.getAttribute("data-tab"));
        });
    });

    // Language switcher
    document.querySelectorAll(".lang-toggle-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            setLanguage(btn.getAttribute("data-lang"));
        });
    });

    // Modal Close
    document.querySelectorAll(".modal-close, .btn-close-modal").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const modal = e.target.closest(".modal");
            if (modal) modal.classList.remove("active");
        });
    });

    // Form Submissions
    document.getElementById("rent-form").addEventListener("submit", handleAddRentSubmit);
    document.getElementById("rent-house-id").addEventListener("change", handleRentHouseChange);

    document.getElementById("proptax-form").addEventListener("submit", handleAddPropTaxSubmit);
    document.getElementById("proptax-house-id").addEventListener("change", handlePropTaxHouseChange);
    document.getElementById("watertax-form").addEventListener("submit", handleAddWaterTaxSubmit);

    document.getElementById("torrent-form").addEventListener("submit", handleAddTorrentSubmit);
    document.getElementById("gas-form").addEventListener("submit", handleAddGasSubmit);
    document.getElementById("ugvcl-form").addEventListener("submit", handleAddUgvclSubmit);
    document.getElementById("ugvcl-house-id").addEventListener("change", handleUgvclHouseChange);

    document.getElementById("milk-form").addEventListener("submit", handleAddMilkSubmit);
    document.getElementById("milk-liters").addEventListener("input", handleMilkCalculation);
    document.getElementById("milk-rate").addEventListener("input", handleMilkCalculation);

    document.getElementById("daily-form").addEventListener("submit", handleAddDailySubmit);
    document.getElementById("bob-form").addEventListener("submit", handleAddBobSubmit);
    document.getElementById("edit-house-form").addEventListener("submit", handleSaveHouseConfig);

    document.getElementById("import-file-input").addEventListener("change", handleImportBackup);
}

// Initialize on DOM load
window.addEventListener("DOMContentLoaded", initApp);
