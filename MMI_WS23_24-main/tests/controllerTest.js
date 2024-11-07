const expect = require('chai').expect;
const apiTemperature = require('../public/js/auxiliaryAPI')

//TODO Unit Tests to implement

describe("fahrenheitToCelsius()", function(){
it('test below 32',function(){
  expect(Math.round(apiTemperature.fahrenheitToCelcius(30)*10)/10).to.equal(-1.1)   
})
it('test equal 32',function(){
    expect(Math.round(apiTemperature.fahrenheitToCelcius(32)*10)/10).to.equal(0)   
  })
it('test over 32',function(){
    expect(Math.round(apiTemperature.fahrenheitToCelcius(44)*10)/10).to.equal(6.7)   
})
});

describe("celsiusToFahrenheit()", function(){
    it('test below 0',function(){
      expect(Math.round(apiTemperature.celsiusToFahrenheit(-10)*10)/10).to.equal(14)   
    })
    it('test equal 0',function(){
        expect(Math.round(apiTemperature.celsiusToFahrenheit(0)*10)/10).to.equal(32)   
      })
    it('test over 0',function(){
        expect(Math.round(apiTemperature.celsiusToFahrenheit(10)*10)/10).to.equal(50)   
    })
    });