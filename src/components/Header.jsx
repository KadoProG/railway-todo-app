import { useCookies } from 'react-cookie'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { useNavigate, Link } from 'react-router-dom'
import { signOut } from '../authSlice'
import './header.scss'

export const Header = () => {
  const auth = useSelector((state) => state.auth.isSignIn)
  const dispatch = useDispatch()
  const navigation = useNavigate()
  // eslint-disable-next-line
  const [cookies, setCookie, removeCookie] = useCookies()

  const handleSignOut = () => {
    dispatch(signOut())
    removeCookie('token')
    navigation('/signin')
  }

  return (
    <header className="header">
      <Link to="/" className="header__title">
        <h1>Todoアプリ</h1>
      </Link>
      {auth ? (
        <button onClick={handleSignOut} className="sign-out-button">
          サインアウト
        </button>
      ) : (
        <></>
      )}
    </header>
  )
}
