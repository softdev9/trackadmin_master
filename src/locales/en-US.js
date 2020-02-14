import antdData from 'antd/lib/locale-provider/en_US'
// import localeData from 'react-intl/locale-data/en'

import '@formatjs/intl-pluralrules/polyfill';
import '@formatjs/intl-pluralrules/dist/locale-data/en'; // locale-data for en

const messages = {
  'topBar.issuesHistory': 'Issues History',
  'topBar.projectManagement': 'Project Management',
  'topBar.typeToSearch': 'Type to search...',
  'topBar.buyNow': 'Buy Bundle $26',
  'topBar.bitcoin': 'Bitcoin',
  'topBar.profileMenu.hello': 'Hello',
  'topBar.profileMenu.billingPlan': 'Billing Plan',
  'topBar.profileMenu.role': 'Role',
  'topBar.profileMenu.email': 'Email',
  'topBar.profileMenu.phone': 'Phone',
  'topBar.profileMenu.editProfile': 'Edit Profile',
  'topBar.profileMenu.logout': 'Logout',
}

export default {
  locale: 'en-US',
  antdData,
  // localeData,
  messages,
}
