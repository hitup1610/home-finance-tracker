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
        { id: 1, name: "533/1, 5B, Gandhinagar", tenamentNo: "1007A09729", waterCustomerNo: "051822", torrentCustomerId: "1007968", gasCustomerNo: "500000270187", tenantName: "રાકેશભાઈ પ્રજાપતિ", tenantPhone: "9876543210", rentAmount: 7000, depositAmount: 15000, depositStatus: "paid", status: "occupied" },
        { id: 2, name: "2658, Dholanagar, Kolavada", tenamentNo: "1007C102107", ugvclConsumerNo: "26919022419", tenantName: "હરેશભાઈ વાઘેલા", tenantPhone: "9624589320", rentAmount: 6000, depositAmount: 16000, depositStatus: "paid", status: "occupied" },
        { id: 3, name: "733, Vah, Kolavada", tenamentNo: "1007C101208", ugvclConsumerNo: "26919004879", tenantName: "મનોજસિંહ પરમાર", tenantPhone: "9099887766", rentAmount: 4000, depositAmount: 13000, depositStatus: "paid", status: "occupied" },
        { id: 4, name: "81, Hudco, Kolavada", tenamentNo: "1007C100824", ugvclConsumerNo: "26919105284", tenantName: "ભાવનાબેન શાહ", tenantPhone: "9426058472", rentAmount: 500, depositAmount: 0, depositStatus: "unpaid", status: "occupied" }
    ],
    googleSheetUrl: "https://script.google.com/macros/s/AKfycbzi36UWtO2dMO9ynaZgONYzA_Dukfc4RDm_xBJiD9Frkl9sanC5O5tV3OUuqRcYD3Pl9Q/exec",
    rentPayments: [
        { id: "rp1", houseId: 1, monthYear: "2026-05", amount: 7500, datePaid: "2026-05-05", paymentMode: "GPay", status: "paid", note: "ચોકસાઈથી જમા" },
        { id: "rp2", houseId: 2, monthYear: "2026-05", amount: 8000, datePaid: "2026-05-06", paymentMode: "Bank", status: "paid", note: "બેંક ટ્રાન્સફર" },
        { id: "rp3", houseId: 3, monthYear: "2026-05", amount: 6500, datePaid: "2026-05-04", paymentMode: "Cash", status: "paid", note: "હાથોહાથ રોકડા" },
        { id: "rp4", houseId: 4, monthYear: "2026-05", amount: 7000, datePaid: "2026-05-07", paymentMode: "GPay", status: "paid", note: "આખો મહિનો પૂરો થયો" },
        { id: "rp5", houseId: 1, monthYear: "2026-06", amount: 7500, datePaid: "2026-06-03", paymentMode: "GPay", status: "paid", note: "ચાલુ મહિનાનું જમા" }
    ],
    propertyTaxes: [
        { id: "pt1", houseId: 1, year: "2025-26", tenamentNo: "1007A09729", amount: 4800, datePaid: "2025-07-15", refNo: "TX-48293", note: "Ghar Vero 533/1" },
        { id: "pt2", houseId: 2, year: "2025-26", tenamentNo: "1007C102107", amount: 3500, datePaid: "2025-07-20", refNo: "TX-93849", note: "Dholanagar Tax" }
    ],
    waterTaxes: [
        { id: "wt1", year: "2025-26", customerNo: "051822", amount: 1200, datePaid: "2025-08-05", refNo: "WT-384928", note: "પાણી-ગટર વેરો ચૂકવ્યો" }
    ],
    torrentBills: [
        { id: "tb1", customerId: "1007968", period: "Mar-Apr 2026", amount: 3450, datePaid: "2026-05-08", refNo: "TOR-948293", note: "533/1 Torrent Power" }
    ],
    gasBills: [
        { id: "gb1", customerNo: "500000270187", period: "Mar-Apr 2026", amount: 720, datePaid: "2026-05-12", refNo: "GAS-382910", note: "533/1 Gujarat Gas" }
    ],
    ugvclBills: [
        { id: "ub1", houseId: 3, consumerNo: "26919004879", period: "Mar-Apr 2026", amount: 1520, datePaid: "2026-05-15", paidBy: "tenant", refNo: "UGV-738210", note: "ભાડુઆતે આપેલું બિલ પત્રક" }
    ],
    milkBills: [
        { id: "mk1", monthYear: "2026-05", vendorName: "લક્ષ્મી ડેરી", liters: 45, rate: 68, amount: 3060, datePaid: "2026-06-02", note: "મે મહિનાનું દૂધનું બિલ" },
        { id: "mk2", monthYear: "2026-04", vendorName: "લક્ષ્મી ડેરી", liters: 42, rate: 68, amount: 2856, datePaid: "2026-05-03", note: "એપ્રિલ મહિનાનું ચૂકવ્યું" }
    ],
    dailyExpenses: [
        { id: "de1", date: "2026-06-02", description: "શાકભાજી અને કરીયાણું", amount: 480, category: "household", paymentMode: "Cash", note: "" },
        { id: "de2", date: "2026-06-05", description: "નળ રીપેરીંગ 533/1 ખર્ચ", amount: 320, category: "maintenance", paymentMode: "Cash", note: "પ્લમ્બર ખર્ચ" }
    ],
    transactions: [], // general transactions
    
    // Transcribed Bank of Baroda Debits History
    bobTransactions: [
        // 2026
        { id: "bob_1", date: "2026-06-10", narration: "MBK/616186724808/13:53:15/", amount: 5220, description: "Torrent Power Bill" },
        { id: "bob_2", date: "2026-06-09", narration: "IMPS/P2A/616010057630/Mon", amount: 12280, description: "Mandir banava mate umrana" },
        { id: "bob_3", date: "2026-05-10", narration: "MBK/613091458235/134623", amount: 1565, description: "Gas Bill" },
        { id: "bob_4", date: "2026-04-28", narration: "ATM/CASH/6341/xxxxxxxxxxxx2913", amount: 15080, description: "Kalol Mahraj ne Pathna" },
        { id: "bob_5", date: "2026-04-24", narration: "PRCR/GMCPROPERTYTAX/GandhiNag", amount: 860, description: "GMC Property Tax Dholanagar" },
        { id: "bob_6", date: "2026-04-24", narration: "PRCR/GMCPROPERTYTAX/GandhiNag", amount: 681, description: "GMC Property Tax Hudco" },
        { id: "bob_7", date: "2026-04-21", narration: "PRCR/GMCPROPERTYTAX/GandhiNag", amount: 653, description: "GMC Property Tax Vah" },
        { id: "bob_8", date: "2026-04-21", narration: "PRCR/GMCPROPERTYTAX/GandhiNag", amount: 2730, description: "GMC Property Tax 533/1" },
        { id: "bob_9", date: "2026-04-16", narration: "IMPS/P2A/610620766512/Sch", amount: 10080, description: "Chhotu School Fees" },
        { id: "bob_10", date: "2026-04-15", narration: "MBK/610554603197/10:03:59", amount: 3750, description: "Torrent Power Bill" },
        { id: "bob_11", date: "2026-04-10", narration: "IMPS/P2A/610018873889/Mon", amount: 10080, description: "Kalol Mahraj ne Pathna" },
        { id: "bob_12", date: "2026-03-03", narration: "MBK/606234731616/16:04:52/", amount: 1422.8, description: "Gas Bill" },
        { id: "bob_13", date: "2026-02-20", narration: "PRCR/LUCKY SWAGAT JEWELS L/GANDHINAG", amount: 21500, description: "Sona no doro (Gold chain)" },
        { id: "bob_14", date: "2026-02-19", narration: "PRCR/SHWETA FASHION/GANDHI NA", amount: 2175, description: "Kapda" },
        { id: "bob_15", date: "2026-02-16", narration: "SELF", amount: 90000, description: "Sona no doro (Gold chain)" },
        { id: "bob_16", date: "2026-02-14", narration: "ATM/CASH/361/xxxxxxxxxxxx2913", amount: 8000, description: "Sona no doro (Gold chain)" },
        { id: "bob_17", date: "2026-02-14", narration: "ATM/CASH/359/xxxxxxxxxxxx2913", amount: 15000, description: "Sona no doro" },
        { id: "bob_18", date: "2026-02-14", narration: "PRCR/M S SHREEJI ORNA/GANDHINAG", amount: 5300, description: "Payal Chandi ni" },
        { id: "bob_19", date: "2026-02-10", narration: "MBK/604130497720/09:55:22/", amount: 3650, description: "Torrent Power Bill" },
        { id: "bob_20", date: "2026-01-20", narration: "PRCR/DGVCL/SURAT", amount: 1572, description: "UGVCL Light Bill" },
        { id: "bob_21", date: "2026-01-10", narration: "MBK/600687949556/17:02:43/", amount: 1256, description: "Gas Bill" },
        
        // 2025
        { id: "bob_22", date: "2025-12-11", narration: "MBK/534513428306/11:08:25/", amount: 4590, description: "Torrent Power Bill" },
        { id: "bob_23", date: "2025-11-24", narration: "IMPS/P2A/532818104756/xxxxxxxxxx1807/MonthlyTrans", amount: 40000, description: "Shrimant" },
        { id: "bob_24", date: "2025-11-21", narration: "ATM/CASH/532614012597/xxxxxxxxxxxx2913", amount: 10000, description: "Shrimant" },
        { id: "bob_25", date: "2025-11-21", narration: "ATM/CASH/53252008503/xxxxxxxxxxxx2913", amount: 10000, description: "Shrimant" },
        { id: "bob_26", date: "2025-11-11", narration: "IMPS/P2A/53190924145/xxxxxxxxxx1807/MonthlyTrans", amount: 30000, description: "Shrimant" },
        { id: "bob_27", date: "2025-11-08", narration: "PRCR/UGVCLREC/Mumbai", amount: 2238, description: "UGVCL Light Bill" },
        { id: "bob_28", date: "2025-11-05", narration: "ATM/CASH/530917028565/xxxxxxxxxxxx2913", amount: 10000, description: "Mom ne ghar kharch mate Upadi ne aapela" },
        { id: "bob_29", date: "2025-11-03", narration: "MBK/530707521634/12:09:38/", amount: 1938, description: "Gas Bill" },
        { id: "bob_30", date: "2025-10-22", narration: "ATM/CASH/7835/xxxxxxxxxxxx2913", amount: 5000, description: "Dipawali New Year mate badha ne aapva" },
        { id: "bob_31", date: "2025-10-12", narration: "IMPS/P2A/528514524284/xxxxxxxxxx1807/TorRent", amount: 15000, description: "TV" },
        { id: "bob_32", date: "2025-10-09", narration: "MBK/528247209531/10:57:52/", amount: 6010, description: "Torrent Power Bill" },
        { id: "bob_33", date: "2025-10-08", narration: "MBK/528147197154/10:57:11/", amount: 1256, description: "Gas Bill" },
        { id: "bob_34", date: "2025-09-25", narration: "ATM/CASH/526812084348/xxxxxxxxxxxx2913", amount: 5000, description: "Abu Gayela mom to upadela" },
        { id: "bob_35", date: "2025-08-03", narration: "MBK/521513155072/10:59:11/", amount: 5610, description: "Torrent Power Bill" },
        { id: "bob_36", date: "2025-08-03", narration: "MBK/521316374011/11:35:34/", amount: 3267, description: "Gas Bill" },
        { id: "bob_37", date: "2025-06-27", narration: "PRCR/CBDT/GURGAON", amount: 48000, description: "Income Tax return" },
        { id: "bob_38", date: "2025-06-25", narration: "IMPS/P2A/517609105475", amount: 17080, description: "Chhotu School fees" },
        { id: "bob_39", date: "2025-06-15", narration: "MBK/516615851218/01:38:29/", amount: 5520, description: "Torrent Power Bill" },
        { id: "bob_40", date: "2025-05-29", narration: "IMPS/P2A/514918080081/xxxxxxxxxx1807/MonthlyTrans", amount: 16080, description: "The Gandhinagar Nagarik Bank" },
        { id: "bob_41", date: "2025-04-30", narration: "PRCR/GMCPROPERTYTAX/GandhiNag", amount: 515, description: "GMC Property Tax Hudco" },
        { id: "bob_42", date: "2025-04-30", narration: "IMPS/P2A/512011122711/xxxxxxxxxx1807/MonthlyTrans", amount: 25080, description: "Jigneshbhai Reliance Nippon Life Insurance" },
        { id: "bob_43", date: "2025-04-28", narration: "PRCR/GMCPROPERTYTAX/GandhiNag", amount: 860, description: "GMC Property Tax Dholanagar" },
        { id: "bob_44", date: "2025-04-26", narration: "PRCR/GMCPROPERTYTAX/GandhiNag", amount: 653, description: "GMC Property Tax Vah" },
        { id: "bob_45", date: "2025-04-26", narration: "PRCR/GMCPROPERTYTAX/GandhiNag", amount: 2730, description: "GMC Property Tax 533/1" },
        { id: "bob_46", date: "2025-04-13", narration: "MBK/510316949360/18:46:03/", amount: 4180, description: "Torrent Power Bill" },
        { id: "bob_47", date: "2025-04-09", narration: "IMPS/P2A/509910487913/xxxxxxxxxx1807/MonthlySubsc", amount: 20080, description: "Jigneshbhai" },
        { id: "bob_48", date: "2025-04-03", narration: "PRCR/AN/AB JWELLERS/GANDHINAG", amount: 17080, description: "Vinti (Ring)" },
        { id: "bob_49", date: "2025-03-09", narration: "IMPS/P2A/506815339415/xxxxxxxxxx1807/MonthlySubsc", amount: 15080, description: "Jigneshbhai" },
        { id: "bob_50", date: "2025-03-07", narration: "IMPS/P2A/506612140730/xxxxxxxxxx1807/Watertax", amount: 10080, description: "Manishpanchal ne" },
        { id: "bob_51", date: "2025-02-27", narration: "IMPS/P2A/505813123891/xxxxxxxxxx1807/Watertax", amount: 25080, description: "Badi" },
        { id: "bob_52", date: "2025-02-20", narration: "CHARGES FOR ATM/CASH/FIN/xxxxxxxxxxxx2913", amount: 11.8, description: "SMS charges" },
        { id: "bob_53", date: "2025-01-30", narration: "ATM/CASH/3518/xxxxxxxxxxxx2913", amount: 10080, description: "Upadina Mom ne aapya" },
        { id: "bob_54", date: "2025-01-20", narration: "ATM/CASH/3507/xxxxxxxxxxxx2913", amount: 10080, description: "Upadina Mom ne aapya" },
        { id: "bob_55", date: "2025-01-15", narration: "TO CASH", amount: 10080, description: "Upadina Mom ne aapya (Margashira)" },
        { id: "bob_56", date: "2025-01-16", narration: "MBK/501617302917/17:41:41/", amount: 1755, description: "Gas Bill" },
        { id: "bob_57", date: "2025-01-08", narration: "ATM/CASH/3391/xxxxxxxxxxxx2913", amount: 10080, description: "Upadina Mom ne aapya" },
        { id: "bob_58", date: "2025-01-05", narration: "ATM/CASH/3389/xxxxxxxxxxxx2913", amount: 10080, description: "Upadina Mom ne aapya" },
        { id: "bob_59", date: "2025-01-01", narration: "ATM/CASH/3382/xxxxxxxxxxxx2913", amount: 15080, description: "Upadina Mom ne aapya" },
        { id: "bob_60", date: "2025-01-02", narration: "ATM/CASH/3385/xxxxxxxxxxxx2913", amount: 10080, description: "Upadina Mom ne aapya" },
        { id: "bob_61", date: "2025-02-10", narration: "MBK/504110314112/10:40:17/", amount: 2730, description: "Torrent Power Bill" },
        { id: "bob_62", date: "2025-07-16", narration: "ATM/CASH/755/xxxxxxxxxxxx2913", amount: 5080, description: "Upadina Mom ne aapya" },
        { id: "bob_63", date: "2025-07-10", narration: "ATM/CASH/746/xxxxxxxxxxxx2913", amount: 10080, description: "Upadina Mom ne aapya" },
        { id: "bob_64", date: "2025-01-11", narration: "ATM/CASH/501116087202/xxxxxxxxxxxx2913", amount: 10080, description: "Upadina Mom ne aapya" },
        { id: "bob_65", date: "2025-02-11", narration: "MBK/504212551525/12:50:51/", amount: 1225, description: "Gas Bill" },
        
        // 2024
        { id: "bob_66", date: "2024-12-22", narration: "ATM/CASH/8848/xxxxxxxxxxxx2913", amount: 15080, description: "Upadina Mom ne aapya" },
        { id: "bob_67", date: "2024-12-10", narration: "ATM/CASH/8816/xxxxxxxxxxxx2913", amount: 15080, description: "Upadina Mom ne aapya" },
        { id: "bob_68", date: "2024-12-29", narration: "ATM/CASH/436320021665/xxxxxxxxxxxx2913", amount: 10080, description: "Upadina Mom ne aapya" },
        { id: "bob_69", date: "2024-12-26", narration: "ATM/CASH/436021021485/xxxxxxxxxxxx2913", amount: 10080, description: "Upadina Mom ne aapya" },
        { id: "bob_70", date: "2024-12-26", narration: "ATM/CASH/435911010210/xxxxxxxxxxxx2913", amount: 10080, description: "Upadina Mom ne aapya" },
        { id: "bob_71", date: "2024-12-26", narration: "ATM/CASH/435911009892/xxxxxxxxxxxx2913", amount: 10080, description: "Upadina Mom ne aapya" },
        { id: "bob_72", date: "2024-11-11", narration: "MBK/434612315563/12:18:15/", amount: 3190, description: "Torrent Power Bill" },
        { id: "bob_73", date: "2024-11-29", narration: "ATM/CASH/8268/xxxxxxxxxxxx2913", amount: 7080, description: "Upadina Mom ne aapya" },
        { id: "bob_74", date: "2024-11-26", narration: "ATM/CASH/433118007625/xxxxxxxxxxxx2913", amount: 10080, description: "Upadina Mom ne aapya" },
        { id: "bob_75", date: "2024-11-08", narration: "MBK/431310257476/18:23:45/", amount: 1225, description: "Gas Bill" },
        { id: "bob_76", date: "2024-10-26", narration: "ATM/CASH/5280/xxxxxxxxxxxx2913", amount: 10080, description: "Upadina Mom ne aapya" },
        { id: "bob_77", date: "2024-10-28", narration: "ATM/CASH/489/xxxxxxxxxxxx2913", amount: 10000, description: "Upadina Mom ne aapya" },
        { id: "bob_78", date: "2024-10-15", narration: "MBK/428946454200/21:01:13/", amount: 4390, description: "Torrent Power Bill" },
        { id: "bob_79", date: "2024-10-02", narration: "Dr. Tran for funding A/c 24640300008078", amount: 900000, description: "FD (Fixed Deposit)" },
        { id: "bob_80", date: "2024-09-21", narration: "SOLANKI JAYESHKUMAR KARSH", amount: 500000, description: "Solanki Jayeshkumar Karsh" },
        { id: "bob_81", date: "2024-09-20", narration: "MICR INWD CLG (CTS)", amount: 500000, description: "MICR INWD CLG (CTS)" },
        { id: "bob_82", date: "2024-09-18", narration: "MICR INWD CLG (CTS)", amount: 500000, description: "MICR INWD CLG (CTS)" },
        { id: "bob_83", date: "2024-09-03", narration: "MBK/424723632411/18:24:44/", amount: 1481, description: "Gas Bill" },
        { id: "bob_84", date: "2024-08-27", narration: "ATM/CASH/4786/xxxxxxxxxxxx2913", amount: 5080, description: "Upadina Mom ne aapya" },
        { id: "bob_85", date: "2024-08-11", narration: "ATM/CASH/42241300343/xxxxxxxxxxxx2913", amount: 10080, description: "Upadina Mom ne aapya" },
        { id: "bob_86", date: "2024-08-08", narration: "MBK/422114047416/14:34:32/", amount: 5250, description: "Torrent Power Bill" },
        { id: "bob_87", date: "2024-07-28", narration: "ATM/CASH/421014031885/xxxxxxxxxxxx2913", amount: 10080, description: "Upadina Mom ne aapya" },
        { id: "bob_88", date: "2024-07-13", narration: "IMPS/P2A/419516775819/xxxxxxxxxx1807/UdhayTreatmen", amount: 5080, description: "Udhay Treatment" },
        { id: "bob_89", date: "2024-07-03", narration: "MBK/418578208881/18:56:11/", amount: 784, description: "Gas Bill" },
        { id: "bob_90", date: "2024-07-03", narration: "IMPS/P2A/418514908140/xxxxxxxxxx1807/Bikerepering", amount: 15080, description: "Bike repair" },
        { id: "bob_91", date: "2024-06-20", narration: "ATM/CASH/417220027010/xxxxxxxxxxxx2913", amount: 10080, description: "Upadina Mom ne aapya" },
        { id: "bob_92", date: "2024-06-17", narration: "IMPS/P2A/416915768814/xxxxxxxxxx8497/SchoolFees", amount: 24080, description: "School Fees" },
        { id: "bob_93", date: "2024-06-10", narration: "NEFT-BARBV24162099082-HITESH PARMAR-STATE BANK OF", amount: 42080, description: "AC Purchase" },
        { id: "bob_94", date: "2024-06-09", narration: "MBK/416197301222/14:40:06/", amount: 3580, description: "Torrent Power Bill" },
        { id: "bob_95", date: "2024-05-10", narration: "ATM/CASH/8048/xxxxxxxxxxxx2913", amount: 10080, description: "Upadina Mom ne aapya" },
        { id: "bob_96", date: "2024-05-10", narration: "ATM/CASH/8047/xxxxxxxxxxxx2913", amount: 15080, description: "Upadina Mom ne aapya" },
        { id: "bob_97", date: "2024-05-08", narration: "MBK/412913232359/18:23:22/", amount: 1177, description: "Gas Bill" },
        { id: "bob_98", date: "2024-05-04", narration: "SMS Charges for FEB 24", amount: 0.24, description: "SMS Charges" },
        { id: "bob_99", date: "2024-05-02", narration: "PRCR/gandhinagar5BilePay/GANDHI NA", amount: 515, description: "GMC Property Tax Hudco" },
        { id: "bob_100", date: "2024-05-02", narration: "PRCR/gandhinagar5BilePay/GANDHI NA", amount: 860, description: "GMC Property Tax Dholanagar" },
        { id: "bob_101", date: "2024-05-01", narration: "PRCR/gandhinagar5BilePay/GANDHI NA", amount: 2730, description: "GMC Property Tax 533/1" },
        { id: "bob_102", date: "2024-05-01", narration: "PRCR/gandhinagar5BilePay/GANDHI NA", amount: 653, description: "GMC Property Tax Vah" },
        { id: "bob_103", date: "2024-04-28", narration: "ATM/CASH/411911020091/xxxxxxxxxxxx2913", amount: 2080, description: "Upadina Mom ne aapya" },
        { id: "bob_104", date: "2024-04-12", narration: "ATM/CASH/4882/xxxxxxxxxxxx2913", amount: 2080, description: "Upadina Mom ne aapya" },
        { id: "bob_105", date: "2024-04-08", narration: "MBK/4100161307372/13:19:39/", amount: 2380, description: "Torrent Power Bill" },
        { id: "bob_106", date: "2024-04-02", narration: "Dr. Tran for funding A/c 24640300078364", amount: 1000000, description: "FD (Fixed Deposit)" },
        { id: "bob_107", date: "2024-03-01", narration: "MBK/406161307372/13:19:39/", amount: 1422, description: "Gas Bill" }
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
            const loadedState = JSON.parse(stored);
            appState = loadedState; // Start with the loaded state
            
            // Overhaul houses structure to Phase 2 details to make sure mapping works
            // This ensures new default properties are added, but user-modified data is preserved.
            const newHouses = JSON.parse(JSON.stringify(DEFAULT_STATE.houses));
            appState.houses.forEach(loadedHouse => {
                const defaultHouse = newHouses.find(h => h.id === loadedHouse.id);
                if (defaultHouse) {
                    // Preserve user-modifiable fields from loadedState
                    defaultHouse.tenantName = loadedHouse.tenantName;
                    defaultHouse.tenantPhone = loadedHouse.tenantPhone;
                    defaultHouse.rentAmount = loadedHouse.rentAmount;
                    defaultHouse.depositAmount = loadedHouse.depositAmount;
                    defaultHouse.depositStatus = loadedHouse.depositStatus;
                    defaultHouse.status = loadedHouse.status;
                }
            });
            appState.houses = newHouses;
            
            // Sync structure changes
            if (!appState.propertyTaxes) appState.propertyTaxes = [];
            if (!appState.waterTaxes) appState.waterTaxes = [];
            if (!appState.torrentBills) appState.torrentBills = [];
            if (!appState.gasBills) appState.gasBills = [];
            if (!appState.ugvclBills) appState.ugvclBills = [];
            if (!appState.dailyExpenses) appState.dailyExpenses = [];
            if (!appState.transactions) appState.transactions = [];
            if (!appState.googleSheetUrl) appState.googleSheetUrl = "https://script.google.com/macros/s/AKfycbzi36UWtO2dMO9ynaZgONYzA_Dukfc4RDm_xBJiD9Frkl9sanC5O5tV3OUuqRcYD3Pl9Q/exec";
            
            // Sync BOB Transactions list
            if (!appState.bobTransactions) {
                appState.bobTransactions = JSON.parse(JSON.stringify(DEFAULT_STATE.bobTransactions));
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
function saveState() {
    localStorage.setItem("hitesh_home_finance_state", JSON.stringify(appState));
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
            desc: appState.lang === "gu" ? `દૂધ ચૂકવણી (${m.monthYear})` : `Milk bill paid (${m.monthYear})`,
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
        const parts = dateStr.split("-");
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
            <td>${formatDisplayDate(p.monthYear)}</td>
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
            <td>${formatDisplayDate(m.monthYear)}</td>
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
        const row = [houseName, formatDisplayDate(p.monthYear), p.amount, formatDisplayDate(p.datePaid), p.paymentMode, p.status, p.note || ""];
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
        const row = [mainHouseName, formatDisplayDate(m.monthYear), m.vendorName, m.liters, m.rate, m.amount, formatDisplayDate(m.datePaid), m.note || ""];
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
        await fetch(currentUrl, {
            method: 'POST',
            mode: 'cors', // Changed from 'no-cors' to 'cors' to read response
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' }, // Changed Content-Type
            body: JSON.stringify(appState)
        });

        // Check if the response is OK (HTTP status 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json(); // Parse the JSON response from Apps Script

        if (result.success) {
            alert(TRANSLATIONS[appState.lang].syncSuccess);
        } else {
            alert(`${TRANSLATIONS[appState.lang].syncError} ${result.error || ''}`);
            console.error("Apps Script reported an error:", result.error);
        }
    } catch (error) {
        console.error("Sync error:", error);
        alert(`${TRANSLATIONS[appState.lang].syncError} ${error.message || ''}`);
    } finally {
        btn.innerHTML = originalText;
        btn.disabled = false;
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
    document.getElementById("proptax-pay-date").value = t.datePaid;
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
    document.getElementById("watertax-pay-date").value = w.datePaid;
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
        document.getElementById("torrent-pay-date").value = b.datePaid;
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
        document.getElementById("gas-pay-date").value = b.datePaid;
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
    document.getElementById("ugvcl-pay-date").value = u.datePaid;
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
    document.getElementById("milk-pay-month").value = m.monthYear;
    document.getElementById("milk-pay-date").value = m.datePaid;
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
    document.getElementById("daily-date").value = d.date;
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

    document.getElementById("rent-pay-month").value = p.monthYear;
    document.getElementById("rent-amount").value = p.amount;
    document.getElementById("rent-pay-date").value = p.datePaid;
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
    document.getElementById("bob-date").value = transaction.date;
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
