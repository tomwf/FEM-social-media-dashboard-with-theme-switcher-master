import StyledDashboard from './styles/Dashboard.styled'
import Header from '../components/Header'
import Overall from '../components/Overall'
import Overview from '../components/Overview'

const Dashboard = () => (
  <StyledDashboard>
    <Header />
    <Overall />
    <h2>Overview - Today</h2>
    <Overview />
  </StyledDashboard>
)

export default Dashboard
