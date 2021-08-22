import rewire from "rewire"
import React from "react"
import { render } from "@testing-library/react"
const App = rewire("./App")
const mapStateToProps = App.__get__("mapStateToProps")
const mapDispatchToProps = App.__get__("mapDispatchToProps")
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapStateToProps({ age: { history: 1 }, a: { history: 10 }, rA: { history: 3 }, r: { history: 5 }, rB: { history: 1 }, b: { history: 2 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapStateToProps({ age: { history: 2 }, a: { history: 3 }, rA: { history: 0 }, r: { history: 5 }, rB: { history: 2 }, b: { history: 2 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapStateToProps({ age: { history: 5 }, a: { history: 2 }, rA: { history: 0 }, r: { history: 0 }, rB: { history: 2 }, b: { history: 5 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapStateToProps({ age: { history: 1 }, a: { history: 5 }, rA: { history: 0 }, r: { history: 3 }, rB: { history: 5 }, b: { history: 5 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapStateToProps({ age: { history: 3 }, a: { history: 0 }, rA: { history: 2 }, r: { history: 5 }, rB: { history: 1 }, b: { history: 2 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            mapStateToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("mapDispatchToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapDispatchToProps("2017-09-29T19:01:00.000")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapDispatchToProps("Mon Aug 03 12:45:00")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapDispatchToProps("01:04:03")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapDispatchToProps("2017-09-29T23:01:00.000Z")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            mapDispatchToProps(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
