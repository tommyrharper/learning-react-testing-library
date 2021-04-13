import React from "react";
import Counter from "../Counter";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";


let counterEl;
let inputEl;
let subBtnEl;
let addBtnEl;

beforeEach(() => {
  render(<Counter />);
  counterEl = screen.getByTestId('counter');
  inputEl = screen.getByTestId('input');
  subBtnEl = screen.getByTestId('subtract-btn');
  addBtnEl = screen.getByTestId('add-btn');
})

test("header renders with correct text", () => {
  const headerEl =  screen.getByTestId("header");

  expect(headerEl.textContent).toBe("My Counter");
});

test('counter initially starts with 0', () => {
  expect(counterEl.textContent).toBe('0');
});

test('input contains initial value of 1', () => {
  expect(inputEl.value).toBe('1');
});

test('add button renders with +', () => {
  expect(addBtnEl.textContent).toBe('+');
});

test('subtract button renders with -', () => {
  expect(subBtnEl.textContent).toBe('-');
});

test('change value of input works correctly', () => {
  expect(inputEl.value).toBe('1');

  fireEvent.change(inputEl, {
    target: {
      value: '5'
    }
  });

  expect(inputEl.value).toBe('5');
});

test('click on plus button adds 1 to counter', () => {
  fireEvent.click(addBtnEl);

  expect(counterEl.textContent).toBe('1');
});

test('click on subtract button minus 1 to counter', () => {
  fireEvent.click(subBtnEl);

  expect(counterEl.textContent).toBe('-1');
});

test('changing input value then clicking on add button works', () => {
  fireEvent.change(inputEl, {
    target: {
      value: '5'
    }
  });

  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);

  expect(counterEl.textContent).toBe('15');
});

test('changing input value then clicking on subract button works', () => {
  fireEvent.change(inputEl, {
    target: {
      value: '5'
    }
  });

  fireEvent.click(subBtnEl);
  fireEvent.click(subBtnEl);
  fireEvent.click(subBtnEl);

  expect(counterEl.textContent).toBe('-15');
});

test('changing input value then clicking add and subtract', () => {
  fireEvent.change(inputEl, {
    target: {
      value: '5'
    }
  });

  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);

  fireEvent.click(subBtnEl);
  fireEvent.click(subBtnEl);
  fireEvent.click(subBtnEl);

  expect(counterEl.textContent).toBe('5');
});

test('counter has correct class name', () => {
  expect(counterEl.className).toBe("");

  fireEvent.change(inputEl, {
    target: {
      value: '50'
    }
  });

  fireEvent.click(addBtnEl);

  expect(counterEl.className).toBe("");

  fireEvent.click(addBtnEl);

  expect(counterEl.className).toBe("red");

  fireEvent.click(subBtnEl);

  expect(counterEl.className).toBe("");

  fireEvent.click(subBtnEl);

  expect(counterEl.className).toBe("");

  fireEvent.click(subBtnEl);

  expect(counterEl.className).toBe("");

  fireEvent.click(subBtnEl);

  expect(counterEl.className).toBe("green");
});