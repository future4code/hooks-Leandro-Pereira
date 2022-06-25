// GoBack
export const goBack = (navigate) => {
    navigate(-1)
 }
 // HomePage
 export const goHome = (navigate) => {
    navigate('/')
 }
 
 // ListTripsPage
 export const goToListTrip = (navigate) => {
    navigate('/trips/list')
 }
 // LoginPage
 export const goToLoginPage = (navigate) => {
    navigate('/login')
 }
 
 // AdminHomePage
 export const goToAdminHome = (navigate) => {
    navigate("/admin/trips/list")
 }
 
 // CreateTripPage
 export const goToCreatTrip = (navigate) => {
    navigate("/admin/trips/create")
 }
 // TripDetailsPage
 export const goToDetailsPage = (navigate, id) => {
    navigate(`/admin/trips/${id}`)
 }
 // Logout
 export const logout = (navigate) => {
    localStorage.removeItem("token")
    navigate('/login');
 }
 
 // ApplicationFormPage
 export const goToApplicationForm = (navigate, id) => {
    navigate(`/trips/application/${id}`)
 }