import App from './'
import { render } from '@testing-library/react'
let mockIsLoggedIn = false
jest.mock('../hooks/use-auth', () => {
    return jest.fn(() => ({
       isLoggedIn: mockIsLoggedIn
    }))
})
test('can show logged in message', () => {
    mockIsLoggedIn = true
    const { getByText } = render(<App/>)
    expect(getByText('Welcome')).toBeTruthy()
})


// SignOut.tsx
const SignOut = () => {
    const { signOut } = useAuth()
    return (
        <Button data-testid='sign-out' onClick={() => signOut()}>
           Sign Out
        </Button>
    )
}



