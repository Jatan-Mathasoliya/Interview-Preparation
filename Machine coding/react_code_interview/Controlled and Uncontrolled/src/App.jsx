import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FAQ from './faq'
import Todo from './todo'
import Controlled from './controlled'

function App() {

  const faqData = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces."
    },
    {
      question: "How do you create a component in React?",
      answer: "You can create a component in React by defining a JavaScript function or class that returns JSX."
    }
  ];

  return (
    <>
      <div>
        {faqData.map((item, index) => (
          <FAQ key={index} questions={item.question} answers={item.answer} />
        ))}
      </div>
      <Todo />
      <Controlled />
    </>
  )
}

export default App
