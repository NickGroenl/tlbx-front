import { render, screen } from '@testing-library/react'
import App from './App'
import ListAllCSVFiles from './components/list'
import TableCSVFiles from './components/table'


import '@testing-library/jest-dom'

describe('Print list data', () => {

  it('if data print in the list', () => {
    const dcmt = render(<ListAllCSVFiles files={{files: ["test9.csv", "test2.csv"]}}/>);
    expect(dcmt)
  })
})
describe('Print table data', () => {

    it('if data print in the table', () => {
      const dcmt = render(<TableCSVFiles files={[{name: "test9.csv", hex: "asdsadasd"}]}/>);
      expect(dcmt)
    })
  })