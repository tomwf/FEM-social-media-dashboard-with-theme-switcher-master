import StyledDashboard from './styles/Dashboard.styled'
import Header from '../components/Header'
import Overall from '../components/Overall'
import Overview from '../components/Overview'

const Dashboard = ({ toggleTheme, isDarkTheme }) => (
  <StyledDashboard>
    <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
    <Overall />
    <h2>Overview - Today</h2>
    <Overview />
  </StyledDashboard>
)

export default Dashboard
