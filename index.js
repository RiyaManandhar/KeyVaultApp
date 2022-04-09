// ----------------------------------------------------------------
// Centralised index for importing screens
// ----------------------------------------------------------------

// User Authentication
export { default as LoginScreen } from './src/screens/authentication/LoginScreen'
export { default as ForgotPasswordScreen } from './src/screens/authentication/ForgotPasswordScreen'
export { default as RegistrationController } from './src/screens/authentication/RegistrationController'
export { default as CreateEncryptionKey } from './src/screens/authentication/EncryptionKeyController'

// Home Screen
export { default as HomeScreen } from './src/screens/home/HomeScreen'
export { default as SettingsScreen } from './src/screens/home/SettingsScreen'
export { default as ProfileScreen } from './src/screens/home/ProfileScreen'
export { default as EditProfileScreen } from './src/screens/home/EditProfileScreen'

//management
export { default as AddPasswordScreen } from './src/screens/management/AddPasswordController'
export { default as GenerateScreen } from './src/screens/management/GenerateScreen'
export { default as ViewPasswordScreen } from './src/screens/view/ViewPasswordScreen'
export { default as EditPasswordScreen } from './src/screens/management/EditPasswordScreen'



