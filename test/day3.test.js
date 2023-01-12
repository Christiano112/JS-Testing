import { expect } from 'chai';
import day3 from "../src/day3";

describe('day 3 tests', () => {
    it('should return an expected value from a callback', (value) => {
        day3((returnedValue) => {
            expect(returnedValue).to.equal("Christiano");
            value()
        })
    });

    it('should return an expected value from a promise', (value) => {
        day3()
            .then((returnedValue) => {
                expect(returnedValue).to.equal("Christiano");
                value()
            })
    });

    it('should return expected value from promise', () => {
        return day3()
            .then((returnedValue) => {
                expect(returnedValue).to.equal("Christiano");
            })
    })
})