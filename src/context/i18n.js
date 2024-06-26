// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import 'intl';
import 'intl-pluralrules';

const resources = {
  en: {
    translation: {
      greeting: 'Hello!',
      changeLanguage: 'Change Language',
      welcome: 'Welcome',
      goodbye: 'Goodbye',
      contactusheading: 'If you experience any issues with the Panchal Samaj app or wish to suggest additional functionalities, please contact us at the number provided below',
      developercontact: 'Website / App Developer Contact',
      developeby: 'Developed by',
      successchangeLanguage: 'Language changed successfully',
      loginsuccessfully: 'Login successfully.',
      home: 'Home',
      profile: 'Profile',
      login: 'Login',
      committeeMember: 'Committee members',
      settings: 'Settings',
      contactUs: 'Contact us',
      logout: 'Logout',
      aboutUs: 'About us',
      register: 'Register',
      news: 'News',
      newsDetails: 'News Details',
      villages: 'Villages',
      village: 'Village',
      paymentPage: 'Payment',
      directory: 'Directory',
      familyList: 'Family List',
      paymentSuccess: 'Payment Success',
      paymentFail: 'Payment Fail',
      familyDetailsPage: 'Family Details Page',
      searchDirectory: 'Search Directory',
      changePassword: 'Change Password',
      familyRegister: 'Family Register',
      editMainDetails: 'Edit MainDetails',
      editFamilyDetails: 'Edit FamilyDetails',
      maintenanceScreen: 'MaintenanceScreen',
      search: 'Search',
      select_your_village: 'Select Your Village',
      name: 'Name',
      firstname: 'First Name',
      middlename: 'Middle Name',
      lastname: 'Last Name',
      password: 'Password',
      dateofbirth: 'Date of Birth',
      mobileno: 'Mobile',
      email: 'Email',
      mobile: 'Mobile Number',
      address: 'Current Address',
      city: 'City',
      state: 'State',
      pincode: 'Pincode',
      education: 'Education',
      profession: 'Profession',
      maritalstatus: 'Marital Status',
      relationship: 'Relationship',
      gender: 'Gender',
      male: 'Male',
      female: 'Female',
      other: 'Other',
      married: 'Married',
      unmarried: 'Unmarried',
      widower: 'Widower',
      widow: 'Widow',
      divorcee: 'Divorcee',
      passwordisrequired: 'Password is required',
      mobilenumberisrequired: 'Mobile number is required',
      invalidmobilenumber: 'Incorrect mobile number',
      incorrectPassword: 'Incorrect Password',
      next: 'Next',
      selectyourvillage: 'Select your village.',
      registerthemainmemberofthehouse: 'Register the main member of the house.',
      pleasefillalltherequiredfields: 'Please fill all the required fields !',
      mobilenumberisalreadyregistered: 'Mobile number is already registered !',
      dopaymentforsuccessfullregistration: 'Do payment for successfull registration.',
      passwordmusthaveatleastoneletteronenumberandonespecialcharacter: 'Password must have at least one letter, one number, and one special character',
      pleaseenterfirstname: 'Please enter firstname.',
      pleaseenterlastname: 'Please enter lastname.',
      pleaseentermiddlename: 'Please enter middlename.',
      pleaseenterpassword: 'Please enter password',
      passwordmusthaveatleastcharacters: 'Password must have at least 6 characters',
      pleaseenterdob: 'Please enter dob',
      pleaseentermobilenumber: 'Please enter mobile number',
      pleaseenteravalidmobilenumber: 'Please enter a valid mobile number',
      pleaseenterstate: 'Please enter state',
      pleaseentercity: 'Please enter city',
      pleaseenterpincode: 'Please enter pincode',
      pleaseenteravalidpincodenumber: 'Please enter a valid pincode number',
      pleaseentereducation: 'Please enter education',
      pleaseenteraddress: 'Please enter current address',
      pleaseenterjob: 'Please enter job',
      pleaseentergender: 'Please enter gender',
      pleasechoosemaritalstatus: 'Please choose marital status',
      pleasechooserelation: 'Please choose relationship',
      pay: 'Pay',
      registeredsuccessfully: 'Registered successfully.',
      paymentDoneSuccessfully: 'Payment Done Successfully.',
      paymentFailed: 'Payment Failed.',
      goTologinpage: 'GO TO LOGIN PAGE',
      registrationfailed: 'Registration failed !',
      pleaseTryAgain: 'Please Try Again',
      gotoregister: 'GO TO REGISTER PAGE',
      searchhere: 'Search here...',
      nosearchdatafound: 'No search data found...',
      nodatafound: 'No data found...',
      invoice: 'Invoice',
      download: 'Download',
      familyMembers: 'Family Members',
      downloadsuccessfully: 'Download successfully',
      profileimageupdatedsuccessfully: 'Profile image updated successfully.',
      currentpassword: 'Current password',
      newPassword: 'New Password',
      confirmpassword: 'Confirm password',
      currentpasswordisrequired: 'Current password is required',
      newpasswordisrequired: 'New password is required',
      confirmpasswordisrequired: 'Confirm password is required',
      newpasswordmustbedifferentfromthecurrentpassword: 'New password must be different from the current password!',
      incorrectcurrentpassword: 'Incorrect current password',
      passwordupdatedsuccessfully: 'Password updated successfully.',
      dataupdatedsuccessfully: 'Data updated successfully.',
      chooseyourgender: 'Choose Your Gender',
      update: 'Update',
      datadeletedsuccessfully: 'Data deleted successfully.',
      personalid: 'Personal Id.',
      age: 'Age',
      deleteconfirm: 'Are you sure you want to delete ?',
      confirmlogout: 'Are you sure you want to logout ?',
      confirm: 'Confirm',
      familymembersarenotavailable: 'Family members are not available...',
      addnewfamilymembers: 'Add new family Members',
      form: 'Form',
      selectrelation: 'Select Relation',
      youcantaddmorethan7forms: 'You can not add more than 7 forms.',
      fillthedatatoaddnewform: 'Fill the data to add new form.',
      addform: 'Add Form.',
      submit: 'Submit',
      allvillages: 'All villages',
      cancel: 'Cancel',
      yes: 'Yes',
      shereapp: 'Shere app',
      entermobilenumberandpassword: 'Enter mobile number and password',
    },
  },
  gu: {
    translation: {
      greeting: 'હેલો!',
      changeLanguage: 'ભાષા બદલો',
      welcome: 'સ્વાગત છે',
      goodbye: 'આવજો',
      contactusheading: 'જો તમે પંચાલ સમાજ એપમાં કોઈ સમસ્યા અનુભવો છો અથવા વધારાના કાર્યો સૂચવવા ઈચ્છો છો, તો કૃપા કરીને નીચે આપેલા નંબર પર અમારો સંપર્ક કરો.',
      developercontact: 'વેબસાઇટ / એપ બનાવનારનો સંપર્ક',
      developeby: 'બનાવનાર',
      successchangeLanguage: 'સફળતાપૂર્વક ભાષા બદલી',
      loginsuccessfully: 'લૉગિન સફળતાપૂર્વક થઈ ગયું.',
      home: 'હોમ',
      profile: 'પ્રોફાઇલ',
      login: 'લોગીન ',
      committeeMember: 'સમિતિના સભ્યો',
      settings: 'સેટિંગ',
      contactUs: 'અમારો સંપર્ક કરો',
      logout: 'લૉગ આઉટ',
      aboutUs: 'અમારા વિશે',
      register: 'નોંધણી કરો',
      news: 'સમાચાર',
      newsDetails: 'સમાચાર વિગતો',
      villages: 'ગામડાઓ',
      village: 'ગામ',
      paymentPage: 'ચુકવણી',
      directory: 'ડિરેક્ટરી',
      familyList: 'કુટુંબ યાદી',
      paymentSuccess: 'ચુકવણી સફળ',
      paymentFail: 'ચુકવણી નિષ્ફળ',
      familyDetailsPage: 'કુટુંબ વિગતો',
      searchDirectory: 'શોધ ડિરેક્ટરી',
      changePassword: 'પાસવર્ડ બદલો',
      familyRegister: 'કુટુંબ રજીસ્ટર',
      editMainDetails: 'મુખ્ય વિગતો સંપાદિત કરો',
      editFamilyDetails: 'કૌટુંબિક વિગતો સંપાદિત કરો',
      maintenanceScreen: 'જાળવણી',
      search: 'શોધ',
      select_your_village: 'તમારું ગામ પસંદ કરો',
      name: 'નામ',
      firstname: 'પોતાનું નામ',
      middlename: 'પિતાનું નામ',
      lastname: 'અટક',
      password: 'પાસવર્ડ',
      dateofbirth: 'જન્મ તારીખ',
      mobileno: 'મોબાઇલ',
      email: 'ઇમેઇલ',
      mobile: 'મોબાઇલ નંબર',
      address: 'હાલનું સરનામું',
      city: 'શહેર',
      state: 'રાજ્ય',
      pincode: 'પિનકોડ',
      education: 'ભણતર',
      profession: 'વ્યવસાય',
      maritalstatus: 'વૈવાહિક સ્થિતિ',
      relationship: 'સંબંધ',
      gender: 'લિંગ',
      male: 'પુરુષ',
      female: 'સ્ત્રી',
      other: 'અન્ય',
      married: 'પરિણીત',
      unmarried: 'અપરિણીત',
      widower: 'વિધુર',
      widow: 'વિધવા',
      divorcee: 'છૂટાછેડા લેનાર',
      passwordisrequired: 'પાસવર્ડ જરૂરી છે',
      mobilenumberisrequired: 'મોબાઈલ નંબર જરૂરી છે',
      invalidmobilenumber: 'ખોટો મોબાઇલ નંબર',
      incorrectPassword: 'ખોટો પાસવર્ડ',
      next: 'આગળ વધો',
      selectyourvillage: 'તમારું ગામ પસંદ કરો.',
      registerthemainmemberofthehouse: 'ઘર ના મુખ્ય સભ્ય નું રજીસ્ટર કરો.',
      pleasefillalltherequiredfields: 'કૃપા કરીને તમામ જરૂરી માહિતી ભરો.',
      dopaymentforsuccessfullregistration: 'સફળ રજીસ્ટ્રેશન માટે પેમેન્ટ કરો.',
      passwordmusthaveatleastoneletteronenumberandonespecialcharacter: 'પાસવર્ડમાં ઓછામાં ઓછો એક અક્ષર, એક નંબર અને એક વિશેષ અક્ષર હોવો આવશ્યક છે',
      pleaseenterfirstname: 'કૃપા કરીને પોતાનું નામ દાખલ કરો',
      pleaseenterlastname: 'કૃપા કરીને અટક દાખલ કરો',
      pleaseentermiddlename: 'કૃપા કરીને પિતાનું નામ દાખલ કરો',
      pleaseenterpassword: 'કૃપા કરીને પાસવર્ડ દાખલ કરો',
      passwordmusthaveatleastcharacters: 'પાસવર્ડમાં ઓછામાં ઓછા 6 અક્ષરો હોવા આવશ્યક છે',
      pleaseenterdob: 'કૃપા કરીને જન્મતારીખ દાખલ કરો',
      pleaseentermobilenumber: 'કૃપા કરીને મોબાઇલ નંબર દાખલ કરો',
      pleaseenteravalidmobilenumber: 'કૃપા કરીને માન્ય મોબાઇલ નંબર દાખલ કરો',
      pleaseenterstate: 'કૃપા કરીને રાજ્ય દાખલ કરો',
      pleaseentercity: 'કૃપા કરીને શહેર દાખલ કરો',
      pleaseenterpincode: 'કૃપા કરીને પિનકોડ દાખલ કરો',
      pleaseenteravalidpincodenumber: 'કૃપા કરીને માન્ય પિનકોડ નંબર દાખલ કરો',
      pleaseentereducation: 'કૃપા કરીને ભણતર દાખલ કરો',
      pleaseenteraddress: 'કૃપા કરીને હાલનું સરનામું દાખલ કરો',
      pleaseenterjob: 'કૃપા કરીને વ્યવસાય દાખલ કરો',
      pleaseentergender: 'કૃપા કરીને લિંગ દાખલ કરો',
      pleasechoosemaritalstatus: 'કૃપા કરીને વૈવાહિક સ્થિતિ પસંદ કરો',
      pleasechooserelation: 'કૃપા કરીને સંબંધ પસંદ કરો',
      pay: 'ચૂકવણી',
      registeredsuccessfully: 'સફળતાપૂર્વક રજીસ્ટ્રેશન થઈ ગયું.',
      paymentDoneSuccessfully: 'ચુકવણી સફળતાપૂર્વક થઈ.',
      paymentFailed: 'ચુકવણી નિષ્ફળ.',
      goTologinpage: 'લોગિન પેજ પર જાઓ',
      registrationfailed: 'રજીસ્ટર નિષ્ફળ થયું.',
      pleaseTryAgain: 'મહેરબાની કરીને ફરીથી પ્રયતન કરો.',
      gotoregister: 'રજીસ્ટર પેજ પર જાઓ',
      searchhere: 'અહીં શોધો...',
      nosearchdatafound: 'કોઈ શોધ ડેટા મળ્યો નથી...',
      nodatafound: 'કોઈ ડેટા મળ્યો નથી...',
      invoice: 'બીલ',
      download: 'ડાઉનલોડ',
      familyMembers: 'પરિવારના સભ્યો',
      downloadsuccessfully: 'સફળતાપૂર્વક ડાઉનલોડ કરો',
      profileimageupdatedsuccessfully: 'પ્રોફાઇલ છબી સફળતાપૂર્વક અપડેટ થઈ.',
      currentpassword: 'અત્યારનો પાસવર્ડ',
      newPassword: 'નવો પાસવર્ડ',
      confirmpassword: 'કન્ફર્મ પાસવર્ડ',
      currentpasswordisrequired: 'વર્તમાન પાસવર્ડ જરૂરી છે',
      newpasswordisrequired: 'નવો પાસવર્ડ જરૂરી છે',
      confirmpasswordisrequired: 'કન્ફર્મ પાસવર્ડ જરૂરી છે',
      newpasswordmustbedifferentfromthecurrentpassword: 'નવો પાસવર્ડ વર્તમાન પાસવર્ડથી અલગ હોવો જોઈએ!',
      incorrectcurrentpassword: 'ખોટો વર્તમાન પાસવર્ડ',
      passwordupdatedsuccessfully: 'પાસવર્ડ સફળતાપૂર્વક અપડેટ થયો.',
      dataupdatedsuccessfully: 'ડેટા સફળતાપૂર્વક અપડેટ થઈ ગયા.',
      chooseyourgender: 'લિંગ પસંદ કરો',
      update: 'અપડેટ',
      datadeletedsuccessfully: 'ડેટા કાઢી નાખ્યું.',
      personalid: 'વ્યક્તિગત આઈડી',
      age: 'ઉંમર',
      deleteconfirm: 'શું તમે ખરેખર કાઢી નાખવા માંગો છો?',
      confirmlogout: 'શું તમે ખરેખર લોગઆઉટ કરવા માંગો છો?',
      confirm: 'પુષ્ટિ કરો',
      familymembersarenotavailable: 'પરિવારના સભ્યો ઉપલબ્ધ નથી',
      addnewfamilymembers: 'કુટુંબના નવા સભ્યો ઉમેરો',
      form: 'ફોર્મ',
      selectrelation: 'સંબંધ પસંદ કરો',
      youcantaddmorethan7forms: 'તમે 7 થી વધુ ફોર્મ ઉમેરી શકતા નથી.',
      fillthedatatoaddnewform: 'નવું ફોર્મ ઉમેરવા માટે તમામ માહિતી ભરો.',
      addform: 'નવું ફોર્મ ઉમેરો',
      submit: 'સબમિટ',
      allvillages: 'બધા ગામો',
      cancel: 'રદ કરો',
      yes: 'હા',
      shereapp: 'એપ્લિકેશન શેર કરો',
      entermobilenumberandpassword: 'મોબાઇલ નંબર અને પાસવર્ડ દાખલ કરો',

    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
